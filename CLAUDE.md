# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Creator Camp Academy - A high-converting sales page for an online course that teaches content creators how to build six-figure businesses through viral content creation.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # React components
│   ├── ui/          # Shadcn UI components
│   ├── sections/    # Page sections (Hero, Testimonials, etc.)
│   └── layout/      # Layout components
├── config/          # Configuration files
│   └── site.ts      # Site configuration
├── lib/             # Utility functions
│   └── utils.ts     # Helper functions
├── types/           # TypeScript types
│   └── index.ts     # Type definitions
├── hooks/           # Custom React hooks
└── styles/          # Additional styles
```

## Common Commands

```bash
# Development
npm run dev          # Start development server (with Turbopack)

# Building
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint

# Component Installation (Shadcn)
npx shadcn@latest add [component-name]
```

## Implemented Features ✅

1. **Hero Section**: Video modal, dual CTAs, social proof badges
2. **Problem Agitation**: Pain points grid, competitor comparison
3. **Solution Section**: Feature benefits, transformation stats
4. **Social Proof**: Video testimonials, success metrics, reviews
5. **Course Curriculum**: 6 modules with expandable details
6. **FAQ Section**: 10 comprehensive Q&As with guarantees
7. **Urgency Elements**: Live countdown timer, scarcity indicators
8. **Pricing Section**: Value stack, payment options, security
9. **Dark Theme**: Full dark mode implementation
10. **Mobile Responsive**: All sections optimized for mobile

## Design System

- **Primary**: #FF6B35 (Vibrant Orange)
- **Secondary**: #1A1A2E (Dark Navy)
- **Accent**: #16C79A (Success Green)
- **Font**: Inter

## Performance Targets

- Page load: < 2 seconds
- Mobile score: 90+ (Lighthouse)
- Core Web Vitals: All green

This file should be updated as new features and patterns are established.