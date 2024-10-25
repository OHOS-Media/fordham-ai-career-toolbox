import { client } from "@/src/sanity/lib/client";

import PageContainer from "@/components/PageContainer";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/LandingPage/Hero";
import FeaturesSection from "@/components/LandingPage/FeaturesSection/FeaturesSection";
import DemoSection from "@/components/LandingPage/DemoSection/DemoSection";
import BlogSection from "@/components/LandingPage/BlogSection/BlogSection";
import TestimonialsSection from "@/components/LandingPage/TestimonialsSection/TestimonialsSection";

export default function Home({ HomePageData }) {
  return (
    <PageContainer limitedWidth={false}>
      <div className="flex flex-col items-center justify-center gap-24 overflow-x-hidden">
        <AnimatedBackground />
        <Hero {...HomePageData.hero} />
        <FeaturesSection {...HomePageData.features} />
        <DemoSection {...HomePageData.demo} />
        <BlogSection blogs={HomePageData.blogs} />
        <TestimonialsSection testimonials={HomePageData.testimonials} />
      </div>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const HomePageData = await client.fetch(`
    *[_type == 'homepage'][0]{
      hero,
      features,
      demo,
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
