import Image from "next/image";

type PricingItem = {
  label: string;
  value: string;
};

type PricingSectionProps = {
  pricingItems: readonly PricingItem[];
};

export function PricingSection({ pricingItems }: PricingSectionProps) {
  const [
    introductorySession,
    individualSession,
    individualSessionPrice,
    couplesSession,
    couplesSessionPrice,
  ] = pricingItems;

  return (
    <section
      id="pricing"
      className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr] xl:items-start"
    >
      <article className="rounded-[2.2rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,238,253,0.92))] p-5 shadow-[0_24px_70px_rgba(50,22,88,0.1)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.22em]">
          Стоимость и формат
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-3xl leading-[0.95] text-[var(--foreground)] sm:text-4xl sm:leading-none">
          Вы оплачиваете не разговор. Вы оплачиваете работу, которая меняет ваше состояние,
          решения и отношения.
        </h2>

        <div className="mt-8 rounded-[2rem] bg-[linear-gradient(160deg,var(--accent-deep)_0%,var(--accent)_100%)] p-6 text-white shadow-[0_22px_54px_rgba(57,31,89,0.2)] sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/78">
              {introductorySession.label}
            </p>
            <span className="inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-medium text-white/88">
              Онлайн
            </span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="font-display text-4xl leading-none sm:text-5xl">30 минут - бесплатно</p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/82 sm:text-base">
                Короткая вводная встреча, чтобы понять ваш запрос, формат работы и подойдём ли
                мы друг другу.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.9rem] border border-[var(--border)] bg-white/88 p-5 shadow-[0_14px_40px_rgba(57,31,89,0.06)] sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
              {individualSession.label}
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              {individualSession.value}
            </p>
            <div className="mt-6 border-t border-[var(--border)] pt-5">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
                {individualSessionPrice.label}
              </p>
              <p className="font-display mt-3 text-4xl leading-none text-[var(--foreground)]">
                {individualSessionPrice.value}
              </p>
            </div>
          </div>

          <div className="rounded-[1.9rem] border border-[var(--border)] bg-white/88 p-5 shadow-[0_14px_40px_rgba(57,31,89,0.06)] sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
              {couplesSession.label}
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              {couplesSession.value}
            </p>
            <div className="mt-6 border-t border-[var(--border)] pt-5">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
                {couplesSessionPrice.label}
              </p>
              <p className="font-display mt-3 text-4xl leading-none text-[var(--foreground)]">
                {couplesSessionPrice.value}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[1.8rem] border border-[var(--border)] bg-white/88 p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              Формат
            </p>
            <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-medium text-[var(--accent-deep)]">
              Все сессии онлайн
            </span>
          </div>
          <p className="mt-4 text-base leading-7 text-[var(--foreground)] sm:text-lg">
            Сессии проходят онлайн — это даёт возможность работать из любой точки и встроить
            встречи в ваш реальный ритм жизни.
          </p>
        </div>
      </article>

      <article className="overflow-hidden rounded-[2.2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(250,246,255,0.95),rgba(239,229,250,0.9))] shadow-[0_24px_70px_rgba(50,22,88,0.08)]">
        <div className="relative h-72">
          <Image
            src="/photo_2026-05-05_19-38-09.jpg"
            alt="Рука делает заметки в блокноте"
            fill
            sizes="(max-width: 1279px) 100vw, 30vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(57,31,89,0.05)_0%,rgba(57,31,89,0.5)_100%)]" />
          <div className="absolute inset-x-6 bottom-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/78">
              Условия работы и отмены
            </p>
            <h3 className="font-display mt-3 max-w-xl text-3xl leading-[0.95] text-white sm:text-[2.35rem] sm:leading-none">
              Спокойный процесс держится на ясных правилах.
            </h3>
          </div>
        </div>

        <div className="p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.8rem] bg-[linear-gradient(160deg,var(--accent-deep)_0%,var(--accent)_100%)] p-5 text-white shadow-[0_16px_40px_rgba(57,31,89,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/78">
                Перенос или отмена
              </p>
              <p className="mt-3 text-lg font-semibold leading-8">
                Не позднее чем за 24 часа до встречи.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-[var(--border)] bg-white/88 p-5 shadow-[0_14px_40px_rgba(57,31,89,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Если отмена в день сессии
              </p>
              <p className="mt-3 text-lg font-semibold leading-8 text-[var(--foreground)]">
                Оплата сохраняется в полном объёме.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4">
            <div className="rounded-[1.8rem] border border-[var(--border)] bg-white/88 p-5 shadow-[0_14px_40px_rgba(57,31,89,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Регулярность
              </p>
              <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
                Регулярность — важная часть результата. Поэтому встречи выстраиваются заранее и
                фиксируются в расписании. Разовые встречи возможны, но не дают устойчивого
                результата.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-[var(--border)] bg-white/88 p-5 shadow-[0_14px_40px_rgba(57,31,89,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Настрой на работу
              </p>
              <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
                Я работаю с теми, кто настроен на реальные изменения.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-[var(--border)] bg-white/84 p-5">
              <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                Ясные условия нужны не для жёсткости, а для устойчивости процесса и уважения к
                вашему времени и к моей работе.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
