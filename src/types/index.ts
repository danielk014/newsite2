export interface Testimonial {
  id: string
  name: string
  avatar?: string
  role: string
  content: string
  videoUrl?: string
  beforeStats?: {
    followers: string
    earnings: string
  }
  afterStats?: {
    followers: string
    earnings: string
  }
  featured?: boolean
}

export interface CourseModule {
  id: string
  title: string
  description: string
  lessons: string[]
  duration: string
  value: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  originalPrice?: number
  features: string[]
  popular?: boolean
  paymentPlan?: {
    installments: number
    amount: number
  }
}