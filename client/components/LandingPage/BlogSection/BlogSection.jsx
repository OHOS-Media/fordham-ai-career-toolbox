import Link from "next/link";
import BlogCard from "./BlogCard";
import Button from "@/components/ui/Button";

export default function BlogSection({ blogs, title = "Featured blogs" }) {
  return (
    <section className="w-full">
      <h2 className="h5 md:h3 font-bold text-center text-white mb-6 md:mb-[60px]">{title}</h2>

      <div className="flex flex-row overflow-x-scroll md:grid md:grid-cols-3 gap-4 scrollbar-hidden w-full">
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
