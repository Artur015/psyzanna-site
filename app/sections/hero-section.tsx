import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex flex-col gap-6">
      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="flex flex-col rounded-[2rem] border border-white/65 bg-white/80 p-5 shadow-[0_32px_90px_rgba(50,23,88,0.13)] backdrop-blur sm:p-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl leading-[0.94] text-[var(--foreground)] sm:text-[2.45rem] sm:leading-[0.92]">
              Вы можете продолжать жить как сейчас. Или наконец разобраться,
              что не так, и начать это менять.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
              <span className="font-semibold text-[var(--foreground)]">
                Верните ясность в отношения за 30 минут.
              </span>{" "}
              Запишитесь на первую бесплатную консультацию, чтобы найти
              истинную причину кризиса и составить план выхода.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
              Я работаю не ради разговоров. Я работаю на результат: ясность,
              решения и реальные изменения в отношениях и жизни.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <span className="inline-flex w-fit max-w-full items-center justify-center rounded-full bg-[var(--accent-deep)] px-3 py-2 text-center text-xs font-semibold text-white sm:px-4 sm:text-sm">
                Первая сессия 30 минут — бесплатно
              </span>
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex max-w-full items-center justify-center rounded-full bg-[var(--accent-soft)] px-3 py-2 text-center text-xs font-medium text-[var(--accent-deep)] sm:px-4 sm:text-sm">
                  Индивидуальная сессия
                </span>
                <span className="inline-flex max-w-full items-center justify-center rounded-full bg-[var(--accent-soft)] px-3 py-2 text-center text-xs font-medium text-[var(--accent-deep)] sm:px-4 sm:text-sm">
                  Парная сессия
                </span>
                <span className="inline-flex max-w-full items-center justify-center rounded-full bg-[var(--accent-soft)] px-3 py-2 text-center text-xs font-medium text-[var(--accent-deep)] sm:px-4 sm:text-sm">
                  Сексология
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-white px-5 py-4 text-sm font-semibold text-[var(--accent-deep)] transition hover:border-[var(--accent-deep)] hover:bg-[var(--accent-soft)] sm:w-auto sm:px-7 sm:text-base"
              >
                Выбрать направление
              </a>
            </div>

            <div className="grid gap-4">
              <article className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.2em]">
                  Формат
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
                  Структурированная работа, а не хаотичный разговор. Вы уходите
                  не просто с мыслями, а с конкретными инсайтами и шагами.
                </p>
              </article>
              <article className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.2em]">
                  Подход
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
                  Я не даю универсальных советов. Но я помогаю увидеть то, что
                  вы сами не замечаете, и изменить это. Иногда это быстро.
                  Иногда непросто. Но всегда про результат.
                </p>
              </article>
              <article className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.2em]">
                  Запись
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
                  Если вы готовы что-то менять, начнём. Если нет, возможно,
                  сейчас не ваш момент. Но когда будет, я здесь. Сделайте первый
                  шаг и запишитесь на пробную консультацию.
                </p>
              </article>
            </div>
          </div>
        </div>

        <article className="overflow-hidden rounded-[2rem] border border-white/65 bg-[linear-gradient(160deg,var(--accent-deep)_0%,var(--accent)_100%)] p-3 sm:p-4 shadow-[0_28px_80px_rgba(44,19,82,0.18)]">
          <div className="relative overflow-hidden rounded-[1.6rem]">
            <Image
              src="/IMG_4498.JPG"
              alt="Жанна Кононенко сидит в кресле"
              width={4000}
              height={6000}
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="h-[24rem] w-full object-cover sm:h-[30rem]"
            />
          </div>
          <div className="px-2 pb-2 pt-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent-soft-text)] sm:text-xs sm:tracking-[0.24em]">
              Жанна Кононенко
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/92">
              Я — дипломированный психолог-консультант и сексолог с системным
              мышлением и опытом за пределами классической психологии.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/92">
              Моё образование включает MBA в области психологии,
              профессиональную переподготовку в семейной психологии и
              сексологии, а также финансовое управление.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/92">
              10 лет я работала финансовым директором и принимала решения, от
              которых зависели деньги, люди и результат. Позже я создала и
              управляла собственной компанией.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/92">
              Этот опыт формирует мой подход: я не теряюсь в эмоциях и не
              работаю на уровне «поговорить». Я вижу структуры, причины и
              последствия и работаю там, где действительно происходят
              изменения.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/92">
              В моей практике — регулярная работа с клиентами и личная терапия.
              Я не новичок и не работаю по шаблону.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/92">
              Ко мне приходят, когда важно не просто разобраться в себе, а
              выйти на уровень, где меняются решения, поведение и отношения.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/92">
              Если вам нужен не процесс, а изменения — вам подойдёт мой подход.
            </p>
          </div>
        </article>
      </div>

      <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(245,236,252,0.88))] shadow-[0_24px_60px_rgba(58,31,96,0.12)] backdrop-blur">
        <div className="flex flex-col md:flex-row">
          <div className="relative min-h-[18rem] overflow-hidden md:min-h-[22rem] md:w-[16.5rem] md:flex-none lg:w-[17.5rem]">
            <Image
              src="/IMG_5242.JPG"
              alt="Кресло в кабинете психолога"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 18rem, 19rem"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 lg:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.22em]">
                Атмосфера встречи
              </p>
              <h3 className="font-display mt-4 text-3xl leading-[0.95] text-[var(--foreground)] sm:text-[2rem] sm:leading-none">
                Здесь безопасно, но честно.
              </h3>
              <p className="mt-4 text-base leading-8 text-[var(--foreground)] sm:text-lg">
                Комфорт не значит избегание. Я не буду вас оценивать, но и не
                буду поддерживать иллюзии, которые мешают вам жить лучше.
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--foreground)] sm:text-lg">
                Это пространство, где можно говорить прямо, разбираться глубоко
                и не теряться в бесконечных разговорах без результата.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex rounded-full bg-white/82 px-4 py-2 text-sm font-medium text-[var(--accent-deep)]">
                Без осуждения
              </span>
              <span className="inline-flex rounded-full bg-white/82 px-4 py-2 text-sm font-medium text-[var(--accent-deep)]">
                С ясными рамками
              </span>
              <span className="inline-flex rounded-full bg-white/82 px-4 py-2 text-sm font-medium text-[var(--accent-deep)]">
                С фокусом на результат
              </span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
