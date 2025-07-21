"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface ImageTestimonial {
  id: number
  src: string
  alt: string
}

export function ImageTestimonialsSection() {
  const [showAll, setShowAll] = useState(false)
  const [images, setImages] = useState<ImageTestimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadImages() {
      try {
        const response = await fetch('/api/testimonials-images')
        if (response.ok) {
          const imageFiles = await response.json()
          const testimonialImages = imageFiles.map((file: string, index: number) => ({
            id: index + 1,
            src: `/images/testimonials/${file}`,
            alt: `Success story testimonial ${index + 1}`
          }))
          setImages(testimonialImages)
        }
      } catch (error) {
        console.error('Error loading testimonial images:', error)
        // Fallback to checking common image formats
        const extensions = ['jpg', 'jpeg', 'png', 'webp']
        const testImages: ImageTestimonial[] = []
        
        for (let i = 1; i <= 50; i++) {
          for (const ext of extensions) {
            const src = `/images/testimonials/testimonial${i}.${ext}`
            testImages.push({
              id: i,
              src,
              alt: `Success story testimonial ${i}`
            })
          }
        }
        setImages(testImages)
      } finally {
        setLoading(false)
      }
    }
    
    loadImages()
  }, [])

  const displayedTestimonials = showAll ? images : images.slice(0, 9)

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Real <span className="text-primary">Success Stories</span> From Our Students
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These are just a few of the hundreds of creators who have transformed their channels and income using our proven system
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square bg-muted animate-pulse rounded-xl" />
              ))}
            </div>
          ) : images.length > 0 ? (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-12">
              {displayedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${testimonial.src}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index % 9) * 0.1 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    <Image
                      src={testimonial.src}
                      alt={testimonial.alt}
                      width={400}
                      height={600}
                      className="w-full h-auto"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.parentElement?.remove()
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No testimonial images found. Please add images to /public/images/testimonials/</p>
            </div>
          )}

          {!showAll && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                variant="cta"
                size="xl"
                onClick={() => setShowAll(true)}
              >
                See More Success Stories
              </Button>
            </motion.div>
          )}

          {showAll && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-8"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(false)}
              >
                Show Less
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}