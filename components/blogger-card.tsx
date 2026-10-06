import Image from 'next/image'
import { ArrowUpRight, Send } from 'lucide-react'
import type { Blogger } from '@/lib/bloggers'

export function BloggerCard({ blogger }: { blogger: Blogger }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_24px_64px_-24px_var(--primary)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={blogger.image}
          alt={`${blogger.name} — ${blogger.niche}`}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="origin-[50%_30%] scale-125 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.32]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-card via-card/10 to-transparent"
        />

        <div className="absolute inset-x-3 top-3 flex items-center justify-between">
          <span className="glass-strong rounded-full px-3 py-1 text-xs font-medium">
            {blogger.niche}
          </span>
          <span className="glass-strong flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-xs">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span className="sr-only">Збіг за AI-аналізом:</span>
            {blogger.match}%
          </span>
        </div>

        <div className="glass-strong absolute inset-x-3 bottom-3 flex flex-col gap-3 rounded-2xl p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 flex-col">
              <h3 className="truncate font-display text-base font-semibold">
                {blogger.name}
              </h3>
              <p className="text-xs text-muted-foreground">{blogger.handle}</p>
            </div>
            <dl className="flex shrink-0 gap-4 text-right">
              <div className="flex flex-col">
                <dt className="text-[11px] text-muted-foreground">Охоплення</dt>
                <dd className="text-sm font-semibold">{blogger.followers}</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-[11px] text-muted-foreground">ER</dt>
                <dd className="text-sm font-semibold">{blogger.engagement}</dd>
              </div>
            </dl>
          </div>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            {blogger.bio}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={blogger.blogUrl}
          className="flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-primary px-2 py-3 text-[13px] font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]"
          aria-label={`Дивитися блог: ${blogger.name}`}
        >
          Дивитися блог
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <a
          href={blogger.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="glass flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl px-2 py-3 text-[13px] font-semibold transition-all hover:bg-foreground/10 active:scale-[0.97]"
          aria-label={`Перейти в Telegram: ${blogger.name}`}
        >
          <Send className="size-4" aria-hidden="true" />
          <span>
            <span className="sm:hidden lg:inline">Перейти в </span>Telegram
          </span>
        </a>
      </div>
    </article>
  )
}
