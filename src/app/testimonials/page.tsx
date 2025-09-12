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
              Real <span className="text-primary">YouTube Results</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              See the actual earnings and analytics from our faceless YouTube automation system
            </p>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Run <span className="text-primary">15+ Faceless YouTube Channels</span> Making $70K+ Per Month
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn the exact systems we use to build Roblox, Finance, and Entertainment empires
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img 
                src="/testimonials/youtube-partner.png" 
                alt="YouTube Partnership Achievement"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">YouTube Partnership Achieved</h3>
                <p className="text-muted-foreground text-sm">Monetization unlocked across all channels</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img 
                src="/testimonials/earnings-6k.png" 
                alt="$6.2K Weekly Earnings"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">$6.2K Weekly Earnings</h3>
                <p className="text-muted-foreground text-sm">Single channel passive income</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img 
                src="/testimonials/channel-981k.png" 
                alt="981K Subscribers Channel"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">981K Subscribers</h3>
                <p className="text-muted-foreground text-sm">$65K estimated monthly revenue</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow lg:col-span-2">
              <img 
                src="/testimonials/views-1m.png" 
                alt="1.1M Views Analytics"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">1.1M Views in 28 Days</h3>
                <p className="text-muted-foreground text-sm">999% growth from automated content system</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img 
                src="/testimonials/views-92m.png" 
                alt="92M Views Analytics"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">92M+ Total Views</h3>
                <p className="text-muted-foreground text-sm">Consistent viral content performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Social Proof Section */}
      <SocialProofSection />

      {/* Additional Testimonial Strips */}
      <TestimonialStrip startIndex={0} title="Student Success Stories" />
      <TestimonialStrip startIndex={4} title="Creator Transformations" />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Creator Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of creators and learn the skills you need to succeed
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