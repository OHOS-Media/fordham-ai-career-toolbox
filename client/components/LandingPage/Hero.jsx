import Link from "next/link";
import React from "react";
import Button from "@/components/Button";
import { IconArrowRight } from "@tabler/icons-react";

const Hero = ({ title, gradientTitle, description, ctaText }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 z-10">
      <h1 className="h1 mb-6 text-secondary">
        {title}{" "}
        <span className="bg-text-gradient text-transparent bg-clip-text">{gradientTitle}</span>
      </h1>

      <p className="body-txt-md opacity-70 mb-8 max-w-2xl">{description}</p>

      <Link href="/toolbox">
        <Button variant="primary" text={ctaText} icon={<IconArrowRight className="w-5 h-5" />} />
      </Link>
    </div>
  );
};

export default Hero;
