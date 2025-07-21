import { HeroSection } from "@/components/sections/hero";
import { CredibilitySection } from "@/components/sections/credibility";
import { ProblemSection } from "@/components/sections/problem";
import { WarningSection } from "@/components/sections/warning";
import { SolutionSection } from "@/components/sections/solution";
import { SaasToolsSection } from "@/components/sections/saas-tools";
import { SocialProofSection } from "@/components/sections/social-proof";
import { CurriculumSection } from "@/components/sections/curriculum";
import { FAQSection } from "@/components/sections/faq";
import { UrgencySection } from "@/components/sections/urgency";
import { PricingSection } from "@/components/sections/pricing";
import { TestimonialStrip } from "@/components/ui/testimonial-strip";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CredibilitySection />
      
      <TestimonialStrip startIndex={0} title="Our Students Are Crushing It!" />
      
      <ProblemSection />
      <WarningSection />
      
      <TestimonialStrip startIndex={4} title="From Zero to Viral in Weeks" />
      
      <SolutionSection />
      <SaasToolsSection />
      <SocialProofSection />
      
      <TestimonialStrip startIndex={8} title="Life-Changing Results" />
      
      <CurriculumSection />
      
      <TestimonialStrip startIndex={12} title="Join Thousands of Success Stories" />
      
      <UrgencySection />
      <PricingSection />
      
      <TestimonialStrip startIndex={16} title="Don't Just Take Our Word For It" />
      
      <FAQSection />
    </main>
  );
}
