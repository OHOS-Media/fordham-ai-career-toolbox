import BlogCard from "../LandingPage/BlogSection/BlogCard";

export default function BlogsPreview({ BlogPageData }) {
  if (BlogPageData && BlogPageData.length > 0) {
    return (
      <section className="w-full container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-y-10">
          {BlogPageData.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      </section>
    );
  } else {
    return <p>No Blog Posts found...</p>;
  }
}
