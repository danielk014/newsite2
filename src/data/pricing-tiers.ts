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

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for beginners",
    price: 39,
    originalPrice: 39,
    billingPeriod: "month",
    features: [
      "Beginner Editing Tutorials (Premiere Pro, CapCut)",
      "Viral video breakdowns",
      "Limited Editing Pack",
      "🎁 BONUS: Private Community Access ($997/year value)",
      "🎁 BONUS: Creator Camp Coins ($197 value)",
    ],
    cta: "Enroll now",
    guarantee: "30-Day Money-Back Guarantee",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Best value for serious creators",
    price: 49,
    originalPrice: 49,
    billingPeriod: "month",
    popular: true,
    features: [
      "Everything In Starter",
      "Personal Brand Lab",
      "Personal Brand Long Form + Editing Tutorials",
      "Personal Brand Short Form + Editing Tutorials",
      "Faceless AI Short Form Content + Editing Tutorials",
      "Faceless Clipping Course + Editing Tutorials",
      "Monetization Course",
      "🎁 BONUS: AI Automation Suite ($1,694 value)",
      "🎁 BONUS: Creator Toolkit ($497 value)",
      "🎁 BONUS: Private Community Access ($997/year value)",
      "🎁 BONUS: Profile Reviews ($497 value)",
    ],
    cta: "Enroll now",
    guarantee: "30-Day Money-Back Guarantee",
  },
  {
    id: "elite",
    name: "Elite Coaching",
    tagline: "Complete creator transformation",
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
    cta: "Enroll now",
    guarantee: "30-Day Money-Back Guarantee",
  },
]

export const comparisonFeatures = [
  {
    feature: "Personal Brand Lab",
    starter: "❌",
    pro: "✅ Personal Brand Strategy",
    elite: "✅ + 1-on-1 Brand Strategy",
  },
  {
    feature: "Viral Clip Mastery",
    starter: "Basic Breakdowns",
    pro: "✅ 1B Views/Month System",
    elite: "✅ + Advanced Templates",
  },
  {
    feature: "Creator Revenue System",
    starter: "❌",
    pro: "✅ Multiple Income Streams",
    elite: "✅ + $30K+/mo Blueprint",
  },
  {
    feature: "Editing Tutorials",
    starter: "Beginner (CapCut)",
    pro: "Premiere Pro + CapCut",
    elite: "Everything + After Effects",
  },
  {
    feature: "AI Automation Suite ($1,694 value)",
    starter: "❌",
    pro: "✅ InsightSync + Script AI",
    elite: "✅ All Tools + Beta Access",
  },
  {
    feature: "Elite Chat Access",
    starter: "❌",
    pro: "✅ Earned Access",
    elite: "✅ VIP Priority Access",
  },
  {
    feature: "1-on-1 Coaching",
    starter: "❌",
    pro: "❌",
    elite: "✅ Weekly Calls",
  },
]