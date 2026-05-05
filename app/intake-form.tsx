'use client';

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { submitIntakeForm } from "@/app/actions";
import { initialIntakeFormState } from "@/app/intake-form-state";

const fieldClassName =
  "mt-2 w-full rounded-[1.2rem] border border-[rgba(104,75,123,0.14)] bg-[rgba(255,255,255,0.92)] px-4 py-3.5 text-base text-[var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_8px_24px_rgba(57,31,89,0.04)] outline-none transition placeholder:text-[var(--placeholder)] focus:border-[var(--accent)] focus:ring-4 focus:ring-[rgba(104,75,123,0.12)]";

const honeypotWrapperClassName =
  "pointer-events-none absolute left-[-10000px] top-auto h-px w-px overflow-hidden opacity-0";
const maxFirstNameLength = 80;
const maxLastNameLength = 120;
const maxEmailLength = 254;
const minimumAge = 1;
const maximumAge = 120;

export function IntakeForm() {
  const [state, formAction, pending] = useActionState(
    submitIntakeForm,
    initialIntakeFormState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const startedAtFieldRef = useRef<HTMLInputElement>(null);

  const refreshStartedAt = () => {
    if (startedAtFieldRef.current) {
      startedAtFieldRef.current.value = Date.now().toString();
    }
  };

  useEffect(() => {
    refreshStartedAt();
  }, []);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      refreshStartedAt();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="relative space-y-5">
      <input ref={startedAtFieldRef} type="hidden" name="startedAt" defaultValue="" />

      <div className={honeypotWrapperClassName} aria-hidden="true">
        <label htmlFor="company-website">Website</label>
        <input
          id="company-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="border-0 bg-transparent p-0"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-[var(--foreground)]">
          Имя
          <input
            type="text"
            name="firstName"
            autoComplete="given-name"
            required
            maxLength={maxFirstNameLength}
            className={fieldClassName}
            placeholder="Например, Анна"
          />
        </label>

        <label className="text-sm font-medium text-[var(--foreground)]">
          Фамилия
          <input
            type="text"
            name="lastName"
            autoComplete="family-name"
            required
            maxLength={maxLastNameLength}
            className={fieldClassName}
            placeholder="Например, Иванова"
          />
        </label>

        <label className="text-sm font-medium text-[var(--foreground)] sm:col-span-2">
          Возраст
          <input
            type="number"
            name="age"
            min={minimumAge}
            max={maximumAge}
            inputMode="numeric"
            required
            className={fieldClassName}
            placeholder="Ваш возраст"
          />
        </label>

        <label className="text-sm font-medium text-[var(--foreground)] sm:col-span-2">
          Электронная почта
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={maxEmailLength}
            className={fieldClassName}
            placeholder="example@mail.com"
          />
        </label>
      </div>

      <div className="rounded-[1.6rem] border border-[var(--border)] bg-[rgba(255,255,255,0.8)] p-4 shadow-[0_10px_28px_rgba(57,31,89,0.04)] sm:p-5">
        <label className="flex items-start gap-3 text-sm leading-7 text-[var(--foreground)]">
          <input
            type="checkbox"
            name="consent"
            value="accepted"
            required
            className="mt-1 h-4 w-4 rounded border border-[var(--border)] text-[var(--accent)] accent-[var(--accent)]"
          />
          <span>
            Я даю согласие на обработку моих персональных данных в соответствии
            с политикой конфиденциальности.
          </span>
        </label>

        <Link
          href="/privacy-policy"
          className="mt-3 inline-flex text-sm font-medium text-[var(--accent-deep)] underline underline-offset-4 transition hover:opacity-80"
        >
          Политика конфиденциальности
        </Link>
      </div>

      <div className="flex flex-col gap-4 rounded-[1.6rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(245,236,252,0.72))] p-4 shadow-[0_10px_28px_rgba(57,31,89,0.04)] md:flex-row md:items-center md:justify-between sm:p-5">
        <p className="max-w-2xl text-sm leading-7 text-[var(--muted-foreground)]">
          После отправки анкета поступает психологу. Если автоматическая отправка
          на сервере недоступна, ниже появится готовая ссылка для письма в вашем
          почтовом приложении.
        </p>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3.5 text-base font-semibold text-white shadow-[0_16px_38px_rgba(104,75,123,0.22)] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70 md:min-w-56 md:w-auto md:px-6"
        >
          {pending ? "Записываем..." : "Записаться на консультацию"}
        </button>
      </div>

      <p className="rounded-[1.5rem] border border-[rgba(104,75,123,0.14)] bg-[rgba(255,255,255,0.8)] px-4 py-3.5 text-sm font-medium leading-7 text-[var(--foreground)] shadow-[0_8px_24px_rgba(57,31,89,0.03)]">
        Вся информация остаётся конфиденциальной.
      </p>

      {state.message ? (
        <div
          className={`space-y-2 rounded-[1.4rem] border px-4 py-3 text-sm leading-7 ${
            state.status === "success"
              ? "border-[rgba(104,75,123,0.16)] bg-[rgba(238,228,255,0.9)] text-[var(--accent-deep)]"
              : "border-[rgba(191,75,75,0.18)] bg-[rgba(255,239,239,0.92)] text-[rgb(148,39,39)]"
          }`}
        >
          <p>{state.message}</p>
          {state.mailtoUrl ? (
            <a href={state.mailtoUrl} className="underline underline-offset-4">
              Если письмо не открылось, нажмите здесь
            </a>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}
