import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/src/sanity/lib/image";

const BlogCard = ({ title, body, slug, mainImage }) => (
  <div className="bg-white/20 rounded-lg overflow-hidden shadow-md flex flex-col h-full">
    <div className="w-full h-48 sm:h-56 md:h-64 lg:h-48 xl:h-56 relative">
      {mainImage ? (
        <Image
          src={urlFor(mainImage).url()}
          alt={mainImage.alt || title}
          fill
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <span className="text-gray-400 text-4xl">🖼️</span>
        </div>
      )}
    </div>
    <div className="p-4 sm:p-6 flex flex-col flex-grow">
      <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 text-sm sm:text-base flex-grow line-clamp-3">{body}</p>
      <Link href={slug.current} className="text-primary hover:underline text-sm mt-auto">
        Read more
      </Link>
    </div>
  </div>
);

export default BlogCard;
