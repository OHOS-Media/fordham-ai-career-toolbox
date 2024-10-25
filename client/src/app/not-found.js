import Link from "next/link";

import AnimatedBackground from "@/components/AnimatedBackground";
import "@/styles/globals.css";

export default function Custom404() {
  return (
    <div className="flex flex-col h-screen items-center justify-center overflow-x-hidden">
      <AnimatedBackground />
      <div className="flex flex-col items-center gap-4 z-10">
        <h1 className="h1 text-secondary">Sorry...</h1>
        <p className="body-txt-lg text-secondary text-center">
          The page you are looking for does not exist
        </p>
        <Link
          href="/"
          className="text-primary inline-block px-6 py-2 border border-primary rounded-full transition-colors duration-300 hover:bg-primary hover:text-white"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
