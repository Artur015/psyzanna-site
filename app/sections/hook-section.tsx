import Image from "next/image";

type HookSectionProps = {
  signals: readonly string[];
};

export function HookSection({ signals }: HookSectionProps) {
  return (
    <section className="rounded-[2rem] border border-white/65 bg-white/82 p-5 shadow-[0_32px_90px_rgba(50,23,88,0.13)] backdrop-blur sm:p-10">
      <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
        <div className="self-start overflow-hidden rounded-[1.9rem] bg-[linear-gradient(160deg,var(--accent-deep)_0%,var(--accent)_100%)] text-white shadow-[0_24px_60px_rgba(58,31,96,0.2)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-14 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"
              />
              <p className="relative inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/88">
                Русскоязычный психолог и сексолог онлайн
              </p>
              <h1 className="font-display relative mt-6 max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-none">
                Психолог, с которым вы не застрянете в бесконечных разговорах
              </h1>
              <p className="relative mt-5 max-w-2xl text-lg leading-8 text-white/90">
                Помогаю разобраться в себе, выйти из тупика и начать
                действовать — в работе, отношениях и жизни
              </p>
              <p className="relative mt-7 max-w-2xl text-base leading-7 text-white/82">
                Когда вы уже многое понимаете головой, но жизнь от этого не
                меняется, нужен не просто разговор, а работа, которая помогает
                увидеть причины, принять решения и сдвинуться с места.
              </p>

              <div className="relative mt-8 flex flex-wrap gap-2.5">
                {["Ясность", "Решения", "Действие"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-medium text-white/92"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[18rem] overflow-hidden border-t border-white/12 lg:min-h-full lg:border-l lg:border-t-0">
              <Image
                src="/IMG_0023.WEBP"
                alt="Портрет Жанны Кононенко"
                fill
                sizes="(max-width: 1279px) 100vw, 32vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(57,31,89,0.06)_0%,rgba(57,31,89,0.32)_100%)]" />
              <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] border border-white/14 bg-black/16 px-4 py-3 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/88">
                  Работа на результат
                </p>
                <p className="mt-1 text-sm leading-6 text-white/82">
                  Без затягивания, без общего шума, с фокусом на реальные
                  изменения.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.9rem] border border-[var(--border)] bg-[var(--surface-soft)] p-5 sm:p-6">
          <h2 className="text-2xl font-semibold leading-tight text-[var(--foreground)] sm:text-3xl">
            Вы узнаете себя?
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-[var(--muted-foreground)]">
            Иногда вы уже не в одном конфликте, а в отношениях, которые
            постепенно выматывают, лишают ясности и заставляют снова проживать
            один и тот же болезненный круг.
          </p>

          <div className="mt-5 grid gap-3">
            {signals.map((item, index) => (
              <article
                key={item}
                className="rounded-[1.5rem] border border-[var(--border)] bg-white/80 px-4 py-4 sm:px-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-[var(--accent-soft)] px-2 text-xs font-semibold text-[var(--accent-deep)]">
                    {index + 1}
                  </span>
                  <p className="text-base leading-7 text-[var(--foreground)] sm:text-lg">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-4 sm:px-5">
            <p className="text-base font-semibold leading-7 text-[var(--foreground)] sm:text-lg">
              Если откликается — с этим можно работать
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)] sm:text-base">
              Не обязательно всё идеально понимать. Достаточно того, что
              вы уже чувствуете: дальше так уже нельзя.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
