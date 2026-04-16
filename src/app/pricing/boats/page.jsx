import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AnimatedSection, FadeIn } from '@/components/Motion'
import { boatPackages } from '@/lib/pricingData'

export const metadata = {
  title: 'Boat Pricing',
  description:
    'Boat detailing pricing in Naples, FL including detailed wash, wash and wax, and polish packages.',
}

const boatComparison = [
  {
    name: 'Complete wash',
    values: {
      'Detailed Wash': true,
      'Wash and Wax': true,
      'Wash, Wax, and Polish': true,
    },
  },
  {
    name: 'Ceramic wax finish',
    values: {
      'Detailed Wash': false,
      'Wash and Wax': true,
      'Wash, Wax, and Polish': true,
    },
  },
  {
    name: 'Gelcoat polishing',
    values: {
      'Detailed Wash': false,
      'Wash and Wax': false,
      'Wash, Wax, and Polish': true,
    },
  },
  {
    name: 'Waterline up while in water',
    values: {
      'Detailed Wash': true,
      'Wash and Wax': true,
      'Wash, Wax, and Polish': true,
    },
  },
]

export default function BoatPricingPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-slate-800">
        <AnimatedSection className="relative overflow-hidden py-24 sm:py-32">
          <Image
            src="/site-media/boat-hero.png"
            alt="Boat detailing hero image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/55" />
          <Container className="relative z-10">
            <FadeIn>
              <p className="text-sm font-semibold tracking-[0.14em] text-sky-300 uppercase">
                Boat Pricing
              </p>
              <h1 className="mt-3 max-w-4xl font-display text-5xl tracking-tight text-white sm:text-6xl">
                Marine detailing packages built for salt, sun, and long-term shine
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
                Choose the package that matches your hull condition and protection
                goals. We service boats in and around Naples with mobile marine
                detailing and ceramic options.
              </p>
            </FadeIn>
          </Container>
        </AnimatedSection>

        <AnimatedSection className="py-20 sm:py-24">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              {boatPackages.map((service) => (
                <article
                  key={service.name}
                  className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
                >
                  <h2 className="text-2xl font-semibold text-slate-900">{service.name}</h2>
                  <p className="mt-3 text-3xl font-semibold text-sky-600">{service.pricing}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-600">
                    {service.features.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection className="bg-slate-50 py-20 sm:py-24">
          <Container>
            <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
              Side-by-side package comparison
            </h2>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[760px] border-separate border-spacing-y-3 text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-500">Feature</th>
                    {boatPackages.map((pack) => (
                      <th
                        key={pack.name}
                        className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900"
                      >
                        {pack.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {boatComparison.map((row) => (
                    <tr key={row.name}>
                      <th className="px-4 py-3 text-sm font-medium text-slate-700">{row.name}</th>
                      {boatPackages.map((pack) => {
                        const value = row.values[pack.name]
                        return (
                          <td
                            key={`${row.name}-${pack.name}`}
                            className="rounded-xl bg-white px-4 py-3 text-center"
                          >
                            {value ? (
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                                ✓
                              </span>
                            ) : (
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                                ×
                              </span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-slate-600">
                Need custom marine work? Rust removal, water spots, oxidation,
                aluminum restoration, and excessive scum removal can all be
                accommodated. Reach out for a custom quote.
              </p>
              <p className="mt-3 text-slate-600">
                We also detail RVs, jet skis, motorcycles, golf carts, bobcats,
                and other specialty equipment.
              </p>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/quote"
                className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600"
              >
                Request Boat Quote
              </Link>
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection className="py-20 sm:py-24">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-sm font-semibold tracking-[0.14em] text-sky-500 uppercase">
                  Marine Protection
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
                  System X Ceramic Coating
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Whether at sea or the dock, System X creates a super slick,
                  brilliant, glossy shell that helps protect your boat or yacht
                  from UV rays, salt spray, temperature extremes, and pollution.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/system-x"
                    className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600"
                  >
                    Learn About System X
                  </Link>
                  <Link
                    href="/quote"
                    className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
                  >
                    Request Ceramic Quote
                  </Link>
                </div>
              </div>
              <Image
                src="/site-media/systemx-marine-hero.png"
                alt="Boat detailing and ceramic protection result"
                width={1600}
                height={1200}
                className="aspect-[4/3] w-full rounded-3xl object-contain"
              />
            </div>
          </Container>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
