'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white shadow-brand-lg'
          : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12">
              <Image
                src="/images/logo.jpeg"
                alt="Revolution Runners Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg sm:text-xl font-bold text-brand-navy font-heading">
                Revolution Runners
              </div>
              <div className="text-xs text-text-secondary">
                Think Big, Think Different
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-text-primary hover:text-brand-navy transition-colors rounded-lg hover:bg-brand-navy/5"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/careers"
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-semibold rounded-lg border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all"
            >
              Join Our Team
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-semibold rounded-lg bg-accent-orange text-white hover:bg-accent-orange-dark transition-all"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-brand-navy/5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden transition-all duration-300 overflow-hidden',
          mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        )}
      >
        <div className="bg-white border-t border-border-light px-4 py-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-base font-medium text-text-primary hover:text-brand-navy hover:bg-brand-navy/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 space-y-2">
            <Link
              href="/careers"
              className="block w-full text-center py-3 px-4 font-semibold rounded-lg border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Our Team
            </Link>
            <Link
              href="/contact"
              className="block w-full text-center py-3 px-4 font-semibold rounded-lg bg-accent-orange text-white hover:bg-accent-orange-dark transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.displayName = 'Header'
