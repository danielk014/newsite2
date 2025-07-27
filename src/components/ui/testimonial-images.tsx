"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

interface TestimonialImagesProps {
  count?: number
  columns?: number
  startIndex?: number
  className?: string
}

export function TestimonialImages({ 
  count = 6, 
  columns = 3,
  startIndex = 0,
  className = ""
}: TestimonialImagesProps) {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // List of all testimonial images
    const allImages = [
      '1.png', '2.png', '3.png',
      '4.png', '5.png', '6.png'
    ]
    
    // Get subset of images based on startIndex and count
    const selectedImages = allImages.slice(startIndex, startIndex + count)
    setImages(selectedImages)
  }, [count, startIndex])

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-2 lg:grid-cols-5',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
  }[columns] || 'grid-cols-3'

  return (
    <div className={`grid ${gridCols} gap-4 ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
        >
          <Image
            src={`/images/testimonials/${image}`}
            alt={`Success story ${index + 1}`}
            width={400}
            height={400}
            className="w-full h-auto object-cover aspect-square"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  )
}