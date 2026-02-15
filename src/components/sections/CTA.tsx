'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline'

interface CTAProps {
  variant?: 'default' | 'careers'
}

export const CTA: React.FC<CTAProps> = ({ variant = 'default' }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const isCareer = variant === 'careers'

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 bg-gradient-to-br from-brand-navy via-brand-navy-dark to-brand-navy relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Shapes */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-accent-orange/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            {isCareer ? 'Join the Revolution' : 'Let\'s Work Together'}
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
            {isCareer ? (
              <>
                Ready to Build Your{' '}
                <span className="text-accent-orange">Career?</span>
              </>
            ) : (
              <>
                Ready to Grow Your{' '}
                <span className="text-accent-orange">Customer Base?</span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            {isCareer
              ? "Join Malaysia's boldest field marketing team. Build real skills, earn great rewards, and be part of something bigger."
              : "Let's discuss how Revolution Runners can help you exceed your acquisition targets through professional face-to-face marketing."}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={isCareer ? '/careers' : '/contact'}
              className="inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-semibold rounded-lg bg-accent-orange hover:bg-accent-orange-dark text-white shadow-orange hover:shadow-lg transition-all duration-200"
            >
              {isCareer ? 'Apply Now' : 'Partner With Us'}
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-brand-navy transition-all duration-200"
            >
              <PhoneIcon className="w-5 h-5" />
              Get in Touch
            </Link>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-white/60 text-sm"
          >
            Or email us directly at{' '}
            <a
              href="mailto:hello@revolutionrunners.com"
              className="text-accent-orange hover:underline"
            >
              hello@revolutionrunners.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

CTA.displayName = 'CTA'
