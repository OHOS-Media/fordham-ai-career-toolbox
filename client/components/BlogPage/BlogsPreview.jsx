import BlogCard from "../LandingPage/BlogSection/BlogCard";

const BlogsPreview = ({ BlogPageData }) => {
  if (!BlogPageData || BlogPageData.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-fordham-light-gray/60">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {BlogPageData.map((blog, index) => (
        <BlogCard
          key={blog.slug.current}
          {...blog}
          priority={index < 3}
        />
      ))}
    </div>
  );
};

export default BlogsPreview;
