export interface PricingTier {
  id: string
  name: string
  tagline: string
  price: number
  originalPrice: number
  billingPeriod: string
  popular?: boolean
  features: string[]
  cta: string
  guarantee: string
}

// Updated pricing tiers for Creator Camp Academy
export const pricingTiers: PricingTier[] = [
  {
    id: "pro",
    name: "Elite Network",
    tagline: "Complete All-in-One Package",
    price: 5,
    originalPrice: 50,
    billingPeriod: "month",
    popular: true,
    features: [
      "✅ EVERYTHING YOU NEED TO START",
      "Complete Faceless Channel System",
      "Faceless Niche List and Case Studies",
      "AI Content Creation Mastery",
      "Professional Video Editing Tutorials",
      "Advanced Automation Workflows",
      "Multi-Channel Scaling Strategies",
      "Revenue Optimization System",
      "🎁 BONUS: AI Training & Templates ($497 value)",
      "🎁 BONUS: Done-for-You Templates ($497 value)",
      "🎁 BONUS: Elite Network Access ($997/year value)",
      "🎁 BONUS: Channel Reviews ($497 value)",
    ],
    cta: "Join Elite Network",
    guarantee: "30-Day Money-Back Guarantee",
  },
  {
    id: "elite",
    name: "VIP Inner Circle",
    tagline: "Complete automation transformation",
    price: 1994,
    originalPrice: 1994,
    billingPeriod: "year",
    features: [
      "✅ EVERYTHING YOU NEED TO START",
      "Complete Faceless Channel System",
      "Faceless Niche List and Case Studies",
      "AI Content Creation Mastery",
      "Professional Video Editing Tutorials",
      "Advanced Automation Workflows",
      "Multi-Channel Scaling Strategies",
      "Revenue Optimization System",
      "🎁 BONUS: AI Training & Templates ($497 value)",
      "🎁 BONUS: Done-for-You Templates ($497 value)",
      "🎁 BONUS: Elite Network Access ($997/year value)",
      "🎁 BONUS: Channel Reviews ($497 value)",
      "🎁 YEARLY BONUS: 1-on-1 Coaching Calls",
      "🎁 YEARLY BONUS: Founder-Led Marketing & Personal Brand Strategy",
      "🎁 YEARLY BONUS: After Effects Masterclass (motion design & animations)",
      "🎁 YEARLY BONUS: Exclusive High End Vault (premium templates & assets)",
      "🎁 YEARLY BONUS: VIP Elite Community Access",
      "🎁 YEARLY BONUS: Priority Support & Reviews",
    ],
    cta: "Apply for VIP Access",
    guarantee: "30-Day Money-Back Guarantee",
  },
]

export const comparisonFeatures = [
  {
    feature: "Complete Faceless Channel System",
    pro: "✅ Included",
    elite: "✅ Included",
  },
  {
    feature: "AI Content Creation & Editing",
    pro: "✅ Full Training",
    elite: "✅ Full Training",
  },
  {
    feature: "Automation Workflows",
    pro: "✅ Advanced System",
    elite: "✅ Advanced System",
  },
  {
    feature: "Revenue Optimization",
    pro: "✅ Multi-Stream System",
    elite: "✅ Multi-Stream System",
  },
  {
    feature: "Bonus Templates & Tools",
    pro: "✅ $1,988 Value",
    elite: "✅ $1,988 Value",
  },
  {
    feature: "1-on-1 Coaching Calls",
    pro: "❌",
    elite: "✅ Personal Guidance",
  },
  {
    feature: "After Effects Masterclass",
    pro: "❌",
    elite: "✅ Motion Design Training",
  },
  {
    feature: "Premium Vault Access",
    pro: "❌",
    elite: "✅ High-End Templates",
  },
]