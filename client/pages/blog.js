import BlogsPreview from "@/components/BlogPage/BlogsPreview";
import PageContainer from "@/components/PageContainer";
import { client } from "@/src/sanity/lib/client";

export default function Blog({ BlogPageData }) {
  return (
    <PageContainer>
      <div className="min-h-screen flex flex-col gap-10 bg-neutral items-center w-full">
        <h1 className="h1 text-secondary">Blogs</h1>

        <BlogsPreview BlogPageData={BlogPageData} />
      </div>
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
