import BlogCard from "../LandingPage/BlogSection/BlogCard";

export default function BlogsPreview({ BlogPageData }) {
  if (BlogPageData) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-20 2xl:w-3/4 2xl:border border-tertiary 3xl:border-primary 3xl:w-3/5">
        {BlogPageData.map((blog, idx) => (
          <BlogCard {...blog} key={idx} />
        ))}
      </div>
    );
  } else {
    return <p>No Blog Posts found...</p>;
  }
}
