import BlogsPreview from "@/components/BlogPage/BlogsPreview";
import PageContainer from "@/components/PageContainer";
import GradientContainer from "@/components/ui/GradientContainer";
import { client } from "@/src/sanity/lib/client";

export default function Blog({ BlogPageData, blogPageContent }) {
  return (
    <PageContainer marginBottom={true}>
      <GradientContainer>
        <div className="flex flex-col">
          <div className="w-full flex flex-col items-center gap-2 py-20 px-10">
            <h1 className="h4 md:h3 text-fordham-white">
              {blogPageContent?.title || "Ram Resume blog"}
            </h1>
            <p className="body-txt-md text-center font-light text-fordham-light-gray/60">
              {blogPageContent?.description ||
                "Your hub for all things job search and professional growth."}
            </p>
          </div>

          <BlogsPreview BlogPageData={BlogPageData} />
        </div>
      </GradientContainer>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const [BlogPageData, blogPageContent] = await Promise.all([
    client.fetch(`*[_type == 'blog']{
      title,
      "body": array::join(string::split(pt::text(body), "")[0..200], "") + "...",
      slug,
      mainImage
    }`),
    client.fetch(`*[_type == "blogPage"][0]`),
  ]);

  return {
    props: {
      BlogPageData,
      blogPageContent,
    },
    revalidate: 30,
  };
}
