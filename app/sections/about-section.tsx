type AboutSectionProps = {
  principles: readonly string[];
};

export function AboutSection({ principles }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="grid gap-6 rounded-[2rem] border border-white/60 bg-white/76 p-5 shadow-[0_26px_70px_rgba(51,24,89,0.1)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr] sm:p-10"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.24em]">
          О работе
        </p>
        <h2 className="font-display mt-4 text-3xl leading-[0.95] text-[var(--foreground)] sm:text-3xl sm:leading-none">
          Можно продолжать справляться в одиночку. Или наконец разобраться и изменить это.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-lg">
          Ко мне приходят не просто поговорить. Приходят, когда повторяются одни и те же
          сценарии, когда в отношениях нет ясности, и когда становится понятно: дальше так
          не работает. Мы не уходим в общие рассуждения. Мы находим, что именно не так, и
          что с этим делать в реальной жизни. Результат моей работы — это изменения в ваших
          решениях, поведении и отношениях.
        </p>
      </div>

      <div className="grid gap-4">
        {principles.map((item) => (
          <article
            key={item}
            className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 sm:p-5"
          >
            <p className="text-base leading-7 text-[var(--foreground)]">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
