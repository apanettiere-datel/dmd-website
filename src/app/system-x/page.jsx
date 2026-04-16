import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AnimatedSection, FadeIn } from '@/components/Motion'

export const metadata = {
  title: 'System X Ceramic Coating',
  description:
    'Learn about System X ceramic coating benefits for cars and boats in Naples, FL.',
}

const reasons = [
  {
    title: 'Long-term paint protection',
    body: 'System X creates a durable molecular bond with painted surfaces that helps protect against UV exposure, contaminants, and weather.',
  },
  {
    title: 'Rich gloss and easier maintenance',
    body: 'The finish stays slick and glossy, making routine maintenance washes easier while keeping the color depth sharp.',
  },
  {
    title: 'Coverage beyond paint',
    body: 'System X can be applied to paint, metal, stainless, trim, wheels, and additional exterior surfaces for broad protection.',
  },
]

export default function SystemXPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-slate-800">
        <AnimatedSection className="bg-slate-50 py-20 sm:py-24">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <FadeIn>
                  <p className="text-sm font-semibold tracking-[0.14em] text-sky-500 uppercase">
                    System X Ceramic Coating
                  </p>
                  <h1 className="mt-3 font-display text-5xl tracking-tight text-slate-900 sm:text-6xl">
                    Advanced protection for cars and boats
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                    Upgrade your vehicle&apos;s protection and shine with advanced
                    System X Ceramic Coatings. These semi-permanent coatings form
                    an inseparable molecular bond with your vehicle&apos;s paintwork,
                    providing protection that does not wash off like traditional
                    waxes or sealants.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/quote"
                      className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600"
                    >
                      Request System X Quote
                    </Link>
                  </div>
                </FadeIn>
              </div>

              <div className="justify-self-center">
                <Image
                  src="/site-media/systemx-ceramic-02.png"
                  alt="System X ceramic coating kit"
                  width={1600}
                  height={1200}
                  className="aspect-[4/3] w-full max-w-lg rounded-3xl object-contain"
                />
              </div>
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection className="relative isolate overflow-hidden bg-white py-20 sm:py-24">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              aria-hidden="true"
              className="absolute top-0 left-[max(50%,25rem)] h-96 w-[32rem] -translate-x-1/2 stroke-slate-200 [mask-image:radial-gradient(24rem_24rem_at_top,white,transparent)]"
            >
              <defs>
                <pattern
                  x="50%"
                  y={-1}
                  id="systemx-grid"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect fill="url(#systemx-grid)" width="100%" height="100%" strokeWidth={0} />
            </svg>
          </div>

          <Container>
            <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-semibold tracking-[0.14em] text-sky-500 uppercase">
                  Why choose this coating
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
                  Introducing System X Ceramic Coating
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  System X Ceramic Coatings provide exceptional durability and
                  color-enhancing gloss for all exterior surfaces, including
                  paint, metal, exhaust, stainless steel, and wheels. The unique
                  properties of System X make it a top choice for long-lasting
                  protection and a clean, high-end finish.
                </p>

                <div className="mt-10">
                  <Image
                    src="/site-media/systemx-ceramic-01.png"
                    alt="System X ceramic bottle"
                    width={1600}
                    height={1200}
                    className="mx-auto aspect-[4/3] w-full max-w-md rounded-3xl object-contain"
                  />
                </div>

                <ul className="mt-10 space-y-6 text-left sm:text-center">
                  {reasons.map((reason) => (
                    <li key={reason.title} className="flex items-start gap-3 sm:items-center sm:justify-center">
                      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-sky-100 text-sky-600 sm:mt-0">
                        ✓
                      </span>
                      <span>
                        <strong className="font-semibold text-slate-900">{reason.title}.</strong>{' '}
                        <span className="text-slate-600">{reason.body}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <aside className="mt-8 rounded-3xl border border-sky-200 bg-sky-50 p-6 text-center">
                  <h3 className="text-xl font-semibold text-slate-900">Polish add-on</h3>
                  <p className="mt-3 text-slate-700">
                    If your paint is looking dull, a polish service restores
                    gloss and helps reduce spiderweb scratches. One-step polish
                    fits lighter defects. Two-step polish is better for light to
                    medium scratches and oxidation.
                  </p>
                  <p className="mt-3 text-slate-700">
                    We finish with protective wax after polishing.
                    Pricing varies by size and condition. Contact us for pricing.
                    Evaluation and recommendation on arrival.
                  </p>
                </aside>
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection className="py-20 sm:py-24">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
                  Marine ceramic protection
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Whether at sea or at the dock, System X helps create a slick,
                  glossy shell that supports easier cleanup and improved
                  resistance to UV rays, salt spray, temperature swings, and
                  pollution.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/pricing/boats"
                    className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600"
                  >
                    View Boat Pricing
                  </Link>
                  <Link
                    href="/pricing/cars"
                    className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
                  >
                    View Car Pricing
                  </Link>
                </div>
              </div>
              <Image
                src="/site-media/systemx-marine-hero.png"
                alt="Boat protected with System X ceramic coating"
                width={1600}
                height={1200}
                className="aspect-[4/3] w-full rounded-3xl object-contain"
              />
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection className="bg-slate-50 py-20 sm:py-24">
          <Container>
            <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
              System X brochure and video
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Review System X product information and watch the overview video.
            </p>

            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl bg-black shadow-sm ring-1 ring-slate-300">
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  title="System X Youtube Video"
                  src="https://www.youtube.com/embed/AWEx_ChGtV4"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
              <iframe
                title="System X brochure"
                src="/site-media/system-x-marine.pdf#toolbar=0"
                className="h-[72vh] w-full border-0"
              />
            </div>
          </Container>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
