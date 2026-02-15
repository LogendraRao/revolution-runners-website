'use client'

import React from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = {
  primary: 'bg-accent-orange hover:bg-accent-orange-dark text-white shadow-orange hover:shadow-lg',
  secondary: 'bg-brand-navy hover:bg-brand-navy-dark text-white shadow-brand hover:shadow-brand-lg',
  outline: 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
  'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-brand-navy',
  ghost: 'text-brand-navy hover:bg-brand-navy/10',
  link: 'text-accent-orange hover:text-accent-orange-dark underline-offset-4 hover:underline',
}

const buttonSizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-13 px-8 text-lg',
  xl: 'h-14 px-10 text-lg',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants
  size?: keyof typeof buttonSizes
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-2 rounded-lg font-semibold',
          'transition-all duration-200 ease-in-out',
          'focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          // Variant styles
          buttonVariants[variant],
          // Size styles
          buttonSizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
