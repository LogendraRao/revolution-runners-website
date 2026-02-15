'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CTA } from '@/components/sections/CTA'
import {
  BoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const values = [
  {
    icon: BoltIcon,
    title: 'Bold',
    description: 'We take action. We don\'t wait for permission to make things happen.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Integrity',
    description: 'We represent every brand as if it were our own—with honesty and professionalism.',
  },
  {
    icon: ChartBarIcon,
    title: 'Results',
    description: 'We\'re not satisfied until targets are exceeded. Performance is everything.',
  },
  {
    icon: UserGroupIcon,
    title: 'People',
    description: 'Our team is our strength. We invest in training, growth, and celebrating wins together.',
  },
  {
    icon: SparklesIcon,
    title: 'Different',
    description: 'We challenge the norm. We think bigger and execute better.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2070&q=80"
              alt="Team meeting"
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
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading">
                We Believe in the Power of{' '}
                <span className="text-accent-orange">Human Connection</span>
              </h1>
              <p className="mt-6 text-xl text-white/80">
                In an increasingly digital world, genuine conversations still matter.
                That&apos;s the foundation of everything we do.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-1 rounded-full bg-accent-orange/10 text-accent-orange text-sm font-medium mb-6">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy font-heading mb-6">
                  Started in 2020 with a Simple Belief
                </h2>
                <div className="space-y-4 text-text-secondary text-lg">
                  <p>
                    Revolution Runners was founded in 2020 with a simple belief: in an increasingly
                    digital world, the power of human connection still matters. While others chased
                    algorithms, we focused on conversations. Real people, meeting real people, creating
                    real results.
                  </p>
                  <p>
                    Today, we&apos;re Malaysia&apos;s bold field marketing partner—working with leading NGOs,
                    financial institutions, and brands to acquire customers and donors through
                    professional face-to-face engagement.
                  </p>
                  <p>
                    From Kuala Lumpur&apos;s busiest malls to communities across all 13 states, our team
                    of trained brand ambassadors represents your brand like it&apos;s their own.
                  </p>
                  <p className="text-brand-navy font-semibold">
                    Think Big. Think Different. That&apos;s not just our tagline—it&apos;s how we approach
                    every campaign.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="aspect-square bg-bg-light rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                    alt="Revolution Runners Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent-orange text-white p-6 rounded-2xl shadow-orange">
                  <div className="text-4xl font-bold font-heading">5+</div>
                  <div className="text-sm">Years of Impact</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 sm:py-28 bg-bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <span className="inline-block px-4 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm font-medium mb-6">
                  Leadership
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy font-heading mb-6">
                  Meet Our Founder
                </h2>
                <h3 className="text-2xl font-semibold text-accent-orange mb-4">
                  Adila Bahrin
                </h3>
                <p className="text-lg text-text-secondary mb-6">
                  Founder & Managing Director
                </p>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Adila founded Revolution Runners with a vision to transform how businesses
                    connect with customers. With years of experience in the field marketing
                    industry, she recognized the untapped potential of genuine human connection
                    in driving business results.
                  </p>
                  <p>
                    Her leadership philosophy centers on empowering people—both clients and team
                    members—to achieve more than they thought possible. Under her guidance,
                    Revolution Runners has grown to serve major NGOs and brands across Malaysia.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <div className="relative max-w-md mx-auto lg:mx-0">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-brand-xl">
                    <Image
                      src="/images/founder.jpeg"
                      alt="Adila Bahrin - Founder of Revolution Runners"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-brand-navy rounded-2xl p-8 lg:p-12 text-white"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-orange mb-4">
                  Our Mission
                </h3>
                <p className="text-2xl lg:text-3xl font-heading font-semibold leading-relaxed">
                  To revolutionize customer and donor acquisition through bold, professional,
                  and results-driven face-to-face marketing.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-accent-orange rounded-2xl p-8 lg:p-12 text-white"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80 mb-4">
                  Our Vision
                </h3>
                <p className="text-2xl lg:text-3xl font-heading font-semibold leading-relaxed">
                  To be Malaysia&apos;s most trusted field marketing agency—known for exceptional
                  results, energetic teams, and campaigns that make a difference.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 sm:py-28 bg-bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-accent-orange/10 text-accent-orange text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy font-heading">
                What We Stand For
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                These values guide everything we do—from how we run campaigns to how we treat our team.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-brand hover:shadow-brand-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-orange/10 text-accent-orange mb-6">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy font-heading mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
