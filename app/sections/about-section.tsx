type AboutSectionProps = {
  note: string;
  steps: readonly {
    title: string;
    description: string;
  }[];
};

export function AboutSection({ note, steps }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="rounded-[2rem] border border-white/60 bg-white/76 p-5 shadow-[0_26px_70px_rgba(51,24,89,0.1)] backdrop-blur sm:p-10"
    >
      <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
        <div className="rounded-[1.9rem] bg-[linear-gradient(160deg,var(--accent-deep)_0%,var(--accent)_100%)] p-6 text-white shadow-[0_24px_60px_rgba(58,31,96,0.2)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/90 sm:text-sm sm:tracking-[0.24em]">
            Как проходит работа
          </p>
          <h2 className="font-display mt-4 max-w-xl text-3xl leading-[0.95] sm:text-4xl sm:leading-none">
            Не хаотично и не бесконечно. По шагам, с пониманием, куда мы идём.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/96 sm:text-lg sm:leading-8">
            У работы есть структура: сначала мы разбираем, что происходит, потом находим причины, переходим к
            изменениям и закрепляем результат в жизни.
          </p>

          <div className="mt-8 rounded-[1.6rem] border border-white/18 bg-white/14 p-5 backdrop-blur-sm">
            <p className="text-base font-semibold leading-7 text-white/98 sm:text-lg">
              {note}
            </p>
          </div>
        </div>

        <div className="relative grid gap-4">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[1.18rem] top-8 hidden w-px bg-[linear-gradient(180deg,rgba(104,75,123,0.08)_0%,rgba(104,75,123,0.32)_20%,rgba(104,75,123,0.32)_80%,rgba(104,75,123,0.08)_100%)] md:block"
          />

          {steps.map((item, index) => (
            <article
              key={item.title}
              className="relative rounded-[1.7rem] border border-[var(--border)] bg-[var(--surface-soft)] p-5 shadow-[0_14px_40px_rgba(57,31,89,0.06)] sm:p-6 md:pl-16"
            >
              <div className="md:absolute md:left-0 md:top-6">
                <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[var(--accent-deep)] px-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(57,31,89,0.22)]">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-7 text-[var(--foreground)] md:mt-0">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
