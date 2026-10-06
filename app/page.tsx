import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { BloggersSection } from '@/components/bloggers-section'
import { HowItWorks } from '@/components/how-it-works'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <BloggersSection />
        <HowItWorks />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
