import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AnimatedSection, FadeIn } from '@/components/Motion'
import {
  carAddOnServices,
  carComparisonSections,
  carCorePackages,
  carDetailPackages,
} from '@/lib/pricingData'

export const metadata = {
  title: 'Car Pricing',
  description:
    'Compare Drew\'s Mobile Detailing car packages, features, and add-ons in Naples, FL.',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CarPricingPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-slate-800">
        <AnimatedSection className="relative overflow-hidden py-24 sm:py-32">
          <Image
            src="/site-media/hero-background.png"
            alt="Car pricing hero background placeholder"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/55" />
          <Container className="relative z-10">
            <FadeIn>
              <p className="text-sm font-semibold tracking-[0.14em] text-sky-300 uppercase">
                Car Pricing
              </p>
              <h1 className="mt-3 max-w-4xl font-display text-5xl tracking-tight text-white sm:text-6xl">
                Compare packages and book the right detail
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
                This page includes full package comparisons, complete service lists,
                and add-ons for cars, trucks, and SUVs.
              </p>
            </FadeIn>
          </Container>
        </AnimatedSection>

        <AnimatedSection className="py-20 sm:py-24">
          <Container>
            <div>
              <h2 className="text-base/7 font-semibold text-sky-500">Comparison</h2>
              <p className="mt-2 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
                Package comparison for daily drivers and full restoration
              </p>

              <div className="mx-auto mt-12 max-w-md space-y-8 lg:hidden">
                {carCorePackages.map((tier) => (
                  <section
                    key={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? 'rounded-3xl border border-sky-200 bg-sky-50'
                        : 'rounded-3xl border border-slate-200 bg-white',
                      'p-6',
                    )}
                  >
                    <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                    <p className="mt-2 text-4xl font-semibold text-sky-600">{tier.price}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{tier.description}</p>
                    <Link
                      href="/quote"
                      className={classNames(
                        tier.mostPopular
                          ? 'bg-sky-500 text-white hover:bg-sky-600'
                          : 'border border-sky-300 text-sky-700 hover:border-sky-400',
                        'mt-6 block rounded-xl px-3 py-2 text-center text-sm font-semibold transition',
                      )}
                    >
                      Request Quote
                    </Link>
                    <ul role="list" className="mt-8 space-y-6 text-sm text-slate-700">
                      {carComparisonSections.map((section) => (
                        <li key={section.name}>
                          <p className="font-semibold text-sky-600">{section.name}</p>
                          <ul role="list" className="mt-3 space-y-3">
                            {section.features.map((feature) => {
                              const value = feature.tiers[tier.name]
                              if (!value) {
                                return null
                              }
                              return (
                                <li key={feature.name} className="flex gap-x-3">
                                  <CheckIcon
                                    aria-hidden="true"
                                    className="mt-0.5 h-5 w-5 flex-none text-sky-500"
                                  />
                                  <span>
                                    {feature.name}
                                    {typeof value === 'string' ? (
                                      <span className="text-slate-500"> ({value})</span>
                                    ) : null}
                                  </span>
                                </li>
                              )
                            })}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <div className="isolate mt-16 hidden lg:block">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[920px] table-fixed border-separate border-spacing-x-8 text-left">
                    <caption className="sr-only">Car package comparison table</caption>
                    <colgroup>
                      <col className="w-1/4" />
                      <col className="w-1/4" />
                      <col className="w-1/4" />
                      <col className="w-1/4" />
                    </colgroup>
                    <thead>
                      <tr>
                        <td />
                        {carCorePackages.map((tier) => (
                          <th
                            key={tier.id}
                            scope="col"
                            className="px-5 pt-6 text-slate-900"
                          >
                            <div className="text-base font-semibold">{tier.name}</div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <span className="sr-only">Price</span>
                        </th>
                        {carCorePackages.map((tier) => (
                          <td key={tier.id} className="px-5 pt-2">
                            <div className="text-4xl font-semibold text-sky-600">{tier.price}</div>
                            <Link
                              href="/quote"
                              className={classNames(
                                tier.mostPopular
                                  ? 'bg-sky-500 text-white hover:bg-sky-600'
                                  : 'border border-sky-300 text-sky-700 hover:border-sky-400',
                                'mt-5 block rounded-xl px-3 py-2 text-center text-sm font-semibold transition',
                              )}
                            >
                              Request Quote
                            </Link>
                          </td>
                        ))}
                      </tr>

                      {carComparisonSections.map((section, sectionIndex) => (
                        <Fragment key={section.name}>
                          <tr>
                            <th
                              scope="colgroup"
                              colSpan={4}
                              className={classNames(
                                sectionIndex === 0 ? 'pt-8' : 'pt-14',
                                'pb-4 text-sm font-semibold tracking-[0.13em] text-sky-500 uppercase',
                              )}
                            >
                              {section.name}
                              <div className="mt-4 h-px bg-slate-200" />
                            </th>
                          </tr>
                          {section.features.map((feature) => (
                            <tr key={feature.name}>
                              <th scope="row" className="py-4 text-sm font-normal text-slate-700">
                                {feature.name}
                                <div className="mt-4 h-px bg-slate-100" />
                              </th>
                              {carCorePackages.map((tier) => {
                                const value = feature.tiers[tier.name]
                                return (
                                  <td key={tier.id} className="px-5 py-4">
                                    {typeof value === 'string' ? (
                                      <div className="text-center text-sm text-slate-500">{value}</div>
                                    ) : value === true ? (
                                      <CheckIcon className="mx-auto h-5 w-5 text-sky-500" />
                                    ) : (
                                      <MinusIcon className="mx-auto h-5 w-5 text-slate-300" />
                                    )}
                                  </td>
                                )
                              })}
                            </tr>
                          ))}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection viewportAmount={0.02} className="bg-slate-50 py-20 sm:py-24">
          <Container>
            <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
              Full Package Details
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {carDetailPackages.map((service) => (
                <article
                  key={service.name}
                  className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-2xl font-semibold text-slate-900">{service.name}</h3>
                  <p className="mt-4 text-sm font-semibold tracking-[0.14em] text-sky-500 uppercase">
                    Pricing
                  </p>
                  <ul className="mt-3 space-y-1 text-slate-700">
                    {service.pricing.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  {service.additionalPricing ? (
                    <ul className="mt-4 space-y-1 text-slate-600">
                      {service.additionalPricing.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : null}
                  {service.features ? (
                    <ul className="mt-5 space-y-2 text-slate-600">
                      {service.features.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {service.description ? (
                    <p className="mt-5 text-slate-600">{service.description}</p>
                  ) : null}
                  {service.note ? <p className="mt-4 text-slate-600">{service.note}</p> : null}
                </article>
              ))}
            </div>

            <h2 className="mt-16 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
              Add-On Services
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {carAddOnServices.map((service) => (
                <article
                  key={service.name}
                  className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-2xl font-semibold text-slate-900">{service.name}</h3>
                  <p className="mt-4 text-sm font-semibold tracking-[0.14em] text-sky-500 uppercase">
                    Pricing
                  </p>
                  <ul className="mt-3 space-y-1 text-slate-700">
                    {service.pricing.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <p className="mt-5 text-slate-600">{service.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="border-b border-slate-200 px-6 py-4">
                <h3 className="text-xl font-semibold text-slate-900">Car Care PDF Guide</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Review ceramic and detailing information for car protection.
                </p>
              </div>
              <iframe
                title="Car detailing PDF guide"
                src="/site-media/auto.pdf#toolbar=0"
                className="h-[72vh] w-full border-0"
              />
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/quote"
                className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600"
              >
                Book a Car Detail
              </Link>
            </div>
          </Container>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.667 7.734a1 1 0 0 1-1.418 0L3.29 10.066a1 1 0 1 1 1.42-1.407l3.624 3.659 6.959-7.022a1 1 0 0 1 1.41-.006Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function MinusIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M4 10a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
    </svg>
  )
}
