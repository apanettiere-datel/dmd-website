import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AnimatedSection, FadeIn } from '@/components/Motion'
import { QuoteBookingSection } from '@/components/QuoteBookingSection'

export const metadata = {
  title: 'Free Quote',
  description:
    "Request a free quote from Drew's Mobile Detailing and choose your preferred day.",
}

export default function QuotePage() {
  return (
    <>
      <Header />
      <main className="bg-white text-slate-800">
        <AnimatedSection className="bg-slate-50 py-20 sm:py-24">
          <Container>
            <FadeIn className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold tracking-[0.14em] text-sky-500 uppercase">
                Free Quote
              </p>
              <h1 className="mt-3 font-display text-5xl tracking-tight text-slate-900 sm:text-6xl">
                Request service in minutes
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Tell us what you need, choose your preferred day, and we will
                follow up quickly with scheduling and recommendations.
              </p>
            </FadeIn>

            <QuoteBookingSection />
          </Container>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
