import Link from "next/link";
import BlogCard from "./BlogCard";

export default function BlogSection({ blogs }) {
  return (
    <section className="py-12 mb-12 sm:py-16 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-secondary mb-8 sm:mb-12">
          Featured Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/blog"
            className="text-primary hover:underline inline-block px-6 py-2 border border-primary rounded-full transition-colors duration-300 hover:bg-primary hover:text-white"
          >
            See more blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
