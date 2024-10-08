import { useState, useRef, useEffect } from "react";

const BulletItem = ({ jobTitle, bulletPoint, jobIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const groupRef = useRef(null);
  const bulletRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bulletRef.current.style.maxHeight = "100%";
      bulletRef.current.style.opacity = "100%";
      groupRef.current.style.position = "absolute";
      groupRef.current.style.top = "0";
    } else {
      bulletRef.current.style.maxHeight = "0px";
      bulletRef.current.style.opacity = "0";
      groupRef.current.style.position = "relative";
    }
  }, [isOpen]);

  return (
    <div
      key={jobIndex}
      ref={groupRef}
      className={`flex flex-col w-full ${isOpen ? "z-30 bg-neutral" : "z-10"}`}
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
