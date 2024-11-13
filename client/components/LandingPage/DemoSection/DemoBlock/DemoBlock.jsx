import Image from "next/image";
import { urlFor } from "@/src/sanity/lib/image";

import HighlightItem from "./HighlightItem";

const DemoBlock = ({ title, description, highlights, demoImage, imageLeft }) => {
  return (
    <article
      className={`flex flex-col w-full ${imageLeft ? "lg:flex-row-reverse" : "lg:flex-row "} items-center lg:justify-between gap-14 px-4 text-white z-10`}
    >
      <div className="flex flex-col w-full lg:w-1/2 gap-8">
        <h2 className="h2 text-center md:text-left leading-tight">{title}</h2>

        <p className="body-txt">{description}</p>

        <div className="flex flex-col gap-2">
          {highlights.map((highlight, idx) => (
            <HighlightItem {...highlight} key={idx} />
          ))}
        </div>
      </div>

      <div className="w-fit">
        <Image src={urlFor(demoImage).url()} alt="Demo Screenshot" width={550} height={550} />
      </div>
    </article>
  );
};

export default DemoBlock;
