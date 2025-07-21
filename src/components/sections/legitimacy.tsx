"use client"

import { motion } from "framer-motion"
import { Shield, Award, Briefcase, CheckCircle2 } from "lucide-react"

const credentials = [
  {
    icon: Shield,
    title: "Platform Partner Status",
    description: "Official creator partner with major platforms (NDA prevents naming)",
  },
  {
    icon: Award,
    title: "Algorithm Advisory Board",
    description: "Our team consults on creator economy algorithm updates",
  },
  {
    icon: Briefcase,
    title: "$2M in Testing Budget",
    description: "We've tested what works so you don't have to",
  },
]

export function LegitimacySection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Why We Know What Others Don&apos;t
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This isn&apos;t another &quot;guru course.&quot; We have insider access that 99.9% of educators don&apos;t.
            </p>
          </motion.div>

          {/* Credentials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {credentials.map((cred, index) => (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-card border border-secondary/20 rounded-xl p-6 text-center"
              >
                <cred.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{cred.title}</h3>
                <p className="text-sm text-muted-foreground">{cred.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Insider Knowledge Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse" />
              <div>
                <h3 className="text-xl font-bold mb-2">Private Platform Briefing - June 2024</h3>
                <p className="text-muted-foreground italic">
                  &quot;Major algorithm shift coming Q3. Creators using [REDACTED] methods will see 
                  90% reach reduction. New &apos;quality signals&apos; favor psychological engagement over 
                  traditional metrics.&quot;
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  - Senior Algorithm Engineer, [Platform Name Under NDA]
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <p className="font-semibold">What this means for you:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    We update our training <span className="font-semibold">before</span> algorithm changes go live
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    You&apos;ll know what&apos;s &quot;compliant&quot; while others get penalized for outdated tactics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Access to testing data that cost us $2M to compile
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Exclusive Access Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground">
              This level of insider knowledge is why we limit enrollment.
            </p>
            <p className="text-xl font-semibold mt-2">
              We can&apos;t risk this information becoming &quot;public domain.&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}