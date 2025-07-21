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
      '1747853447585.png', '1747853528603.png', '1747853549998.png',
      '1747853550047.png', '1747853575949.png', '1747853595345.png',
      '1747853595353.png', '1747853595361.png', '91k.jpg',
      'IMG_0003.jpg', 'IMG_0428.jpg', 'IMG_5369.PNG', 'new.jpg',
      'Screenshot_2022-07-17-23-24-19-738_com.zhiliaoapp.musically.jpg',
      'Screenshot_2022-07-19-22-35-51-110_com.zhiliaoapp.musically.jpg',
      'Screenshot_2022-11-17-08-17-29-411-edit_com.google.android.apps.youtube.creator.jpg',
      'Screenshot_2022-11-19-07-50-09-619-edit_com.google.android.apps.youtube.creator.jpg',
      'Screenshot_2022-12-03-22-27-14-249-edit_com.google.android.apps.youtube.creator.jpg',
      'Screenshot_2022-12-04-12-14-37-280-edit_com.google.android.apps.youtube.creator.jpg',
      'Screenshot_2022-12-05-16-49-39-455-edit_com.google.android.apps.youtube.creator.jpg',
      'Screenshot_2022-12-06-12-47-39-174-edit_com.google.android.apps.youtube.creator.jpg',
      'Screenshot_2022-12-06-22-39-47-840_com.zhiliaoapp.musically.jpg',
      'Screenshot_2022-12-08-16-35-45-688-edit_com.google.android.apps.youtube.creator.jpg',
      'Screenshot_2022-12-27-12-39-48-191_com.google.android.apps.youtube.creator.jpg',
      'Screenshot_2023-03-20-15-52-01-318-edit_com.google.android.apps.youtube.creator.jpg',
      'Screenshot_2023-03-27-18-59-48-984-edit_com.google.android.apps.youtube.creator.jpg',
      'Screenshot_2023-08-03-19-53-34-703-edit_com.google.android.apps.youtube.creator.jpg',
      'Screenshot_2023-10-01-16-36-17-643-edit_com.google.android.apps.youtube.creator.jpg',
      'Screenshot_2023-10-04-16-32-44-799-edit_com.google.android.apps.youtube.creator.jpg',
      'Screenshot_2023-10-10-11-36-01-186_com.google.android.apps.youtube.creator.jpg'
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
            height={600}
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  )
}