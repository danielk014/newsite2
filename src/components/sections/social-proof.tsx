"use client"

import { motion } from "framer-motion"
import { } from "lucide-react"
import { useState } from "react"

export function SocialProofSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Here are a Few <span className="text-accent">results</span> from using our formula….
            </h2>
          </motion.div>

          {/* Success Examples Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">Proven Success Stories</h3>
              <p className="text-muted-foreground">Students achieving their goals</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-accent mb-2">Growing Communities</h3>
              <p className="text-muted-foreground">Building engaged audiences</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">Active Community</h3>
              <p className="text-muted-foreground">Supportive creator network</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-accent mb-2">Proven Growth System</h3>
              <p className="text-muted-foreground">Repeatable success framework</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">210.7M Views in 28 Days</h3>
              <p className="text-muted-foreground">Built using our exact blueprint</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-accent mb-2">1M+ Followers in 90 Days</h3>
              <p className="text-muted-foreground">Built using our exact blueprint</p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo.replace('watch?v=', 'embed/')}
              title="Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}