import Link from "next/link";
import BlogCard from "./BlogCard";
import Button from "@/components/Button";

export default function BlogSection({ blogs }) {
  return (
    <section className="w-full">
      <h2 className="h3 font-bold text-center text-white mb-8 sm:mb-12">
        Featured blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-8 sm:mt-12">
        <Link href="/blog">
          <Button
            className="border-2 border-white bg-transparent text-white px-6 py-2 rounded hover:bg-white hover:text-black transition duration-300"
            text="See more blogs"
          />
        </Link>
      </div>
    </section>
  );
}
