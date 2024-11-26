"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/src/sanity/lib/image";

import HighlightItem from "./HighlightItem";

const slideVariants = {
  offscreen: (direction) => ({
    x: direction === "left" ? -200 : 200,
    opacity: 0,
  }),
  onscreen: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const DemoBlock = ({ title, description, highlights, demoImage, imageLeft }) => {
  return (
    <article
      className={`flex flex-col w-full ${imageLeft ? "lg:flex-row-reverse" : "lg:flex-row "} items-center lg:justify-between gap-14 px-4 md:px-0 text-white z-10`}
    >
      <div className="flex flex-col w-full lg:w-1/2 gap-8">
        <h2 className="h3 text-center md:text-left leading-tight">{title}</h2>

        <p className="body-txt">{description}</p>

        <div className="flex flex-col gap-2">
          {highlights.map((highlight, idx) => (
            <HighlightItem {...highlight} key={idx} />
          ))}
        </div>
      </div>

      <motion.div
        custom={imageLeft ? "left" : "right"}
        variants={slideVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        className="w-fit"
      >
        <Image src={urlFor(demoImage).url()} alt="Demo Screenshot" width={550} height={550} />
      </motion.div>
    </article>
  );
};

export default DemoBlock;
