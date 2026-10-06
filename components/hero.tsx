import Image from 'next/image'
import { ArrowDown, Send, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(250_250_250/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(250_250_250/0.04)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
        <div className="flex flex-col items-start gap-6">
          <p className="glass flex animate-fade-up items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            AI-підбір авторів під вашу аудиторію
          </p>

          <h1
            className="animate-fade-up text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '100ms' }}
          >
            Блогери, яких <span className="text-primary">обрав</span>{' '}
            штучний інтелект
          </h1>

          <p
            className="max-w-md animate-fade-up text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: '200ms' }}
          >
            Нейромережа аналізує охоплення, залученість і якість аудиторії, щоб
            у вітрині залишалися лише найсильніші автори.
          </p>

          <div
            className="flex w-full animate-fade-up flex-col gap-3 sm:w-auto sm:flex-row"
            style={{ animationDelay: '300ms' }}
          >
            <a
              href="#bloggers"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_32px_-8px_var(--primary)] transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Дивитися блогерів
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all hover:bg-foreground/10 active:scale-[0.98]"
            >
              <Send className="size-4" aria-hidden="true" />
              Перейти в Telegram
            </a>
          </div>

          <dl
            className="mt-4 grid w-full max-w-md animate-fade-up grid-cols-3 gap-4 border-t border-border pt-6"
            style={{ animationDelay: '400ms' }}
          >
            {[
              { value: '120+', label: 'авторів' },
              { value: '38M', label: 'сумарне охоплення' },
              { value: '9.6%', label: 'сер. залученість' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-xl font-semibold md:text-2xl">
                  {stat.value}
                </dd>
                <dd className="text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-sm animate-fade-up md:max-w-md"
      style={{ animationDelay: '250ms' }}
    >
      <div className="absolute -left-4 top-10 hidden h-[70%] w-[55%] -rotate-6 overflow-hidden rounded-3xl border border-border opacity-50 sm:block">
        <Image
          src="/bloggers/eva.png"
          alt=""
          fill
          sizes="200px"
          className="origin-[50%_30%] scale-125 object-cover"
        />
      </div>
      <div className="absolute -right-4 top-16 hidden h-[70%] w-[55%] rotate-6 overflow-hidden rounded-3xl border border-border opacity-50 sm:block">
        <Image
          src="/bloggers/denis.png"
          alt=""
          fill
          sizes="200px"
          className="origin-[50%_30%] scale-125 object-cover"
        />
      </div>

      <div className="relative mx-auto aspect-[3/4] w-[85%] overflow-hidden rounded-3xl border border-foreground/15 shadow-2xl shadow-primary/20">
        <Image
          src="/bloggers/mark.png"
          alt="Марк Левін — AI і технології"
          fill
          priority
          sizes="(min-width: 768px) 380px, 85vw"
          className="origin-[50%_30%] scale-125 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 h-px animate-scan bg-primary shadow-[0_0_24px_4px_var(--primary)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"
        />

        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-background/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          AI-аналіз
        </div>

        <div className="glass-strong absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl p-3">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Марк Левін</span>
            <span className="text-xs text-muted-foreground">
              AI і технології
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-display text-lg font-semibold text-primary">
              96%
            </span>
            <span className="text-[11px] text-muted-foreground">
              збіг
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
