import { useState, useEffect } from "react";

export default function GradientContainer({ children }) {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // If it is a mobile screen, don't display the Gradient
  if (isMobileScreen) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full">
      {/* Gradient Background */}
      <img
        src="/assets/Gradient.png"
        alt="Gradient background"
        className="absolute w-[700px] h-[700px] top-[-20%] left-[45%] pointer-events-none rotate-90"
        aria-hidden="true"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
