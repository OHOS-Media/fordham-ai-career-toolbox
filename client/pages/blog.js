import BlogsPreview from "@/components/BlogPage/BlogsPreview";
import PageContainer from "@/components/PageContainer";
import GradientContainer from "@/components/ui/GradientContainer";
import { client } from "@/src/sanity/lib/client";

export default function Blog({ BlogPageData }) {
  return (
    <PageContainer>
      <GradientContainer>
        <div className="flex flex-col gap-20">
          <div className=" w-full flex flex-col items-center gap-2">
            <h1 className="h2 text-fordham-white">RamResume blog</h1>
            <p className="body-txt-md text-center font-light text-fordham-light-gray/60 max-w-2xl">
              Your hub for all things job search and professional growth.
            </p>
          </div>

          <BlogsPreview BlogPageData={BlogPageData} />
        </div>
      </GradientContainer>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const BlogPageData = await client.fetch(`
    *[_type == 'blog']{
      title,
      "body": array::join(string::split(pt::text(body), "")[0..200], "") + "...",
      slug,
      mainImage
    }
  `);
  console.log(BlogPageData);

  return {
    props: {
      BlogPageData,
    },
    revalidate: 30, // Revalidate every 30 seconds
  };
}
