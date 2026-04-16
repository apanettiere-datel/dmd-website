'use client'

import { motion, useReducedMotion } from 'framer-motion'

const easeOutExpo = [0.22, 1, 0.36, 1]

export function AnimatedSection({
  children,
  className,
  delay = 0,
  viewportAmount = 0.16,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <section className={className} {...props}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: 0.55, delay, ease: easeOutExpo }}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 18,
  viewportAmount = 0.2,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: 0.5, delay, ease: easeOutExpo }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
