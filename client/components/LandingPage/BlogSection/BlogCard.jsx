import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/src/sanity/lib/image";
import { IconArrowRight } from "@tabler/icons-react";

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
  <div className="flex flex-col h-full gap-4">
    <div className="w-full h-44 relative">
      <Image
        src={urlFor(mainImage).url()}
        alt={mainImage.alt || title}
        fill
        className="object-cover rounded-[16px]"
      />
    </div>
    <div className="flex flex-col flex-grow gap-2 px-2">
      <h3 className="text-md font-medium text-fordham-white truncate">{title}</h3>
      <p className="text-fordham-light-gray/60 text-sm flex-grow line-clamp-2">
        {getPreviewText(body)}
      </p>
      <Link href={slug.current} passHref>
        <span className="text-fordham-white text-base mt-auto cursor-pointer flex justify-start items-center gap-2">
          Read more
          <IconArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </div>
  </div>
);

export default BlogCard;
