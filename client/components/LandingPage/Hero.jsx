import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

const Hero = ({ title, description, ctaText, ctaLink }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-neutral text-center px-4 mt-32">
      <h1 className="h1 mb-6">{title}</h1>
      <p className="body-txt-md opacity-70 mb-8 max-w-2xl">{description}</p>
      <Link href={ctaLink}>
        <Button text={ctaText} />
      </Link>
    </div>
  );
};

export default Hero;
