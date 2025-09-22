"use client"
import { Check, Star, Shield } from "lucide-react"
import { trackCreatorCampPurchase } from "@/components/analytics/meta-pixel"

export function PricingSection() {

  return (
    <section id="pricing" className="pt-4 pb-20 md:pt-6 md:pb-32 bg-gradient-to-b from-background via-primary/5 to-background relative">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete All-in-One Package - Everything you need to build profitable automated channels
            </p>
          </div>

          {/* Why We Dominate Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Channel-in-a-Box <span className="text-primary">Beats Everything Else</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Complete 6-step framework: Follow the steps, plug in the AI tools, get publishing. No guesswork.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">6</div>
                  <div className="text-sm text-muted-foreground">AI-Powered Steps</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Plug-and-Play</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">€100K+</div>
                  <div className="text-sm text-muted-foreground">Framework Potential</div>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="bg-muted p-1 rounded-lg flex">
              <button 
                id="monthly-toggle"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold transition-all duration-200 toggle-btn"
                onClick={() => {
                  const win = window as { showMonthly?: () => void };
                  win.showMonthly?.();
                }}
              >
                Monthly
              </button>
              <button 
                id="yearly-toggle"
                className="px-6 py-3 bg-transparent text-muted-foreground rounded-md font-semibold transition-all duration-200 toggle-btn"
                onClick={() => {
                  const win = window as { showYearly?: () => void };
                  win.showYearly?.();
                }}
              >
                Yearly - Save $564
              </button>
            </div>
          </div>

          {/* Inline JavaScript for Toggle (After LaunchPass loads) */}
          <script dangerouslySetInnerHTML={{
            __html: `
              function showMonthly() {
                // Update card content
                document.getElementById('price-amount').textContent = '$5';
                document.getElementById('price-period').textContent = '/month';
                document.getElementById('billing-info').innerHTML = 'Billed monthly<br /><span class="bg-destructive/20 text-destructive border border-destructive/30 px-2 py-1 rounded-md font-bold text-xs animate-pulse inline-block mt-1">⚠️ Price returns to $50/month soon!</span>';
                document.getElementById('popular-badge').style.display = 'none';
                document.getElementById('yearly-savings').style.display = 'none';
                
                // Show monthly button, hide yearly button
                document.getElementById('monthly-payment-button').style.display = 'block';
                document.getElementById('yearly-payment-button').style.display = 'none';
                
                // Update toggle buttons
                document.getElementById('monthly-toggle').className = 'px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold transition-all duration-200 toggle-btn';
                document.getElementById('yearly-toggle').className = 'px-6 py-3 bg-transparent text-muted-foreground rounded-md font-semibold transition-all duration-200 toggle-btn';
              }
              
              function showYearly() {
                // Update card content
                document.getElementById('price-amount').textContent = '$36';
                document.getElementById('price-period').textContent = '/year';
                document.getElementById('billing-info').innerHTML = '<span class="line-through text-muted-foreground/60">$50/month</span> <span class="text-accent font-semibold">Discounted to $36/year</span>';
                document.getElementById('popular-badge').style.display = 'block';
                document.getElementById('yearly-savings').style.display = 'block';
                
                // Show yearly button, hide monthly button
                document.getElementById('yearly-payment-button').style.display = 'block';
                document.getElementById('monthly-payment-button').style.display = 'none';
                
                // Update toggle buttons
                document.getElementById('yearly-toggle').className = 'px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold transition-all duration-200 toggle-btn';
                document.getElementById('monthly-toggle').className = 'px-6 py-3 bg-transparent text-muted-foreground rounded-md font-semibold transition-all duration-200 toggle-btn';
              }
              
              // Make functions available globally
              window.showMonthly = showMonthly;
              window.showYearly = showYearly;
              
              // Initialize - show monthly by default
              setTimeout(() => {
                showMonthly();
              }, 100);
            `
          }} />

          {/* Pricing Cards Container */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto items-start">
            
            {/* Dynamic Pricing Card */}
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                <div className="relative bg-card border rounded-2xl p-8 w-full">
                  {/* Popular Badge - Hidden by default, shown for yearly */}
                  <div id="popular-badge" className="absolute -top-4 left-1/2 -translate-x-1/2" style={{display: 'none'}}>
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      🔥 Popular
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">Elite Network</h3>
                    <div className="mb-2">
                      <span className="text-lg line-through text-muted-foreground/60">$50</span>
                      <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-semibold ml-2">90% OFF</span>
                    </div>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span id="price-amount" className="text-4xl font-bold">$5</span>
                      <span id="price-period" className="text-muted-foreground">/month</span>
                    </div>
                    <p id="billing-info" className="text-sm text-muted-foreground">
                      Billed monthly
                      <br />
                      <span className="bg-destructive/20 text-destructive border border-destructive/30 px-2 py-1 rounded-md font-bold text-xs animate-pulse inline-block mt-1">
                        ⚠️ Price returns to $50/month soon!
                      </span>
                    </p>
                    <p id="yearly-savings" className="text-sm text-accent font-semibold mt-2" style={{display: 'none'}}>Save $564</p>
                  </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm flex-1 font-semibold">✅ EVERYTHING YOU NEED TO START</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">Complete Faceless Channel System</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">Faceless Niche List and Case Studies</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">AI Content Creation Mastery</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">Professional Video Editing Tutorials</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">Advanced Automation Workflows</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">Multi-Channel Scaling Strategies</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">Revenue Optimization System</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">🎁 BONUS: AI Training & Templates ($497 value)</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">🎁 BONUS: Done-for-You Templates ($497 value)</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">🎁 BONUS: Elite Network Access ($997/year value)</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">🎁 BONUS: Channel Reviews ($497 value)</span>
                </div>
              </div>

              {/* Monthly Payment Button */}
              <button 
                id="monthly-payment-button"
                style={{
                  fontFamily: 'sans-serif',
                  margin: '0 auto',
                  outline: 'none',
                  display: 'block',
                  height: '45px',
                  width: '226px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #FF6B35 0%, #FF4500 100%)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
                  fontSize: '18px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                className="lp6362577318051840"
                onClick={() => trackCreatorCampPurchase()}
              >
                Join Now!
              </button>

              {/* Yearly Payment Button */}
              <button 
                id="yearly-payment-button"
                style={{
                  fontFamily: 'sans-serif',
                  margin: '0 auto',
                  outline: 'none',
                  display: 'none',
                  height: '45px',
                  width: '226px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #FF6B35 0%, #FF4500 100%)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
                  fontSize: '18px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                className="lp6602918050791424"
                onClick={() => trackCreatorCampPurchase()}
              >
                Join Now!
              </button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                30-day money-back guarantee if you don&apos;t see value after completing the modules.
              </p>
            </div>
          </div>

            </div>

            {/* VIP Inner Circle - Side by Side */}
            <div className="flex justify-center">
            <div className="relative bg-card border border-accent shadow-2xl shadow-accent/20 rounded-2xl p-8 w-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  👑 VIP Coaching
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">VIP Inner Circle</h3>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-accent">Application Only</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Premium 1-on-1 coaching program
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm flex-1 font-semibold">✅ EVERYTHING YOU NEED TO START</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">Complete Faceless Channel System</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">Faceless Niche List and Case Studies</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">AI Content Creation Mastery</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">Professional Video Editing Tutorials</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">Advanced Automation Workflows</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">Multi-Channel Scaling Strategies</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">Revenue Optimization System</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">🎁 BONUS: AI Training & Templates ($497 value)</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">🎁 BONUS: Done-for-You Templates ($497 value)</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">🎁 BONUS: Elite Network Access ($997/year value)</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-sm flex-1">🎁 BONUS: Channel Reviews ($497 value)</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm flex-1 font-semibold">🎁 YEARLY BONUS: 1-on-1 Coaching Calls</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm flex-1 font-semibold">🎁 YEARLY BONUS: Founder-Led Marketing & Personal Brand Strategy</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm flex-1 font-semibold">🎁 YEARLY BONUS: After Effects Masterclass (motion design & animations)</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm flex-1 font-semibold">🎁 YEARLY BONUS: Exclusive High End Vault (premium templates & assets)</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm flex-1 font-semibold">🎁 YEARLY BONUS: VIP Elite Community Access</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm flex-1 font-semibold">🎁 YEARLY BONUS: Priority Support & Reviews</span>
                </div>
              </div>

              <a 
                href="https://forms.gle/GdQpiHqi28FH1CeY7" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button 
                  style={{
                    fontFamily: 'sans-serif',
                    margin: '0 auto',
                    outline: 'none',
                    display: 'block',
                    height: '45px',
                    width: '226px',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, #16C79A 0%, #0F9D7E 100%)',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(22, 199, 154, 0.3)',
                    fontSize: '18px',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => trackCreatorCampPurchase()}
                >
                  Apply for VIP Access
                </button>
              </a>

              <p className="text-xs text-center text-muted-foreground mt-4">
                30-day money-back guarantee if you don&apos;t see value after completing the modules.
              </p>
            </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Compare Plans & Features
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4 bg-primary/5">Monthly</th>
                    <th className="text-center p-4">Yearly (Save $564)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Price</td>
                    <td className="text-center p-4 bg-primary/5">$5/month</td>
                    <td className="text-center p-4">$36/year (was $50/month)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">All Course Content</td>
                    <td className="text-center p-4 bg-primary/5">✅</td>
                    <td className="text-center p-4">✅</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Community Access</td>
                    <td className="text-center p-4 bg-primary/5">✅</td>
                    <td className="text-center p-4">✅</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">AI Tools & Templates</td>
                    <td className="text-center p-4 bg-primary/5">✅</td>
                    <td className="text-center p-4">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Money-Back Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                30-day money-back guarantee if you don&apos;t see value after completing the modules.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Channel-in-a-Box Framework</h4>
              <p className="text-sm text-muted-foreground">
                Complete 6-step system with AI tools for every step included.
              </p>
            </div>
          </div>

          {/* FAQ CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Questions? Check our{" "}
              <button
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary hover:underline"
              >
                FAQ section
              </button>
              {" "}or email support@aiytacourse.com
            </p>
            <p className="text-sm text-muted-foreground">
              🔒 Secure checkout powered by LaunchPass. All major cards accepted.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              *Guarantee requires completion of Module 1 within 30 days. Full terms at checkout.
            </p>
            <p className="text-xs text-muted-foreground mt-4 max-w-3xl mx-auto">
              **Educational disclaimer: This course teaches AI tool integration for YouTube Automation channels. Success depends on individual effort, tool implementation, and market factors. Results are not guaranteed and will vary based on your execution and dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}