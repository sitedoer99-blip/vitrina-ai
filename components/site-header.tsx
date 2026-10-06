import { Send } from 'lucide-react'

const navLinks = [
  { href: '#bloggers', label: 'Блогери' },
  { href: '#how', label: 'Як це працює' },
  { href: '#join', label: 'Співпраця' },
]

export function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight"
      aria-label="VITRINA.AI — на головну"
    >
      <span
        aria-hidden="true"
        className="flex size-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground"
      >
        V
      </span>
      <span>
        VITRINA<span className="text-primary">.AI</span>
      </span>
    </a>
  )
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3">
        <Logo />
        <nav aria-label="Основна навігація" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95"
        >
          <Send className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Telegram</span>
          <span className="sr-only sm:hidden">Перейти в Telegram</span>
        </a>
      </div>
    </header>
  )
}
