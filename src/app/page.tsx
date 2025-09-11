import { HeroSection } from "@/components/sections/hero";
import { CredibilitySection } from "@/components/sections/credibility";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { TestimonialStrip } from "@/components/ui/testimonial-strip";
import { SaasToolsSection } from "@/components/sections/saas-tools";
// import { UrgencySection } from "@/components/sections/urgency";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CredibilitySection />
      
      <TestimonialStrip startIndex={0} title="Faceless YouTubers Are Banking!" />
      
      <ProblemSection />
      
      {/* Move AI Tools higher for better visibility */}
      <SaasToolsSection />
      
      <SolutionSection />
      
      {/* Complete Success System Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-primary">Automate</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get access to the complete automation system that&apos;s helped thousands build profitable faceless YouTube empires
            </p>
          </div>

          {/* Core Training */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">CORE TRAINING</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-accent mb-2">Faceless Channel Setup</h4>
                    <p className="text-muted-foreground text-sm mb-3">Launch profitable YouTube channels without showing your face</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• High-Profit Niche Selection & Market Research</li>
                      <li>• Anonymous Channel Creation & Optimization</li>
                      <li>• Privacy Protection & Security Protocols</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-accent mb-2">AI Content Creation</h4>
                    <p className="text-muted-foreground text-sm mb-3">Automate video creation using cutting-edge AI</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AI Script Generation for Trending Topics</li>
                      <li>• Automated Video Assembly & Editing</li>
                      <li>• Voice Synthesis & Custom Narration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-accent mb-2">Automation Workflows</h4>
                    <p className="text-muted-foreground text-sm mb-3">Complete hands-off channel management</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Automated Content Scheduling & Publishing</li>
                      <li>• Smart Thumbnail Generation & A/B Testing</li>
                      <li>• Performance Analytics & Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-accent mb-2">Scaling & Outsourcing</h4>
                    <p className="text-muted-foreground text-sm mb-3">Build a team and scale to multiple channels</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Virtual Team Building & Management</li>
                      <li>• Multi-Channel Empire Strategies</li>
                      <li>• Advanced Revenue Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Access */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">COMMUNITY ACCESS</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-accent mb-2">General Chat & Wins Feed</h4>
                    <p className="text-muted-foreground text-sm">Connect with 100+ successful creators</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-accent mb-2">Profile Reviews</h4>
                    <p className="text-muted-foreground text-sm">Get expert feedback on your content</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">⭐</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-primary mb-2">Elite Chat Access</h4>
                    <p className="text-muted-foreground text-sm">Earned access for proven success members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resources & Tools */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">RESOURCES & TOOLS</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-accent mb-2">Creator Toolkit</h4>
                    <p className="text-muted-foreground text-sm mb-3">Done-for-you templates and scripts</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 500+ viral script templates</li>
                      <li>• Professional editing presets</li>
                      <li>• Brand deal email templates</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">🤖</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-primary mb-2">AI Tools Suite</h4>
                    <p className="text-muted-foreground text-sm mb-3">Automate content creation without burnout ($1,694/mo value)</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <div>
                          <strong className="text-foreground">InsightSync Analytics:</strong> Shows approximately how much money your channel could be making
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <div>
                          <strong className="text-foreground">AI Script Writer & Analyzer:</strong> Generate viral scripts + analyze for maximum impact
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <div>
                          <strong className="text-foreground">Viral Prediction:</strong> Analyze viral potential before you record
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8"
            >
              Get Everything Now →
            </a>
          </div>
        </div>
      </section>
      
      {/* <UrgencySection /> */}
      
      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Journey to <span className="text-primary">YouTube Automation</span> Starts Here
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don&apos;t let another day pass being camera shy. Join thousands who built profitable faceless channels.
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8"
          >
            Start Automating Today
          </a>
        </div>
      </section>
    </div>
  );
}
