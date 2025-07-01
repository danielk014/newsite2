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
    name: "Basic",
    tagline: "Perfect for beginners",
    price: 39.99,
    originalPrice: 39.99,
    billingPeriod: "month",
    features: [
      "Access to Private Community",
      "Beginner Editing Tutorials (Premiere Pro, CapCut)",
      "Editing Essentials starter pack",
      "Monthly viral video breakdown",
      "AI Tools Starter Kit",
      "Limited Editing Pack",
    ],
    cta: "Enroll now",
    guarantee: "30-Day Money-Back Guarantee",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Best value for serious creators",
    price: 49.99,
    originalPrice: 49.99,
    billingPeriod: "month",
    popular: true,
    features: [
      "30-day $10K roadmap to fast monetization",
      "Get Your First Viral Clip in 7 Days",
      "Professional editing toolkit (presets, SFX, stock clips)",
      "Advanced Premiere Pro & CapCut tutorials",
      "Personalized channel reviews",
      "Real-time trend alerts (videos & sounds)",
      "Edit Roadblock Support - get help instantly",
      "Advanced Resources Vault",
      "YouTube AdSense Accelerator - Monetized in 30 days",
    ],
    cta: "Enroll now",
    guarantee: "30-Day Money-Back Guarantee",
  },
  {
    id: "empire",
    name: "Premium",
    tagline: "Complete creator transformation",
    price: 124.99,
    originalPrice: 124.99,
    billingPeriod: "month",
    features: [
      "Step-by-step blueprint to $30K+/mo With Content Creation",
      "30-day viral content calendar (Know When and What To Post)",
      "1-on-1 Coaching Calls",
      "After Effects masterclass (motion design & animations)",
      "Exclusive High End vault (premium templates & assets)",
      "Everything from Basic and Popular tiers",
      "Priority support and direct access",
      "Lifetime updates to all content",
    ],
    cta: "Enroll now",
    guarantee: "30-Day Money-Back Guarantee",
  },
]

export const comparisonFeatures = [
  {
    feature: "Community Access",
    starter: "✅",
    pro: "✅",
    empire: "✅ VIP",
  },
  {
    feature: "Editing Tutorials",
    starter: "Basic",
    pro: "Advanced",
    empire: "Master + After Effects",
  },
  {
    feature: "AI Tools",
    starter: "Starter Kit",
    pro: "Full Suite",
    empire: "Everything + Premium",
  },
  {
    feature: "Channel Reviews",
    starter: "❌",
    pro: "✅",
    empire: "✅ Priority",
  },
  {
    feature: "1-on-1 Coaching",
    starter: "❌",
    pro: "❌",
    empire: "✅ Weekly",
  },
  {
    feature: "Content Calendar",
    starter: "❌",
    pro: "✅",
    empire: "✅ Custom",
  },
  {
    feature: "Support Level",
    starter: "Community",
    pro: "Priority",
    empire: "Direct Access",
  },
]