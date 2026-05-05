'use server';

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { type IntakeFormState } from "@/app/intake-form-state";

const recipientEmail = process.env.INTAKE_TO_EMAIL?.trim() || "sanna.kononenko@gmail.com";
const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
const smtpPort = Number(process.env.SMTP_PORT?.trim() || "465");
const smtpUser = process.env.SMTP_USER?.trim() || recipientEmail;
const smtpPass = process.env.SMTP_PASS?.trim() || "";
const smtpSecure = (process.env.SMTP_SECURE?.trim() || "").toLowerCase()
  ? process.env.SMTP_SECURE?.trim().toLowerCase() === "true"
  : smtpPort === 465;
const smtpFrom = process.env.SMTP_FROM?.trim() || smtpUser;
const upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL?.trim() || "";
const upstashRedisRestToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim() || "";
const rateLimitWindowMs = Number(process.env.RATE_LIMIT_WINDOW_MS?.trim() || "60000");
const rateLimitMaxSubmissions = Number(process.env.RATE_LIMIT_MAX_SUBMISSIONS?.trim() || "3");

const minimumCompletionMs = 2500;
const maximumCompletionMs = 1000 * 60 * 60 * 12;
const maxFirstNameLength = 80;
const maxLastNameLength = 120;
const maxEmailLength = 254;
const minimumAge = 1;
const maximumAge = 120;

function getFieldValue(formData: FormData, fieldName: string) {
  return String(formData.get(fieldName) ?? "").trim();
}

function createEmailPayload(firstName: string, lastName: string, age: number, email: string) {
  const submittedAt = new Date().toLocaleString("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const subject = `Новая запись на консультацию: ${firstName} ${lastName} (${email})`;
  const text = [
    "Новая запись на консультацию с сайта психолога.",
    "",
    `Имя: ${firstName}`,
    `Фамилия: ${lastName}`,
    `Возраст: ${age}`,
    `Email: ${email}`,
    "Согласие на обработку персональных данных: да",
    `Дата отправки: ${submittedAt}`,
  ].join("\n");

  return { subject, text };
}

function buildMailtoUrl(firstName: string, lastName: string, age: number, email: string) {
  const { subject, text } = createEmailPayload(firstName, lastName, age, email);
  const params = new URLSearchParams({
    subject,
    body: text,
  });

  return `mailto:${recipientEmail}?${params.toString()}`;
}

async function getClientFingerprint() {
  const requestHeaders = await headers();
  const forwardedFor = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = requestHeaders.get("x-real-ip")?.trim();
  const userAgent = requestHeaders.get("user-agent")?.trim() || "unknown-agent";

  return `${forwardedFor || realIp || "unknown-ip"}::${userAgent.slice(0, 160)}`;
}

async function checkRateLimit() {
  if (!upstashRedisRestUrl || !upstashRedisRestToken) {
    return { limited: false };
  }

  if (
    !Number.isFinite(rateLimitWindowMs) ||
    rateLimitWindowMs <= 0 ||
    !Number.isFinite(rateLimitMaxSubmissions) ||
    rateLimitMaxSubmissions <= 0
  ) {
    return { limited: false };
  }

  const fingerprint = await getClientFingerprint();
  const rateLimitKey = `intake-rate:${fingerprint}`;

  const response = await fetch(`${upstashRedisRestUrl}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${upstashRedisRestToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      ["INCR", rateLimitKey],
      ["PEXPIRE", rateLimitKey, String(rateLimitWindowMs), "NX"],
    ]),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Upstash rate limit request failed with ${response.status}.`);
  }

  const data = (await response.json()) as {
    result?: Array<{ result?: number | string | null }>;
  };

  const currentCount = Number(data.result?.[0]?.result ?? 0);

  return {
    limited: currentCount > rateLimitMaxSubmissions,
  };
}

async function sendSubmissionEmail(firstName: string, lastName: string, age: number, email: string) {
  const { subject, text } = createEmailPayload(firstName, lastName, age, email);

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: smtpFrom,
    to: recipientEmail,
    subject,
    text,
    replyTo: email,
  });
}

function buildSuccessState(message: string, mailtoUrl = ""): IntakeFormState {
  return {
    status: "success",
    message,
    mailtoUrl,
    submissionId: crypto.randomUUID(),
  };
}

function buildErrorState(message: string): IntakeFormState {
  return {
    status: "error",
    message,
    mailtoUrl: "",
    submissionId: "",
  };
}

export async function submitIntakeForm(
  _previousState: IntakeFormState,
  formData: FormData,
): Promise<IntakeFormState> {
  const firstName = getFieldValue(formData, "firstName");
  const lastName = getFieldValue(formData, "lastName");
  const age = getFieldValue(formData, "age");
  const email = getFieldValue(formData, "email");
  const consent = formData.get("consent") === "accepted";
  const website = getFieldValue(formData, "website");
  const startedAt = getFieldValue(formData, "startedAt");
  const now = Date.now();

  if (website) {
    return buildSuccessState("Спасибо. Анкета получена.");
  }

  if (!firstName || !lastName || !age || !email) {
    return buildErrorState("Пожалуйста, заполните все поля.");
  }

  if (firstName.length > maxFirstNameLength) {
    return buildErrorState("\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 80 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.");
  }

  if (lastName.length > maxLastNameLength) {
    return buildErrorState(
      "\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 120 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",
    );
  }

  if (email.length > maxEmailLength) {
    return buildErrorState(
      "Email \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 254 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return buildErrorState("Введите корректный email.");
  }

  if (!consent) {
    return buildErrorState(
      "Нужно подтвердить согласие на обработку персональных данных.",
    );
  }

  const parsedAge = Number(age);
  if (!Number.isInteger(parsedAge) || parsedAge < minimumAge || parsedAge > maximumAge) {
    return buildErrorState(
      "\u0412\u043e\u0437\u0440\u0430\u0441\u0442 \u043d\u0443\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0446\u0435\u043b\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c \u043e\u0442 1 \u0434\u043e 120.",
    );
  }

  const startedAtTimestamp = Number(startedAt);
  if (!Number.isFinite(startedAtTimestamp)) {
    return buildErrorState("Пожалуйста, обновите страницу и отправьте анкету снова.");
  }

  const completionTimeMs = now - startedAtTimestamp;
  if (completionTimeMs < minimumCompletionMs) {
    return buildErrorState(
      "Форма отправлена слишком быстро. Подождите пару секунд и попробуйте снова.",
    );
  }

  if (completionTimeMs > maximumCompletionMs) {
    return buildErrorState("Сессия анкеты устарела. Обновите страницу и попробуйте снова.");
  }

  try {
    const rateLimitResult = await checkRateLimit();

    if (rateLimitResult.limited) {
      return buildErrorState(
        "Слишком много попыток отправки. Пожалуйста, подождите минуту и попробуйте снова.",
      );
    }
  } catch (error) {
    console.error("Failed to check Upstash rate limit.", error);
  }

  if (smtpPass) {
    try {
      await sendSubmissionEmail(firstName, lastName, parsedAge, email);

      return buildSuccessState(
        `Спасибо, ${firstName}. Ваша запись на консультацию отправлена психологу.`,
      );
    } catch (error) {
      console.error("Failed to send questionnaire email via SMTP.", error);

      return buildSuccessState(
        "Не удалось отправить автоматически. Ниже доступна готовая ссылка для письма.",
        buildMailtoUrl(firstName, lastName, parsedAge, email),
      );
    }
  }

  return buildSuccessState(
    "Не удалось отправить автоматически. Ниже доступна готовая ссылка для письма.",
    buildMailtoUrl(firstName, lastName, parsedAge, email),
  );
}
