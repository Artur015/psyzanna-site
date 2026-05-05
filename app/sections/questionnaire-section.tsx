import { IntakeForm } from "@/app/intake-form";

type QuestionnaireStep = {
  title: string;
  description: string;
};

type QuestionnaireSectionProps = {
  steps: readonly QuestionnaireStep[];
};

export function QuestionnaireSection({ steps }: QuestionnaireSectionProps) {
  return (
    <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
      <article className="rounded-[2.1rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,235,252,0.9))] p-5 shadow-[0_24px_70px_rgba(48,23,86,0.09)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.24em]">
          Что дальше
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-3xl leading-[0.95] text-[var(--foreground)] sm:text-4xl sm:leading-none">
          После анкеты вы не остаетесь в неизвестности.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
          Запись устроена просто: вы оставляете базовые данные, а дальше быстро понимаете, что
          будет происходить и когда с вами свяжутся.
        </p>

        <div className="mt-8 grid gap-4">
          {steps.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[1.7rem] border border-[var(--border)] bg-white/84 p-5 shadow-[0_12px_34px_rgba(57,31,89,0.05)] sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] px-3 text-sm font-semibold text-[var(--accent-deep)]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-7 text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[var(--muted-foreground)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </article>

      <section
        id="questionnaire"
        className="rounded-[2.1rem] border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,239,253,0.82))] p-5 shadow-[0_28px_80px_rgba(48,23,86,0.12)] backdrop-blur sm:p-10"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-deep)] sm:text-sm">
            Запись на консультацию
          </span>
          <span className="inline-flex rounded-full border border-[var(--border)] bg-white/86 px-4 py-2 text-sm font-medium text-[var(--foreground)]">
            Ответ в течение 24 часов
          </span>
          <span className="inline-flex rounded-full border border-[rgba(104,75,123,0.14)] bg-[rgba(255,255,255,0.86)] px-4 py-2 text-sm font-medium text-[var(--accent-deep)]">
            Первая сессия 30 минут — бесплатно
          </span>
        </div>

        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-[0.95] text-[var(--foreground)] sm:text-5xl sm:leading-none">
          Оставьте данные для первого контакта и согласования консультации.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
          Укажите базовые данные, чтобы я могла понять формат первого обращения и связаться с
          вами. Всё устроено просто, конфиденциально и без лишней бюрократии.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-4">
            <p className="text-sm font-semibold leading-6 text-[var(--foreground)]">
              Только базовые данные
            </p>
          </div>
          <div className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-4">
            <p className="text-sm font-semibold leading-6 text-[var(--foreground)]">
              Конфиденциально
            </p>
          </div>
          <div className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-4">
            <p className="text-sm font-semibold leading-6 text-[var(--foreground)]">
              Онлайн-формат
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-[1.9rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(249,243,254,0.84))] p-5 shadow-[0_18px_40px_rgba(57,31,89,0.06)] sm:p-6">
          <IntakeForm />
        </div>
      </section>
    </section>
  );
}
