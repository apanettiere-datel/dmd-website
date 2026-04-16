import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AnimatedSection, FadeIn } from '@/components/Motion'

export const metadata = {
  title: 'Pricing',
  description:
    "Choose car pricing or boat pricing from Drew's Mobile Detailing in Naples, FL.",
}

export default function PricingIndexPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-slate-800">
        <AnimatedSection className="py-20 sm:py-24">
          <Container>
            <FadeIn>
              <h1 className="font-display text-5xl tracking-tight text-slate-900 sm:text-6xl">
                Pricing Pages
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Select the category below to view full package comparisons and
                detailed pricing.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <Link href="/pricing/cars" className="group overflow-hidden rounded-3xl">
                <Image
                  src="/site-media/cars-pricing-01.png"
                  alt="Car pricing and detailing preview"
                  width={1600}
                  height={1200}
                  className="h-72 w-full object-cover transition group-hover:scale-[1.01]"
                />
                <div className="bg-slate-50 p-6">
                  <h2 className="text-2xl font-semibold text-slate-900">Car Pricing</h2>
                  <p className="mt-2 text-slate-600">
                    Compare core packages, full service breakdowns, and add-on
                    options for cars, trucks, and SUVs.
                  </p>
                </div>
              </Link>

              <Link href="/pricing/boats" className="group overflow-hidden rounded-3xl">
                <Image
                  src="/site-media/boat-hero.png"
                  alt="Boat pricing and marine detailing preview"
                  width={1600}
                  height={1200}
                  className="h-72 w-full object-cover transition group-hover:scale-[1.01]"
                />
                <div className="bg-slate-50 p-6">
                  <h2 className="text-2xl font-semibold text-slate-900">Boat Pricing</h2>
                  <p className="mt-2 text-slate-600">
                    View per-foot pricing, marine package differences, and
                    specialty boat service notes.
                  </p>
                </div>
              </Link>
            </div>
          </Container>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
