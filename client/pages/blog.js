import BlogsPreview from "@/components/BlogPage/BlogsPreview";
import { client } from "@/src/sanity/lib/client";

export default function Blog({ BlogPageData }) {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center bg-neutral relative w-full border-primary pt-36">
      <h1 className="h1 text-secondary">Blogs</h1>

      <BlogsPreview BlogPageData={BlogPageData} />
    </div>
  );
}

export async function getStaticProps() {
  const BlogPageData = await client.fetch("*[_type == 'blog']");

  return {
    props: {
      BlogPageData,
    },
    revalidate: 30, // Revalidate every 30 seconds
  };
}
