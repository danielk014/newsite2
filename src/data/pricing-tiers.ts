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
      "Access to Private Community",
      "Beginner Editing Tutorials (Premiere Pro, CapCut)",
      "viral video breakdowns",
      "Personalized channel reviews",
      "Limited Editing Pack",
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
      "Access to Advanced AI Tools",
      "Professional Editing Toolkit (presets, SFX, stock clips)",
      "YouTube AdSense + TikTok CPB Setup Guide",
      "Personalized Channel Reviews",
    ],
    cta: "Enroll now",
    guarantee: "30-Day Money-Back Guarantee",
  },
  {
    id: "elite",
    name: "Elite Coaching",
    tagline: "Complete creator transformation",
    price: 0,
    originalPrice: 0,
    billingPeriod: "custom",
    features: [
      "Step-by-step blueprint to $30K+/mo With Content Creation",
      "30-day viral content calendar (Know When and What To Post)",
      "1-on-1 Coaching Calls",
      "After Effects masterclass (motion design & animations)",
      "Exclusive High End vault (premium templates & assets)",
    ],
    cta: "Contact Us",
    guarantee: "Custom pricing for your needs",
  },
]

export const comparisonFeatures = [
  {
    feature: "Community Access",
    starter: "✅",
    pro: "✅",
    elite: "✅ VIP",
  },
  {
    feature: "Editing Tutorials",
    starter: "Basic",
    pro: "Advanced",
    elite: "Master + After Effects",
  },
  {
    feature: "AI Tools",
    starter: "❌",
    pro: "✅ Advanced",
    elite: "✅ Everything + Premium",
  },
  {
    feature: "Channel Reviews",
    starter: "✅",
    pro: "✅",
    elite: "✅ Priority",
  },
  {
    feature: "1-on-1 Coaching",
    starter: "❌",
    pro: "❌",
    elite: "✅ Weekly",
  },
  {
    feature: "Content Calendar",
    starter: "❌",
    pro: "❌",
    elite: "✅ 30-day viral calendar",
  },
  {
    feature: "Support Level",
    starter: "Community",
    pro: "Priority",
    elite: "Direct Access",
  },
]