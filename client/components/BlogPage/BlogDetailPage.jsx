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
    <article>
      <h1 className="h2 text-fordham-white mb-8">{blog.title}</h1>

      {blog.mainImage && (
        <div className="mb-10">
          <Image
            src={urlFor(blog.mainImage).url()}
            alt={blog.mainImage.alt || blog.title}
            width={1200}
            height={700}
            className="w-full h-[16rem] md:h-[32rem] object-cover rounded-[16px]"
          />
        </div>
      )}

      <div className="flex items-center mb-10 bg-fordham-white/5 p-6 rounded-[16px]">
        {blog.author?.image && (
          <Image
            src={urlFor(blog.author.image).url()}
            alt={blog.author.name}
            width={64}
            height={64}
            className="rounded-full mr-4"
          />
        )}
        <div>
          <p className="text-fordham-white font-semibold text-lg mb-1">{blog.author?.name}</p>
          {blog.publishedAt && (
            <p className="text-fordham-light-gray/60">
              {new Date(blog.publishedAt).toLocaleDateString()} • {blog.readTime || "4 min read"}
            </p>
          )}
        </div>
      </div>

      <div className="mb-12 text-fordham-light-gray/80 prose prose-invert max-w-none">
        <StyledPortableText value={blog.body} />
      </div>

      {blog.author && (
        <div className="mt-12 bg-fordham-white/5 p-8 rounded-[16px]">
          <div className="flex items-start gap-6">
            <Image
              src={urlFor(blog.author.image).url()}
              alt={blog.author.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <p className="text-fordham-white font-semibold text-xl mb-2">
                About {blog.author.name}
              </p>
              {blog.author.bio && (
                <p className="text-fordham-light-gray/60 leading-relaxed">{blog.author.bio}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {relatedPosts && relatedPosts.length > 0 && (
        <div className="mt-20">
          <h3 className="h4 text-fordham-white mb-8">What to read next</h3>
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
