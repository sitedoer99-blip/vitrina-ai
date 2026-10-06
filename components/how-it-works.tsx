import { Reveal } from '@/components/reveal'

const steps = [
  {
    title: 'AI сканує',
    text: 'Нейромережа щодня аналізує тисячі акаунтів: охоплення, коментарі, динаміку зростання та ознаки накруток.',
  },
  {
    title: 'Відбирає найкращих',
    text: 'До вітрини потрапляють лише автори з живою аудиторією та стабільно високою залученістю.',
  },
  {
    title: "Ви на зв'язку",
    text: 'Дивіться блог і переходьте в Telegram автора в один клік — без посередників і очікування.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-title"
      className="scroll-mt-24 px-4 py-16 md:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <Reveal className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Процес
          </p>
          <h2
            id="how-title"
            className="text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Як це працює
          </h2>
        </Reveal>

        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal
                delay={index * 120}
                className="glass flex h-full flex-col gap-6 rounded-3xl p-6"
              >
                <span className="font-mono text-sm text-primary">
                  {`0${index + 1}`}
                  <span className="text-muted-foreground"> / 03</span>
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
