import { Metadata } from "next"
import { SocialProofSection } from "@/components/sections/social-proof"
import { TestimonialStrip } from "@/components/ui/testimonial-strip"

export const metadata: Metadata = {
  title: "Testimonials",
  description: "See what our students are saying about Creator Camp Academy",
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Success Stories From Our <span className="text-primary">Students</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real results from real creators who took action and transformed their lives
            </p>
          </div>
        </div>
      </section>

      {/* Main Social Proof Section */}
      <SocialProofSection />

      {/* Additional Testimonial Strips */}
      <TestimonialStrip startIndex={0} title="From Zero to Hero" />
      <TestimonialStrip startIndex={4} title="Life-Changing Results" />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators who have transformed their passion into profit
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8"
          >
            Start Your Journey Today
          </a>
        </div>
      </section>
    </div>
  )
}