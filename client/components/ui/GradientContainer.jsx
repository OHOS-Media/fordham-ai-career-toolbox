export default function GradientContainer({ children }) {
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
