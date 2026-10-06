'use client'

import { useState } from 'react'
import { bloggers, categories } from '@/lib/bloggers'
import { BloggerCard } from '@/components/blogger-card'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function BloggersSection() {
  const [active, setActive] = useState<(typeof categories)[number]>('Усі')
  const visible =
    active === 'Усі' ? bloggers : bloggers.filter((b) => b.category === active)

  return (
    <section
      id="bloggers"
      aria-labelledby="bloggers-title"
      className="scroll-mt-24 px-4 py-16 md:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Вітрина
            </p>
            <h2
              id="bloggers-title"
              className="text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl"
            >
              Відібрано нейромережею
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Кожен автор пройшов AI-перевірку на накрутки, якість контенту та
            лояльність аудиторії.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div
            role="group"
            aria-label="Фільтр за категоріями"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={cn(
                  'shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all',
                  active === category
                    ? 'bg-foreground text-background'
                    : 'glass text-muted-foreground hover:text-foreground',
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="grid items-start gap-5 sm:grid-cols-2">
          {visible.map((blogger, index) => (
            <li key={blogger.id}>
              <Reveal delay={(index % 2) * 120}>
                <BloggerCard blogger={blogger} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
