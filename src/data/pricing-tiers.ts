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
    originalPrice: 5,
    billingPeriod: "month",
    popular: true,
    features: [
      "✅ EVERYTHING YOU NEED TO START",
      "Complete Faceless Channel System",
      "AI Content Creation Mastery",
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
      "Step-by-step blueprint for scaling your content business",
      "Strategic content calendar (Know When and What To Post)",
      "1-on-1 Coaching Calls",
      "Founder-Led Marketing & Personal Brand Strategy",
      "After Effects masterclass (motion design & animations)",
      "Exclusive High End vault (premium templates & assets)",
      "🎁 BONUS: All Previous Bonuses",
      "🎁 BONUS: VIP Elite Community Access",
      "🎁 BONUS: Priority Support & Reviews",
    ],
    cta: "Apply for VIP Access",
    guarantee: "30-Day Money-Back Guarantee",
  },
]

export const comparisonFeatures = [
  {
    feature: "Faceless Channel Foundation",
    pro: "✅ Complete System",
    elite: "✅ + 1-on-1 Setup",
  },
  {
    feature: "Content Automation",
    pro: "✅ AI Training & Templates",
    elite: "✅ + Advanced Workflows",
  },
  {
    feature: "Revenue System",
    pro: "✅ Multiple Income Streams",
    elite: "✅ + €100K+/mo Blueprint",
  },
  {
    feature: "Channel Management",
    pro: "Multi-Channel Strategy",
    elite: "15+ Channel Empire",
  },
  {
    feature: "AI Training & Templates",
    pro: "✅ Included",
    elite: "✅ + Beta Tools",
  },
  {
    feature: "Network Access",
    pro: "✅ Elite Network",
    elite: "✅ VIP Inner Circle",
  },
  {
    feature: "1-on-1 Mentoring",
    pro: "❌",
    elite: "✅ Weekly Calls",
  },
]