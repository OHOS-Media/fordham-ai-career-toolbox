import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/src/sanity/lib/image";
import StyledPortableText from "../ui/StyledPortableText";
import BlogCard from "../LandingPage/BlogSection/BlogCard";

const BlogDetailPage = ({ blog, relatedPosts }) => {
  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <article className="max-w-5xl mx-auto px-4">
      <Link href="/blog" className="text-primary hover:underline mb-4 inline-block">
        &lt; Back
      </Link>
      <h2 className="text-2xl font-semibold mb-6 text-secondary">{blog.title}</h2>
      {blog.mainImage && (
        <div className="mb-8">
          <Image
            src={urlFor(blog.mainImage).url()}
            alt={blog.mainImage.alt || blog.title}
            width={1200}
            height={700}
            className="w-full h-[16rem] md:h-[32rem] object-cover"
          />
        </div>
      )}
      <div className="flex items-center mb-6">
        {blog.author?.image && (
          <Image
            src={urlFor(blog.author.image).url()}
            alt={blog.author.name}
            width={48}
            height={48}
            className="rounded-full mr-4"
          />
        )}
        <div>
          <p className="font-semibold">{blog.author?.name}</p>
          {blog.publishedAt && (
            <p className="text-sm text-gray-600">
              {new Date(blog.publishedAt).toLocaleDateString()} • {blog.readTime || "4 min read"}
            </p>
          )}
        </div>
      </div>
      <div className="mb-8 text-secondary">
        <StyledPortableText value={blog.body} />
      </div>
      <div className="border-t border-gray-300 pt-4 mt-8">
        <p className="text-sm text-gray-600">Tags: product design, culture</p>
      </div>
      {blog.author && (
        <div className="mt-12 flex items-center">
          <Image
            src={urlFor(blog.author.image).url()}
            alt={blog.author.name}
            width={64}
            height={64}
            className="rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">{blog.author.name}</p>
            {blog.author.bio && <p className="text-sm text-gray-600">{blog.author.bio}</p>}
          </div>
        </div>
      )}
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-secondary">What to read next</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <BlogCard key={post._id} {...post} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogDetailPage;
