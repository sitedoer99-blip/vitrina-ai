import { Logo } from '@/components/site-header'

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-sm text-muted-foreground md:flex-row md:items-center">
        <Logo />
        <p>{'© 2026 VITRINA.AI — AI-вітрина блогерів'}</p>
      </div>
    </footer>
  )
}
