import { useRouter } from "next/router";
import { client } from "@/src/sanity/lib/client";
import BlogDetailPage from "@/components/BlogPage/BlogDetailPage";

export default function BlogPost({ blog, relatedPosts }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-neutral items-center w-full py-36">
      <h1 className="h1 text-secondary">Blogs</h1>
      <BlogDetailPage blog={blog} relatedPosts={relatedPosts} />
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const paths = await client.fetch(`*[_type == "blog" && defined(slug.current)].slug.current`);

    return {
      paths: paths.map((slug) => ({ params: { slug: slug.split("/").pop() } })),
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return { paths: [], fallback: "blocking" };
  }
}

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    const blog = await client.fetch(
      `*[_type == "blog" && slug.current == $slug][0]{
          title,
          body,
          mainImage,
          "author": author->{name, image, bio},
          publishedAt,
          slug
        }`,
      { slug: `/blog/${slug}` }
    );

    if (!blog) {
      return { notFound: true };
    }

    // Fetch related posts
    const relatedPosts = await client.fetch(
      `*[_type == "blog" && slug.current != $slug] | order(publishedAt desc)[0...3]{
          _id,
          title,
          body,
          slug,
          mainImage
        }`,
      { slug: `/blog/${slug}` }
    );

    return {
      props: {
        blog,
        relatedPosts,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return { notFound: true };
  }
}
