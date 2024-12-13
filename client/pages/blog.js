import { useState } from "react";
import BlogsPreview from "@/components/BlogPage/BlogsPreview";
import PageContainer from "@/components/PageContainer";
import GradientContainer from "@/components/ui/GradientContainer";
import { client } from "@/src/sanity/lib/client";
import { IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import { urlFor } from "@/src/sanity/lib/image";
import Link from "next/link";

export default function Blog({ BlogPageData, blogPageContent }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique categories from blog posts
  const categories = ["All", ...new Set(BlogPageData.flatMap((post) => post.categories || []))];

  // Filter blog posts based on selected category and search term
  const filteredPosts = BlogPageData.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.categories?.includes(activeCategory);
    const matchesSearch =
      !searchTerm ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageContainer marginBottom={true}>
      <GradientContainer>
        <div className="flex flex-col">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center gap-6 py-24 px-6 md:px-10">
            <div className="max-w-3xl text-center">
              <h1 className="h4 md:h2 text-fordham-white mb-4">
                {blogPageContent?.title || "RamResume Blog"}
              </h1>
              <p className="body-txt-md md:body-txt-lg text-center font-light text-fordham-light-gray/60 max-w-2xl mx-auto">
                {blogPageContent?.description ||
                  "Your hub for all things job search and professional growth. Discover insights, tips, and strategies to advance your career."}
              </p>
            </div>

            {/* Search Bar */}
            <div className="w-full max-w-2xl mt-4">
              <div className="relative">
                <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-fordham-light-gray/60" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 px-12 rounded-full bg-fordham-white/5 text-fordham-white placeholder:text-fordham-light-gray/60 focus:outline-none focus:ring-2 focus:ring-fordham-brown/50"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors
                    ${
                      category === activeCategory
                        ? "bg-fordham-brown text-fordham-white"
                        : "bg-fordham-white/5 text-fordham-light-gray/60 hover:bg-fordham-white/10 hover:text-fordham-white"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <div className="w-full px-4 md:px-0">
            {/* Results Count */}
            {/* <div className="mb-8 text-fordham-light-gray/60">
              {activeCategory !== "All" && (
                <span className="text-fordham-white">{activeCategory}: </span>
              )}
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
            </div> */}

            {/* Featured Post */}
            {filteredPosts.length > 0 && !searchTerm && activeCategory === "All" && (
              <div className="mb-16">
                <h2 className="h4 text-fordham-white mb-6">Featured Post</h2>
                <div className="featured-post">
                  {/* You'll need to create a FeaturedBlogCard component */}
                  <FeaturedBlogCard {...filteredPosts[0]} />
                </div>
              </div>
            )}

            {/* Blog Grid */}
            <BlogsPreview
              BlogPageData={filteredPosts}
              activeCategory={activeCategory}
              searchTerm={searchTerm}
            />
          </div>
        </div>
      </GradientContainer>
    </PageContainer>
  );
}

// Create a new FeaturedBlogCard component
const FeaturedBlogCard = (post) => {
  return (
    <div className="group relative overflow-hidden rounded-[24px] bg-fordham-white/5 hover:bg-fordham-white/10 transition-colors">
      <div className="flex flex-col md:flex-row gap-8 p-8">
        {post.mainImage && (
          <div className="md:w-1/2">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              width={600}
              height={400}
              className="rounded-[16px] object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h3 className="h4 text-fordham-white mb-4 transition-colors">{post.title}</h3>
          <p className="text-fordham-light-gray/60 mb-6 line-clamp-3">{post.body}</p>
          <div className="flex items-center gap-4">
            {post.author?.image && (
              <Image
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <div>
              <p className="text-fordham-white">{post.author?.name}</p>
              <p className="text-sm text-fordham-light-gray/60">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <Link
            href={`${post.slug.current}`}
            className="ml-auto px-6 py-2 rounded-full bg-fordham-white/10 hover:bg-fordham-white/20 text-fordham-white transition-colors"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const [BlogPageData, blogPageContent] = await Promise.all([
    client.fetch(`*[_type == "blog"] | order(publishedAt desc) {
      title,
      "body": array::join(string::split(pt::text(body), "")[0..200], "") + "...",
      slug,
      mainImage,
      publishedAt,
      "author": author->{name, image},
      "categories": categories[]->title
    }`),
    client.fetch(`*[_type == "blogPage"][0]`),
  ]);

  return {
    props: {
      BlogPageData: BlogPageData || [],
      blogPageContent: blogPageContent || {},
    },
    revalidate: 30,
  };
}
