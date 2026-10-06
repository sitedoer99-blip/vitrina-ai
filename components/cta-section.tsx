import Image from 'next/image'
import { Send } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { bloggers } from '@/lib/bloggers'

export function CtaSection() {
  return (
    <section
      id="join"
      aria-labelledby="join-title"
      className="scroll-mt-24 px-4 py-16 md:py-24"
    >
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-primary/30 bg-card px-6 py-12 md:px-12 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"
        />
        <div className="relative flex flex-col items-center gap-6 text-center">
          <div className="flex" aria-hidden="true">
            {bloggers.slice(0, 5).map((b) => (
              <div
                key={b.id}
                className="relative -ml-3 size-11 overflow-hidden rounded-full border-2 border-card first:ml-0"
              >
                <Image
                  src={b.image}
                  alt=""
                  fill
                  sizes="44px"
                  className="origin-[50%_25%] scale-150 object-cover"
                />
              </div>
            ))}
          </div>
          <h2
            id="join-title"
            className="max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight md:text-5xl"
          >
            Нові автори — щотижня в нашому{' '}
            <span className="text-primary">Telegram</span>
          </h2>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Підписуйтеся, щоб першими отримувати добірки блогерів, відібраних
            AI, та спеціальні умови для рекламодавців.
          </p>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_8px_40px_-8px_var(--primary)] transition-all hover:brightness-110 active:scale-[0.98] sm:w-auto"
          >
            <Send className="size-4" aria-hidden="true" />
            Перейти в Telegram
          </a>
        </div>
      </Reveal>
    </section>
  )
}
