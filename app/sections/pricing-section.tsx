type PricingItem = {
  label: string;
  value: string;
};

type PricingSectionProps = {
  pricingItems: readonly PricingItem[];
};

export function PricingSection({ pricingItems }: PricingSectionProps) {
  return (
    <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <article className="rounded-[2rem] border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(243,232,255,0.9))] p-5 shadow-[0_22px_60px_rgba(50,22,88,0.1)] sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.22em]">
          Стоимость и формат
        </p>
        <h2 className="font-display mt-4 text-3xl leading-[0.95] text-[var(--foreground)] sm:text-3xl sm:leading-none">
          Вы оплачиваете не разговор. Вы оплачиваете работу, которая меняет ваше состояние,
          решения и отношения.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {pricingItems.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.6rem] border border-[var(--border)] bg-white/80 p-4 sm:p-5"
            >
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
                {item.label}
              </p>
              <p className="mt-3 text-2xl text-[var(--foreground)]">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-[1.5rem] border border-[var(--border)] bg-white/80 p-4 text-base font-semibold leading-7 text-[var(--foreground)] sm:p-5">
          Сессии проходят онлайн — это даёт возможность работать из любой точки и встроить
          встречи в ваш реальный ритм жизни.
        </div>
      </article>

      <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface-soft)] p-5 shadow-[0_22px_60px_rgba(50,22,88,0.08)] sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.22em]">
          Условия работы и отмены
        </p>
        <div className="mt-6 grid gap-4">
          <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/80 p-4 sm:p-5">
            <p className="text-base leading-7 text-[var(--foreground)]">
              Отмена или перенос возможны не позднее чем за 24 часа до встречи.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/80 p-4 sm:p-5">
            <p className="text-base leading-7 text-[var(--foreground)]">
              При отмене в день сессии оплата сохраняется в полном объёме.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/80 p-4 sm:p-5">
            <p className="text-base leading-7 text-[var(--foreground)]">
              Регулярность — важная часть результата. Поэтому встречи выстраиваются заранее и
              фиксируются в расписании. Разовые встречи возможны, но не дают устойчивого
              результата.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/80 p-4 sm:p-5">
            <p className="text-base leading-7 text-[var(--foreground)]">
              Я работаю с теми, кто настроен на реальные изменения.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
