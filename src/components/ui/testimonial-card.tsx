"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  result: string
  className?: string
  delay?: number
}

export function TestimonialCard({ quote, author, result, className = "", delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`bg-card border border-border rounded-xl p-6 relative ${className}`}
    >
      <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
      <div className="space-y-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-sm italic text-muted-foreground">&quot;{quote}&quot;</p>
        <div className="pt-2 border-t border-border">
          <p className="font-semibold text-sm">{author}</p>
          <p className="text-xs text-accent">{result}</p>
        </div>
      </div>
    </motion.div>
  )
}

interface MiniTestimonialsProps {
  testimonials: Array<{
    quote: string
    author: string
    result: string
  }>
  className?: string
}

export function MiniTestimonials({ testimonials, className = "" }: MiniTestimonialsProps) {
  return (
    <div className={`grid md:grid-cols-3 gap-6 ${className}`}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          quote={testimonial.quote}
          author={testimonial.author}
          result={testimonial.result}
          delay={index * 0.1}
        />
      ))}
    </div>
  )
}