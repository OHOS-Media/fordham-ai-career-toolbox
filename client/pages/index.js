import AnimatedBackground from "@/components/AnimatedBackground";
import AIPoweredSection from "@/components/LandingPage/AIPoweredSection/AIPoweredSection";
import DemoSection from "@/components/LandingPage/DemoSection/DemoSection";
import FAQSection from "@/components/LandingPage/FAQSection/FAQSection";
import Hero from "@/components/LandingPage/Hero";
import StatisticsSection from "@/components/LandingPage/StatisticsSection/StatisticsSection";
import StepsSection from "@/components/LandingPage/StepsSection/StepsSection";
import Layout from "@/components/Layout";
import { client } from "@/src/sanity/lib/client";

export default function Home({pageData}) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-24">
        <AnimatedBackground />
        <Hero {...pageData.hero} />
        <StepsSection />
        <AIPoweredSection />
        <DemoSection />
        <StatisticsSection />
        <FAQSection />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await client.fetch(`*[_type == "homepage"][0]`);

  return {
    props: {
      pageData,
    },
    revalidate: 30, // Revalidate every 30 seconds
  };
}
