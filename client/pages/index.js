import AnimatedBackground from "@/components/AnimatedBackground";
import DemoSection from "@/components/LandingPage/DemoSection/DemoSection";
import FAQSection from "@/components/LandingPage/FAQSection/FAQSection";
import Hero from "@/components/LandingPage/Hero";
import FeaturesSection from "@/components/LandingPage/FeaturesSection/FeaturesSection";
import { client } from "@/src/sanity/lib/client";

export default function Home({ HomePageData }) {
  return (
    <div className="flex flex-col items-center justify-center gap-24 overflow-x-hidden">
      <AnimatedBackground />
      <Hero {...HomePageData.hero} />
      <FeaturesSection {...HomePageData.features} />
      <DemoSection {...HomePageData.demo} />
      <FAQSection />
    </div>
  );
}

export async function getStaticProps() {
  const HomePageData = await client.fetch("*[_type == 'homepage'][0]");

  return {
    props: {
      HomePageData,
    },
    revalidate: 30, // Revalidate every 30 seconds
  };
}
