'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    quote: "Revolution Runners transformed how we approach donor acquisition. Their team genuinely cares about our cause, and it shows in how they connect with potential supporters.",
    author: "Program Director",
    organization: "National Kidney Foundation",
    image: "/images/clients/nkf.jpg",
  },
  {
    quote: "What sets them apart is the energy and professionalism of their brand ambassadors. They represent our organization with pride and dedication.",
    author: "Fundraising Manager",
    organization: "WWF Malaysia",
    image: "/images/clients/wwf.svg",
  },
  {
    quote: "Working with Revolution Runners has been seamless. The reporting is transparent, and the results speak for themselves. Highly recommended!",
    author: "Marketing Lead",
    organization: "Emitsolar",
    image: "/images/clients/emitsolar.png",
  },
]

export const Testimonials: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 sm:py-28 bg-white">
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy font-heading">
            What Our Partners Say
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Don&apos;t just take our word for it. Here&apos;s what organizations we&apos;ve worked with have to say.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.organization}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-light rounded-2xl p-8 relative"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-6xl text-brand-navy/10 font-serif leading-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent-orange" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-text-primary leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.organization}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <div className="font-semibold text-brand-navy">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.organization}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

Testimonials.displayName = 'Testimonials'
