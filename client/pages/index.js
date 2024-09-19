import AnimatedBackground from "@/components/AnimatedBackground";
import DemoSection from "@/components/LandingPage/DemoSection/DemoSection";
import FAQSection from "@/components/LandingPage/FAQSection/FAQSection";
import Hero from "@/components/LandingPage/Hero";
import FeaturesSection from "@/components/LandingPage/FeaturesSection/FeaturesSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-24">
      <AnimatedBackground />
      <Hero />
      <FeaturesSection />
      <DemoSection />
      <FAQSection />
    </div>
  );
}
