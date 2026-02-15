'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const clients = [
  {
    name: 'Malaysian Association of the Blind',
    logo: '/images/clients/mab.jpeg',
    alt: 'MAB Logo',
  },
  {
    name: 'National Kidney Foundation Malaysia',
    logo: '/images/clients/nkf.jpg',
    alt: 'NKF Logo',
  },
  {
    name: 'WWF Malaysia',
    logo: '/images/clients/wwf.svg',
    alt: 'WWF Logo',
  },
  {
    name: 'MAKNA',
    logo: '/images/clients/makna.svg',
    alt: 'MAKNA Logo',
  },
  {
    name: 'Emitsolar',
    logo: '/images/clients/emitsolar.png',
    alt: 'Emitsolar Logo',
  },
]

export const Clients: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-16 sm:py-20 bg-bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm font-medium mb-4">
            Trusted Partners
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy font-heading">
            Organizations That Trust Us
          </h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            We&apos;re proud to partner with leading NGOs and organizations making a difference in Malaysia.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="relative h-16 w-full max-w-[160px] grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.alt}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

Clients.displayName = 'Clients'
