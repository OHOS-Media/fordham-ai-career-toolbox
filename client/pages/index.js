// pages/index.js
import { client } from "@/src/sanity/lib/client";
import PageContainer from "@/components/PageContainer";
import Hero from "@/components/LandingPage/Hero";
import FeaturesSection from "@/components/LandingPage/FeaturesSection/FeaturesSection";
import DemoSection from "@/components/LandingPage/DemoSection/DemoSection";
import BlogSection from "@/components/LandingPage/BlogSection/BlogSection";
import TestimonialsSection from "@/components/LandingPage/TestimonialsSection/TestimonialsSection";
import GradientContainer from "@/components/ui/GradientContainer";

export default function Home({ HomePageData }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[160px] mt-20">
      <GradientContainer>
        <div className="flex flex-col items-center justify-center gap-[160px]">
          <Hero {...HomePageData.hero} />
          <FeaturesSection {...HomePageData.features} />
        </div>
      </GradientContainer>

      <PageContainer limitedWidth={true} marginBottom={false}>
        <DemoSection {...HomePageData.demo} demoOverview={HomePageData.demoOverview} />
        <BlogSection blogs={HomePageData.blogs} />
        <TestimonialsSection testimonials={HomePageData.testimonials} />
      </PageContainer>
    </div>
  );
}

export async function getStaticProps() {
  const HomePageData = await client.fetch(`
    *[_type == 'homepage'][0]{
      hero,
      features,
      demoOverview,
      testimonials,
      "blogs": *[_type == 'blog' && featured == true] | order(publishedAt desc)[0...3]{
        title,
        "body": array::join(string::split(pt::text(body), "")[0..200], "") + "...",
        slug,
        mainImage
      }
    }
  `);

  return {
    props: {
      HomePageData,
    },
    revalidate: 10,
  };
}
