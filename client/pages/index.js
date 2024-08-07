import AIPoweredSection from "@/components/LandingPage/AIPoweredSection/AIPoweredSection";
import DemoSection from "@/components/LandingPage/DemoSection/DemoSection";
import FAQSection from "@/components/LandingPage/FAQSection/FAQSection";
import Hero from "@/components/LandingPage/Hero";
import StatisticsSection from "@/components/LandingPage/StatisticsSection/StatisticsSection";
import StepsSection from "@/components/LandingPage/StepsSection/StepsSection";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-24">
        <Hero />
        <StepsSection />
        <AIPoweredSection />
        <DemoSection />
        <StatisticsSection />
        <FAQSection />
      </div>
    </Layout>
  );
}
