# Design System Documentation

## Overview

The Creator Camp Academy sales page uses a modern, high-converting dark-themed design system optimized for readability, engagement, and conversions.

## Color Palette

### Primary Colors
- **Primary**: `#FF6B35` (HSL: 15, 80%, 56%) - Vibrant Orange
  - Used for CTAs, highlights, and key actions
  - Represents energy, action, and urgency

- **Secondary**: `#1A1A2E` (HSL: 240, 29%, 16%) - Dark Navy
  - Used for headers, text, and authority elements
  - Conveys trust and professionalism

- **Accent**: `#16C79A` (HSL: 166, 74%, 40%) - Success Green
  - Used for success indicators, pricing, and positive results
  - Represents growth and financial success

### Dark Theme Colors (Active)
- **Background**: Near Black (`hsl(0 0% 3.9%)`)
- **Foreground**: Near White (`hsl(0 0% 98%)`)
- **Card**: Dark Gray (`hsl(0 0% 7%)`)
- **Muted**: Dark Gray (`hsl(0 0% 15%)`)
- **Border**: Dark Border (`hsl(0 0% 15%)`)

## Typography

### Font Family
- **Primary**: Inter (loaded from Google Fonts)
- **Fallback**: system-ui, sans-serif

### Font Sizes
- **Hero Headline**: 3.75rem (60px) - Mobile: 2.5rem (40px)
- **Section Headlines**: 3rem (48px) - Mobile: 2rem (32px)
- **Subheadlines**: 1.5rem (24px) - Mobile: 1.25rem (20px)
- **Body Text**: 1.125rem (18px) - Mobile: 1rem (16px)
- **Small Text**: 0.875rem (14px)

### Font Weights
- **Regular**: 400 - Body text
- **Medium**: 500 - Subheadings
- **Semibold**: 600 - Important text
- **Bold**: 700 - Headlines and CTAs

## Components

### Buttons

#### CTA Button (Primary)
```tsx
<Button variant="cta" size="xl">
  Get Instant Access
</Button>
```
- Gradient background
- Large size with padding
- Shadow effect on hover
- Scale animation on hover

#### Secondary Button
```tsx
<Button variant="secondary" size="lg">
  Learn More
</Button>
```

### Cards
- White background
- Subtle border
- Rounded corners (12px)
- Shadow on hover
- Padding: 24px

### Sections
- Max width: 1280px
- Horizontal padding: 24px (mobile), 48px (desktop)
- Vertical spacing: 80px (mobile), 120px (desktop)

## Animation Guidelines

### Entrance Animations
- Fade in with slight upward movement
- Duration: 0.6s
- Easing: ease-out

### Hover Effects
- Scale: 1.05 for interactive elements
- Duration: 0.3s
- Add shadow for depth

### Scroll Animations
- Stagger children elements
- Delay: 0.1s between elements
- Use Framer Motion for smooth animations

## Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile Optimizations
- Touch targets: Minimum 44px
- Font sizes reduced by 20-30%
- Single column layout
- Sticky CTA button at bottom

## Accessibility

### Color Contrast
- All text meets WCAG AA standards
- Primary text on white: 7.5:1 ratio
- White text on primary: 4.5:1 ratio

### Focus States
- Visible focus ring on all interactive elements
- Ring color matches primary brand color
- 2px offset for better visibility

### Semantic HTML
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support

## Performance Guidelines

### Images
- Use Next.js Image component
- WebP format with fallbacks
- Lazy loading for below-fold images
- Responsive sizing

### Fonts
- Preload Inter font
- Use font-display: swap
- Subset to Latin characters

### CSS
- Use Tailwind utilities
- Avoid runtime styling
- Purge unused styles in production