import Hero from "@/components/LandingPage/Hero";
import StepsSection from "@/components/LandingPage/StepsSection/StepsSection";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <StepsSection />
      </div>
    </Layout>
  );
}
