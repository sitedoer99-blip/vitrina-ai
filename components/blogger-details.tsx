'use client'

import { useId, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import type { Blogger } from '@/lib/bloggers'
import { cn } from '@/lib/utils'

export function BloggerDetails({ blogger }: { blogger: Blogger }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="border-t border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-medium transition-colors hover:text-primary"
      >
        <span>{open ? 'Згорнути опис' : 'Детальніше про блогера'}</span>
        <span
          className={cn(
            'glass flex size-7 items-center justify-center rounded-full transition-transform duration-300',
            open && 'rotate-180 bg-primary/20',
          )}
          aria-hidden="true"
        >
          <ChevronDown className="size-4" />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-label={`Опис блогера ${blogger.name}`}
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-500 ease-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
        inert={!open}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-5 px-4 pb-5">
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              {blogger.about}
            </p>

            <DetailBlock title="Теми">
              <ul className="flex flex-wrap gap-1.5">
                {blogger.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock title="Аудиторія">
              <dl className="grid grid-cols-3 gap-2">
                <Stat label="Вік" value={blogger.audience.age} />
                <Stat label="Стать" value={blogger.audience.gender} />
                <Stat label="Гео" value={blogger.audience.geo} />
              </dl>
            </DetailBlock>

            <DetailBlock title="Формати співпраці">
              <ul className="flex flex-wrap gap-1.5">
                {blogger.formats.map((format) => (
                  <li
                    key={format}
                    className="glass rounded-full px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {format}
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock title="Досягнення">
              <ul className="flex flex-col gap-2">
                {blogger.highlights.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-snug">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <dl className="grid grid-cols-2 gap-2">
              <Stat label="Активність" value={blogger.frequency} />
              <Stat label="Інтеграція" value={blogger.priceFrom} accent />
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

function DetailBlock({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
        {title}
      </h4>
      {children}
    </div>
  )
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent?: boolean
}) {
  return (
    <div className="glass flex flex-col gap-0.5 rounded-xl p-2.5">
      <dt className="text-[11px] text-muted-foreground">{label}</dt>
      <dd
        className={cn(
          'text-xs font-semibold leading-snug',
          accent && 'text-primary',
        )}
      >
        {value}
      </dd>
    </div>
  )
}
