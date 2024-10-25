import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

const Hero = ({ title, gradientTitle, description, ctaText }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 mt-32 md:mt-48 z-10">
      <h1 className="h1 mb-6 text-secondary">
        {title}{" "}
        <span className="bg-text-gradient text-transparent bg-clip-text">{gradientTitle}</span>
      </h1>
      <p className="body-txt-md opacity-70 mb-8 max-w-2xl">{description}</p>
      <Link href="/toolbox">
        <Button text={ctaText} />
      </Link>
    </div>
  );
};

export default Hero;
