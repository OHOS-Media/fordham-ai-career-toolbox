export default function AnimatedBackground() {
  return (
    <div id="background">
      <div className="orb-cont">
        <div className="orange orange-1 orb"></div>
        <div className="orange orange-2 orb"></div>
        <div className="blue blue-1 orb"></div>
        <div className="blue blue-2 orb"></div>
        <div className="red red-1 orb"></div>
        <div className="red red-2 orb"></div>
      </div>

      <svg>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" stitchTiles="stitch" />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
    </div>
  );
}
