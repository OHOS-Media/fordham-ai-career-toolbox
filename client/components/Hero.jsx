import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral text-center px-4">
      <h1 className="text-5xl font-bold mb-6">Welcome to AI Career Toolbox</h1>
      <p className="text-xl mb-8 max-w-2xl">
        Empower your job search with AI-driven tools. Extract keywords from job descriptions,
        enhance your resume, and prepare for interviews with cutting-edge technology.
      </p>
      <Link href="/toolbox">
        <Button text="Get Started" />
      </Link>
    </div>
  );
};

export default Hero;
