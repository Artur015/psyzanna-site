import Image from "next/image";

export function HeroSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="rounded-[2rem] border border-white/65 bg-white/80 p-5 shadow-[0_32px_90px_rgba(50,23,88,0.13)] backdrop-blur sm:p-10">
        <span className="inline-block max-w-full break-words rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-2 text-[11px] font-semibold uppercase leading-5 tracking-[0.12em] text-[var(--accent-deep)] sm:rounded-full sm:px-4 sm:text-xs sm:tracking-[0.24em]">
          Семейный психолог-консультант и сексолог-консультант
        </span>
        <h1 className="font-display mt-6 max-w-3xl text-3xl leading-[0.94] text-[var(--foreground)] sm:text-3xl sm:leading-none lg:text-3xl">
          Вы можете продолжать жить как сейчас. Или наконец разобраться, что не так, и
          начать это менять.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
          Я работаю не ради разговоров. Я работаю на результат: ясность, решения и реальные
          изменения в отношениях и жизни. Для записи на приём достаточно заполнить анкету
          ниже.
        </p>

        <div className="mt-8 flex flex-wrap gap-2.5">
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

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#questionnaire"
            className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-4 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(104,75,123,0.28)] transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto sm:px-7 sm:text-base"
          >
            Заполнить анкету
          </a>
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-white px-5 py-4 text-sm font-semibold text-[var(--accent-deep)] transition hover:border-[var(--accent-deep)] hover:bg-[var(--accent-soft)] sm:w-auto sm:px-7 sm:text-base"
          >
            Посмотреть направления
          </a>
        </div>

        <div className="mt-10 grid gap-4">
          <article className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.2em]">
              Формат
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
              Структурированная работа, а не хаотичный разговор. Вы уходите не просто с
              мыслями, а с конкретными инсайтами и шагами.
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.2em]">
              Подход
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
              Я не даю универсальных советов. Но я помогаю увидеть то, что вы сами не
              замечаете, и изменить это. Иногда это быстро. Иногда непросто. Но всегда про
              результат.
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.2em]">
              Запись
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
              Если вы готовы что-то менять, начнём. Если нет, возможно, сейчас не ваш
              момент. Но когда будет, я здесь. Заполните анкету, и я предложу формат
              работы, подходящий именно вам.
            </p>
          </article>
        </div>
      </div>

      <div className="grid gap-6">
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
              Я — дипломированный психолог-консультант и сексолог с системным мышлением и
              опытом за пределами классической психологии.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/92">
              Моё образование включает MBA в области психологии, профессиональную
              переподготовку в семейной психологии и сексологии, а также финансовое
              управление.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/92">
              10 лет я работала финансовым директором и принимала решения, от которых
              зависели деньги, люди и результат. Позже я создала и управляла собственной
              компанией.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/92">
              Этот опыт формирует мой подход: я не теряюсь в эмоциях и не работаю на уровне
              «поговорить». Я вижу структуры, причины и последствия и работаю там, где
              действительно происходят изменения.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/92">
              В моей практике — регулярная работа с клиентами и личная терапия. Я не новичок
              и не работаю по шаблону.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/92">
              Ко мне приходят, когда важно не просто разобраться в себе, а выйти на уровень,
              где меняются решения, поведение и отношения.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/92">
              Если вам нужен не процесс, а изменения — вам подойдёт мой подход.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white/75 p-3 sm:p-4 shadow-[0_24px_60px_rgba(58,31,96,0.12)] backdrop-blur">
          <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <Image
                src="/IMG_5242.JPG"
                alt="Кресло в кабинете психолога"
                width={4000}
                height={6000}
                sizes="(max-width: 1024px) 100vw, 18vw"
                className="h-64 w-full object-cover object-center"
              />
            </div>
            <div className="p-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.22em]">
                Атмосфера встречи
              </p>
              <p className="mt-3 text-lg leading-8 text-[var(--foreground)]">
                Комфорт не значит избегание. Здесь безопасно, но честно. Я не буду вас
                оценивать, но и не буду поддерживать иллюзии, которые мешают вам жить лучше.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
