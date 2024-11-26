import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";
import { IconArrowRight } from "@tabler/icons-react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = ({ title, gradientTitle, description, ctaText }) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center z-10 space-y-3 md:space-y-4">
      <div className="max-w-2xl flex flex-col items-center space-y-3 md:space-y-6 mb-3 md:mb-6">
        <TextGenerateEffect
          words={`${title}`}
          className="font-bold h4 md:h1 text-fordham-white"
          duration={0.4}
        />
        <p className="text-fordham-white body-txt-sm md:body-txt-md font-light text-center mb-4 md:mb-8 max-w-2xl z-10">
          <span className="bg-text-gradient text-transparent bg-clip-text">{gradientTitle}</span>{" "}
          {description}
        </p>
      </div>

      <Link href="/toolbox">
        <Button
          variant="primary"
          text={ctaText}
          icon={<IconArrowRight className="w-4 h-4 md:w-6 md:h-6" />}
        />
      </Link>
    </div>
  );
};

export default Hero;
