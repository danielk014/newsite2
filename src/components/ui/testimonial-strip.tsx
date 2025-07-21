"use client"

import { motion } from "framer-motion"
import { TestimonialImages } from "./testimonial-images"

interface TestimonialStripProps {
  startIndex?: number
  title?: string
}

export function TestimonialStrip({ 
  startIndex = 0,
  title = "Real Results From Real People"
}: TestimonialStripProps) {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            <span className="text-primary">{title}</span>
          </h3>
        </motion.div>
        <TestimonialImages count={4} columns={4} startIndex={startIndex} />
      </div>
    </section>
  )
}