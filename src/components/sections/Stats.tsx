'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface StatItemProps {
  value: number
  suffix?: string
  label: string
  delay?: number
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix = '', label, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy font-heading">
        {displayValue}
        <span className="text-accent-orange">{suffix}</span>
      </div>
      <div className="mt-2 text-text-secondary text-sm sm:text-base">{label}</div>
    </motion.div>
  )
}

const stats = [
  { value: 5, suffix: '+', label: 'Years of Impact' },
  { value: 100, suffix: '+', label: 'Campaigns Delivered' },
  { value: 50, suffix: '+', label: 'Brand Ambassadors' },
  { value: 13, suffix: '', label: 'States Nationwide' },
]

export const Stats: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

Stats.displayName = 'Stats'
