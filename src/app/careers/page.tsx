'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import {
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  TrophyIcon,
  MapPinIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

const benefits = [
  {
    icon: AcademicCapIcon,
    title: 'Comprehensive Training',
    description: 'Learn sales, marketing, and leadership skills from experienced professionals.',
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Career Progression',
    description: 'Clear paths to leadership. Many of our managers started as brand ambassadors.',
  },
  {
    icon: UserGroupIcon,
    title: 'Team Culture',
    description: 'Join a supportive, energetic team that celebrates wins together.',
  },
  {
    icon: TrophyIcon,
    title: 'Recognition & Rewards',
    description: 'Top performers earn rewards, recognition, and advancement opportunities.',
  },
  {
    icon: MapPinIcon,
    title: 'Nationwide Opportunities',
    description: 'Work in various locations across Malaysia\'s 13 states.',
  },
]

const lookingFor = [
  'Ambitious individuals who love connecting with people',
  'Self-starters who thrive in dynamic environments',
  'Team players who support each other\'s success',
  'Those who want more than just a job',
  'People who think big and want to make an impact',
]

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2070&q=80"
              alt="Young professionals team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 to-brand-navy-dark/90" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                Join Our Team
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading">
                Build Your Career with{' '}
                <span className="text-accent-orange">Revolution Runners</span>
              </h1>
              <p className="mt-6 text-xl text-white/80">
                We&apos;re not just building campaigns—we&apos;re building careers. Join Malaysia&apos;s
                boldest field marketing team and develop real skills while making an impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-accent-orange/10 text-accent-orange text-sm font-medium mb-4">
                Why Join Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy font-heading">
                What We Offer
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                At Revolution Runners, you&apos;ll develop real skills in sales, marketing, and
                leadership while being part of a dynamic, supportive team.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-bg-light rounded-2xl p-8"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-navy/10 text-brand-navy mb-6">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy font-heading mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We're Looking For */}
        <section className="py-20 sm:py-28 bg-bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm font-medium mb-6">
                  Who We&apos;re Looking For
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy font-heading mb-6">
                  Are You Ready to Join the Revolution?
                </h2>
                <p className="text-lg text-text-secondary mb-8">
                  We&apos;re looking for ambitious individuals who are ready to grow,
                  learn, and make an impact. No experience required—just the right attitude.
                </p>
                <ul className="space-y-4">
                  {lookingFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-accent-orange flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-brand-navy rounded-2xl p-8 lg:p-10 text-white"
              >
                <h3 className="text-2xl font-semibold mb-2">Ready to Start?</h3>
                <p className="text-white/70 mb-8">
                  Fill out the form below and our team will get in touch with you.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-orange/20 text-accent-orange mb-4">
                      <CheckCircleIcon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Application Received!</h4>
                    <p className="text-white/70">
                      Thank you for your interest. We&apos;ll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                        placeholder="+60 12-345 6789"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-2">
                        Preferred Location
                      </label>
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
                      >
                        <option value="" className="text-gray-900">Select a state</option>
                        <option value="kuala-lumpur" className="text-gray-900">Kuala Lumpur</option>
                        <option value="selangor" className="text-gray-900">Selangor</option>
                        <option value="penang" className="text-gray-900">Penang</option>
                        <option value="johor" className="text-gray-900">Johor</option>
                        <option value="other" className="text-gray-900">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Tell Us About Yourself
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-orange resize-none"
                        placeholder="Why do you want to join Revolution Runners?"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      Submit Application
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
