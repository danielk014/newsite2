import { HeroSection } from "@/components/sections/hero";
import { CredibilitySection } from "@/components/sections/credibility";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { TestimonialStrip } from "@/components/ui/testimonial-strip";
import { UrgencySection } from "@/components/sections/urgency";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CredibilitySection />
      
      <TestimonialStrip startIndex={0} title="Our Students Are Crushing It!" />
      
      <ProblemSection />
      <SolutionSection />
      
      <TestimonialStrip startIndex={4} title="From Zero to Viral in Weeks" />
      
      {/* Featured Benefits Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-primary">Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get access to the complete system that's helped thousands go viral
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a href="/course" className="group">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  Comprehensive Course
                </h3>
                <p className="text-muted-foreground">
                  6 modules covering everything from content creation to monetization
                </p>
              </div>
            </a>
            <a href="/testimonials" className="group">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  Proven Results
                </h3>
                <p className="text-muted-foreground">
                  10,000+ success stories from creators earning $10K-$200K/month
                </p>
              </div>
            </a>
            <a href="/pricing" className="group">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  Flexible Pricing
                </h3>
                <p className="text-muted-foreground">
                  Plans starting at $39/month with 30-day money-back guarantee
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <UrgencySection />
      
      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Journey to <span className="text-primary">Viral Success</span> Starts Here
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let another day pass wondering "what if". Join thousands who took action and changed their lives.
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
