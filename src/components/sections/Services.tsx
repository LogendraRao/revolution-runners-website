'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  UserGroupIcon,
  HeartIcon,
  CreditCardIcon,
  MegaphoneIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const services = [
  {
    icon: UserGroupIcon,
    title: 'Face-to-Face Marketing',
    description: 'We position trained brand ambassadors at high-traffic locations to engage your target audience directly. Real conversations. Real conversions.',
    href: '/services#face-to-face',
  },
  {
    icon: HeartIcon,
    title: 'Fundraising Campaigns',
    description: 'We help NGOs and charities build sustainable donor bases through meaningful, ethical engagement. Our specialists share your mission and create lasting supporters.',
    href: '/services#fundraising',
  },
  {
    icon: CreditCardIcon,
    title: 'Financial Product Acquisition',
    description: 'We partner with banks and financial institutions to acquire customers on the ground. Professional execution, full compliance, applications processed on the spot.',
    href: '/services#financial',
  },
  {
    icon: MegaphoneIcon,
    title: 'Brand Activations',
    description: 'From product launches to promotional roadshows, we create memorable brand experiences that drive awareness and action.',
    href: '/services#activations',
  },
  {
    icon: UsersIcon,
    title: 'Team Building',
    description: 'Beyond campaigns, we develop high-performing teams. Our team building programs create unity, motivation, and the skills to succeed.',
    href: '/services#team-building',
  },
]

export const Services: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 sm:py-28 bg-white" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent-orange/10 text-accent-orange text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy font-heading">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Comprehensive field marketing solutions designed to deliver real results for your business or cause.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white border border-border-light rounded-2xl p-8 hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-navy/5 text-brand-navy group-hover:bg-accent-orange group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-brand-navy font-heading">
                {service.title}
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center text-accent-orange font-medium group-hover:gap-3 transition-all duration-300"
              >
                Learn more
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-brand-navy text-white font-semibold hover:bg-brand-navy-dark transition-colors"
          >
            View All Services
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

Services.displayName = 'Services'
