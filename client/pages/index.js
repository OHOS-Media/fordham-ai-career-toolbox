import AnimatedBackground from "@/components/AnimatedBackground";
import DemoSection from "@/components/LandingPage/DemoSection/DemoSection";
import Hero from "@/components/LandingPage/Hero";
import FeaturesSection from "@/components/LandingPage/FeaturesSection/FeaturesSection";
import { client } from "@/src/sanity/lib/client";
import BlogSection from "@/components/LandingPage/BlogSection/BlogSection";

export default function Home({ HomePageData }) {
  return (
    <div className="flex flex-col items-center justify-center gap-24 overflow-x-hidden">
      <AnimatedBackground />
      <Hero {...HomePageData.hero} />
      <FeaturesSection {...HomePageData.features} />
      <DemoSection {...HomePageData.demo} />
      <BlogSection blogs={HomePageData.blogs} />
    </div>
  );
}

export async function getStaticProps() {
  const HomePageData = await client.fetch(`
    *[_type == 'homepage'][0]{
      ...,
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
    revalidate: 30,
  };
}
