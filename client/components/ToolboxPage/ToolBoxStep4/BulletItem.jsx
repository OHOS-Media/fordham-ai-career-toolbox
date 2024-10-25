import { useState, useRef, useEffect } from "react";

// Component to display bullet points for each job, which can be expanded/collapsed
const BulletItem = ({ jobTitle, bulletPoint, jobIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const groupRef = useRef(null);
  const bulletRef = useRef(null);

  // Side effect to adjust styles based on the `isOpen` state
  useEffect(() => {
    if (isOpen) {
      bulletRef.current.style.maxHeight = "100%"; // Expand the bullet list fully
      bulletRef.current.style.opacity = "100%"; // Set opacity to visible
      groupRef.current.style.position = "absolute"; // Position absolutely when open
      groupRef.current.style.top = "0"; // Align to the top
    } else {
      bulletRef.current.style.maxHeight = "0px"; // Collapse the bullet list
      bulletRef.current.style.opacity = "0"; // Set opacity to invisible
      groupRef.current.style.position = "relative"; // Return to normal positioning
    }
  }, [isOpen]);

  return (
    <div
      key={jobIndex}
      ref={groupRef}
      className={`flex flex-col w-full ${isOpen ? "z-30 bg-neutral shadow-md" : "z-10"}`}
    >
      <h3
        onClick={() => setIsOpen(!isOpen)}
        className={`z-20 body-txt-md-bold py-2 px-4 ${isOpen ? "text-secondary bg-white/50" : ""} hover:text-primary hover:bg-white/50 hover:cursor-pointer border-b border-dark-grey/30`}
      >
        {jobTitle}
      </h3>

      <ul
        className={`flex flex-col list-disc list-inside gap-1 px-4 z-10 ${isOpen ? "py-4 bg-white/50" : ""}`}
        ref={bulletRef}
      >
        {bulletPoint.map((point, pointIndex) => (
          <li key={pointIndex} className="body-txt-rg">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletItem;
