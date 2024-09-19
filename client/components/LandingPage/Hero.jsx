import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

const Hero = ({ title, description, ctaText, ctaLink }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 mt-48">
      <h1 className="h1 mb-6">
        Introducing{" "}
        <span className="bg-text-gradient text-transparent bg-clip-text">RAMresume</span>
      </h1>
      <p className="body-txt-md opacity-70 mb-8 max-w-2xl">
        An AI-enabled toolbox for Gabelli students to level up their career search
      </p>
      <Link href="/toolbox">
        <Button text="Try our Tool" />
      </Link>
    </div>
  );
};

export default Hero;
