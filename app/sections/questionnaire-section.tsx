import { IntakeForm } from "@/app/intake-form";

type QuestionnaireSectionProps = {
  steps: readonly string[];
};

export function QuestionnaireSection({ steps }: QuestionnaireSectionProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <article className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(160deg,var(--accent-deep)_0%,var(--accent)_100%)] p-5 text-white shadow-[0_30px_80px_rgba(41,18,78,0.22)] sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-sm sm:tracking-[0.24em]">
          Как проходит запись
        </p>
        <h2 className="font-display mt-4 text-3xl leading-[0.95] text-white sm:text-5xl sm:leading-none">
          Анкета помогает начать разговор ещё до первой встречи.
        </h2>
        <div className="mt-8 grid gap-4">
          {steps.map((item, index) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-white/12 bg-white/8 p-4 sm:p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55 sm:text-sm sm:tracking-[0.22em]">
                Шаг {index + 1}
              </p>
              <p className="mt-3 text-base leading-7 text-white/92">{item}</p>
            </div>
          ))}
        </div>
      </article>

      <section
        id="questionnaire"
        className="rounded-[2rem] border border-white/65 bg-white/82 p-5 shadow-[0_28px_80px_rgba(48,23,86,0.12)] backdrop-blur sm:p-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.24em]">
          Анкета для записи
        </p>
        <h2 className="font-display mt-4 text-3xl leading-[0.95] text-[var(--foreground)] sm:text-5xl sm:leading-none">
          Оставьте данные для первого обращения.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
          Укажите имя, фамилию, возраст и электронную почту. Перед отправкой подтвердите
          согласие на обработку персональных данных и при необходимости перейдите к политике
          конфиденциальности.
        </p>

        <div className="mt-8 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-sm leading-7 text-[var(--muted-foreground)]">
          Форма содержит только базовые данные для первичного обращения. После отправки анкета
          направляется психологу на электронную почту, а вся информация обрабатывается
          конфиденциально.
        </div>

        <div className="mt-8">
          <IntakeForm />
        </div>
      </section>
    </section>
  );
}
