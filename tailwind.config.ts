import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'brand': {
          navy: '#2B4570',
          'navy-dark': '#1E3150',
          'navy-light': '#3D5A80',
        },
        // Accent Colors
        'accent': {
          orange: '#F97316',
          'orange-dark': '#EA580C',
          'orange-light': '#FB923C',
        },
        // Text Colors
        'text': {
          primary: '#0F172A',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
        // Background Colors
        'bg': {
          white: '#FFFFFF',
          light: '#F8FAFC',
          gray: '#F1F5F9',
        },
        // Border Colors
        'border': {
          light: '#E2E8F0',
          medium: '#CBD5E1',
        },
      },
      spacing: {
        'section': '5rem',
        'section-sm': '3rem',
        'item': '1.5rem',
        'item-sm': '1rem',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'brand': '0 4px 15px rgba(43, 69, 112, 0.1)',
        'brand-lg': '0 8px 25px rgba(43, 69, 112, 0.15)',
        'brand-xl': '0 12px 35px rgba(43, 69, 112, 0.2)',
        'orange': '0 4px 15px rgba(249, 115, 22, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
