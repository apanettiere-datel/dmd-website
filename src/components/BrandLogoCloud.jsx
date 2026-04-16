'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 18, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export function BrandLogoCloud({ logos }) {
  const prefersReducedMotion = useReducedMotion()

  const logoCards = logos.map((logo, index) => (
    <motion.div
      key={`${logo.src}-${index}`}
      variants={itemVariants}
      className="w-24 sm:w-28 lg:w-32"
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={316}
        height={96}
        className="w-full object-contain"
      />
    </motion.div>
  ))

  if (prefersReducedMotion) {
    return (
      <div className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
        {logoCards}
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-6"
    >
      {logoCards}
    </motion.div>
  )
}
