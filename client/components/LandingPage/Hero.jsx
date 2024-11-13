import Link from "next/link";
import React from "react";
import Button from "@/components/Button";
import { IconArrowRight } from "@tabler/icons-react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Hero = ({ title, gradientTitle, description, ctaText }) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4 z-10 space-y-6">
      {/* SVG Background */}
      {/* <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'url("/assets/Gradient.svg") no-repeat center center',
          backgroundSize: "cover",
        }}
      ></div> */}

      {/* Content */}
      <TextGenerateEffect
        words={`An AI-enabled career enablement experience`}
        className="font-extrabold text-4xl md:text-5xl lg:text-6xl"
        duration={0.4}
      />
      <p className="text-fordham-white body-txt-md opacity-70 mb-8 max-w-2xl z-10">{description}</p>

      <Link href="/toolbox">
        <Button variant="primary" text={ctaText} icon={<IconArrowRight className="w-6 h-6" />} />
      </Link>
    </div>
  );
};

export default Hero;
