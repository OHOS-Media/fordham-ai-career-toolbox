import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/src/sanity/lib/image";
import { IconArrowRight } from '@tabler/icons-react';




const getPreviewText = (body) => {
  if (typeof body === "string") return body;
  if (Array.isArray(body)) {
    return (
      body
        .find((block) => block._type === "block")
        ?.children.find((child) => child._type === "span")?.text || "No preview available"
    );
  }
  return "No preview available";
};

const BlogCard = ({ title, body, slug, mainImage }) => (
  
    <div className="rounded-lg overflow-hidden flex flex-col h-full transition-all duration-300">
      <div className="w-full h-60 md:h-48 relative">
        {mainImage ? (
          <Image
            src={urlFor(mainImage).url()}
            alt={mainImage.alt || title}
            fill
            className="object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
            <span className="text-gray-400 text-4xl">🖼️</span>
          </div>
        )}
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-500 mb-4 text-sm sm:text-base flex-grow line-clamp-3">
          {getPreviewText(body)}
        </p>
        <Link href={slug.current} passHref>
          <span className="text-white text-sm mt-auto inline-block cursor-pointer flex gap-2">Read more
          <IconArrowRight stroke={2} />
          </span>
        </Link>
      </div>
    </div>
  
);

export default BlogCard;

