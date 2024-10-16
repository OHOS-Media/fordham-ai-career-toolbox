import BlogPreview from "@/components/BlogPage/BlogPreviewCard";

export default function BlogsPreview({ BlogPageData }) {
  if (BlogPageData) {
    return (
      <div className="flex flex-row flex-wrap justify-center gap-6 pb-32 lg:mx-28 xl:w-3/4 3xl:w-1/2">
        {BlogPageData.map((blog, idx) => (
          <BlogPreview {...blog} key={idx} />
        ))}
      </div>
    );
  } else {
    return <p>No Blog Posts found...</p>;
  }
}
