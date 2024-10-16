import BlogPreview from "@/components/BlogPage/BlogPreviewCard";

export default function BlogsPreview({ BlogPageData }) {
  console.log(BlogPageData)
  if (BlogPageData) {
    return (
      <div className="flex flex-row flex-wrap justify-center gap-6 pb-32 2xl:mx-20 3xl:w-3/4">
        {BlogPageData.map((blog, idx) => (
          <BlogPreview {...blog} key={idx} />
        ))}
      </div>
    );
  } else {
    return <p>No Blog Posts found...</p>;
  }
}
