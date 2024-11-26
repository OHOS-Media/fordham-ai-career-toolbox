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
    <FlipGrid imageLeft={imageLeft}>
      <div className="flex flex-col w-full gap-8">
        <h2 className="h5 md:h3 text-left leading-tight">{title}</h2>

        <p className="body-txt-base">{description}</p>

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
        className="w-full"
      >
        <Image
          src={urlFor(demoImage).url()}
          alt="Demo Screenshot"
          width={550}
          height={550}
          className="w-full"
        />
      </motion.div>
    </FlipGrid>
  );
};

export default DemoBlock;

const FlipGrid = ({ children, imageLeft = false }) => {
  return (
    <div
      className={`
      grid
      grid-cols-1
      md:grid-cols-2
      gap-10
      sm:gap-8
      md:gap-16
      items-center
      w-full
    text-fordham-white
      ${imageLeft ? "md:[&>*:first-child]:order-last" : ""}
    `}
    >
      {children}
    </div>
  );
};
