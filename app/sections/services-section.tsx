type FocusArea = {
  title: string;
  intro: string;
  lead: string;
  points: readonly string[];
  focusLead: string;
  focusText: string;
};

type ServicesSectionProps = {
  focusAreas: readonly FocusArea[];
};

export function ServicesSection({ focusAreas }: ServicesSectionProps) {
  return (
    <section id="services" className="grid gap-5 lg:grid-cols-3">
      {focusAreas.map((area) => (
        <article
          key={area.title}
          className="flex h-full flex-col rounded-[2rem] border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,232,255,0.84))] p-5 shadow-[0_22px_60px_rgba(50,22,88,0.1)] sm:p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.22em]">
            Направление
          </p>
          <h3 className="font-display mt-4 text-2xl leading-[0.96] text-[var(--foreground)] sm:text-3xl sm:leading-none">
            {area.title}
          </h3>
          <p className="mt-5 text-base leading-8 text-[var(--foreground)]">
            {area.intro}
          </p>
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.08em] text-[var(--muted-foreground)]">
            {area.lead}
          </p>
          <ul className="mt-4 space-y-3 text-base leading-8 text-[var(--muted-foreground)]">
            {area.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="text-[var(--accent)]">—</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-[1.4rem] border border-[rgba(104,75,123,0.14)] bg-white/72 p-4 lg:mt-auto">
            <p className="text-base leading-7 text-[var(--foreground)]">
              <span className="font-semibold uppercase tracking-[0.08em] text-[var(--accent-deep)]">
                Фокус
              </span>{" "}
              <span className="font-semibold text-[var(--foreground)]">
                {area.focusLead}
              </span>
            </p>
            <p className="mt-2 text-base leading-7 text-[var(--foreground)]">
              {area.focusText}
            </p>
          </div>
        </article>
      ))}

      <article className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(244,235,255,0.96),rgba(255,255,255,0.92))] p-5 shadow-[0_22px_60px_rgba(50,22,88,0.08)] sm:p-7 lg:col-span-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.22em]">
          Поддержка с выбором формата
        </p>
        <div className="mt-4 max-w-4xl space-y-3 text-[var(--foreground)]">
          <p className="font-display text-2xl leading-[1.02] sm:text-3xl">
            Если вы не уверены, какой формат подойдёт — это нормально.
          </p>
          <p className="text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
            Заполните анкету, и я предложу оптимальный вариант работы.
          </p>
        </div>
        <a
          href="#questionnaire"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-4 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(104,75,123,0.28)] transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto sm:px-7 sm:text-base"
        >
          Записаться на консультацию
        </a>
      </article>
    </section>
  );
}
