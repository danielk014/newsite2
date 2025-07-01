# Hero Section Documentation

## Overview

The Hero section is the first thing visitors see and is designed to capture attention, communicate the core value proposition, and drive conversions.

## Components

### HeroSection Component
Located at: `src/components/sections/hero.tsx`

## Features

### 1. Compelling Headline
- **Main headline**: "The Underground System That's Created 500+ Six-Figure Creators"
- **Sub-headline**: "(While Everyone Else Stays Broke)"
- Uses contrasting colors to highlight key benefits
- Mobile-optimized font sizes

### 2. Social Proof Badge
- Shows student count (500+) and average earnings ($10K+/month)
- Positioned at the top for immediate credibility
- Animated entrance for attention

### 3. Value Proposition
- Clear subheadline explaining the course outcome
- Emphasizes beginner-friendly approach
- Highlights specific monetary benefit

### 4. Dual CTA Strategy
- **Primary CTA**: "Get Instant Access" - Bright, animated button
- **Secondary CTA**: "Watch Free Training" - For not-ready-to-buy visitors
- Both buttons are mobile-optimized with full width on small screens

### 5. Trust Indicators
- Avatar stack showing recent students
- Student count (10,847+)
- Average ROI metric (2,847%)
- Positioned below CTAs for scanning pattern

### 6. Video Preview
- Large video thumbnail with play button
- Click to open modal with YouTube embed
- Placeholder for actual course preview video

## Animations

Using Framer Motion for smooth, staggered animations:
- Each element fades in with upward movement
- Staggered delays (0.1s between elements)
- Video preview scales in for emphasis

## Mobile Optimizations

- Responsive font sizes (text-4xl → text-6xl)
- Stack CTAs vertically on mobile
- Full-width buttons on small screens
- Reduced spacing and padding

## Conversion Elements

1. **Urgency**: Student count creates FOMO
2. **Authority**: 500+ successful creators
3. **Specificity**: Exact earnings figure ($10K+/month)
4. **Risk Reversal**: "Complete beginners" messaging
5. **Social Proof**: Avatar stack and metrics

## Video Modal

- Full-screen overlay with semi-transparent background
- Responsive video player
- Click outside to close
- Currently uses placeholder YouTube video

## Customization

To update the hero section:

1. **Change headline**: Edit the text in the h1 element
2. **Update metrics**: Modify values in `siteConfig`
3. **Replace video**: Update the YouTube embed URL
4. **Adjust colors**: Use Tailwind classes or update design tokens

## Performance Considerations

- Lazy-loaded video (only loads when modal opens)
- Optimized animations with GPU acceleration
- Minimal JavaScript for fast initial paint

## A/B Testing Opportunities

1. Headline variations
2. CTA button text
3. Social proof positioning
4. Video vs. static image
5. Number of trust indicators