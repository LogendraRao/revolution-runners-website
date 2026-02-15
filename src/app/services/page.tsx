'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CTA } from '@/components/sections/CTA'
import {
  UserGroupIcon,
  HeartIcon,
  CreditCardIcon,
  MegaphoneIcon,
  UsersIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    id: 'face-to-face',
    icon: UserGroupIcon,
    title: 'Face-to-Face Marketing',
    tagline: 'The Power of Human Connection',
    description: 'We position trained brand ambassadors at high-traffic locations to engage your target audience directly. Real conversations. Real conversions.',
    benefits: [
      'Direct engagement with your target demographic',
      'Immediate feedback and interaction',
      'Higher conversion rates than digital-only campaigns',
      'Brand experience that creates lasting impressions',
      'Professional representation of your brand',
    ],
    process: [
      'Strategy & Location Planning',
      'Team Training & Preparation',
      'Campaign Execution',
      'Real-time Monitoring',
      'Performance Reporting',
    ],
  },
  {
    id: 'fundraising',
    icon: HeartIcon,
    title: 'Fundraising Campaigns',
    tagline: 'Connect Donors to Causes That Matter',
    description: 'We help NGOs and charities build sustainable donor bases through meaningful, ethical engagement. Our fundraising specialists don\'t just ask for donations—they share your mission and create lasting supporters.',
    benefits: [
      'Higher donor retention rates',
      'Ethical and respectful engagement',
      'Focus on recurring donations for sustainability',
      'Transparent campaign reporting',
      'Mission-aligned brand ambassadors',
    ],
    process: [
      'Understand Your Mission',
      'Develop Compelling Narratives',
      'Train Dedicated Fundraisers',
      'Execute with Integrity',
      'Build Long-term Donor Relationships',
    ],
  },
  {
    id: 'financial',
    icon: CreditCardIcon,
    title: 'Financial Product Acquisition',
    tagline: 'Turn Foot Traffic into Cardholders',
    description: 'We partner with banks and financial institutions to acquire customers on the ground. Professional execution, full compliance, and applications processed on the spot.',
    benefits: [
      'Qualified leads that convert',
      'Compliant and professional execution',
      'Real-time application tracking',
      'Consistent brand representation',
      'Experienced in regulatory requirements',
    ],
    process: [
      'Product & Compliance Training',
      'Strategic Location Selection',
      'Professional Engagement',
      'On-the-Spot Application Processing',
      'Quality Verification',
    ],
  },
  {
    id: 'activations',
    icon: MegaphoneIcon,
    title: 'Brand Activations',
    tagline: 'Bring Your Brand to Life',
    description: 'From product launches to promotional roadshows, we create memorable brand experiences in high-traffic locations. Our team engages consumers directly, builds awareness, and drives action.',
    benefits: [
      'High-impact brand visibility',
      'Direct consumer engagement',
      'Measurable brand interactions',
      'Flexible campaign formats',
      'Nationwide activation capabilities',
    ],
    process: [
      'Creative Concept Development',
      'Location & Logistics Planning',
      'Team Briefing & Rehearsal',
      'Live Activation Management',
      'Impact Measurement & Reporting',
    ],
  },
  {
    id: 'team-building',
    icon: UsersIcon,
    title: 'Team Building',
    tagline: 'Build Teams That Perform',
    description: 'Beyond campaigns, we develop high-performing teams. Our team building programs create unity, motivation, and the skills to succeed.',
    benefits: [
      'Improved team cohesion',
      'Enhanced communication skills',
      'Increased motivation and morale',
      'Leadership development',
      'Customized to your organization\'s needs',
    ],
    process: [
      'Needs Assessment',
      'Program Design',
      'Facilitated Activities',
      'Reflection & Learning',
      'Follow-up Support',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2070&q=80"
              alt="Business professionals"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 to-brand-navy-dark/75" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading">
                Comprehensive Field Marketing{' '}
                <span className="text-accent-orange">Solutions</span>
              </h1>
              <p className="mt-6 text-xl text-white/80">
                From fundraising to financial acquisition, we deliver results through
                professional face-to-face engagement across Malaysia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 sm:py-28 ${index % 2 === 0 ? 'bg-white' : 'bg-bg-light'}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent-orange/10 text-accent-orange mb-6">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy font-heading mb-2">
                    {service.title}
                  </h2>
                  <p className="text-lg text-accent-orange font-medium mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-lg text-text-secondary mb-8">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <h3 className="text-lg font-semibold text-brand-navy mb-4">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-accent-orange flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Process */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`bg-brand-navy rounded-2xl p-8 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <h3 className="text-xl font-semibold text-white mb-8">
                    Our Process
                  </h3>
                  <div className="space-y-6">
                    {service.process.map((step, stepIndex) => (
                      <div key={step} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-orange flex items-center justify-center text-white font-bold">
                          {stepIndex + 1}
                        </div>
                        <div className="pt-2">
                          <p className="text-white font-medium">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        <CTA />
      </main>
      <Footer />
    </>
  )
}
