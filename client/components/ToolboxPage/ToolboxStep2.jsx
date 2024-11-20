import { useState } from "react";
import Button from "../ui/Button";
import Keyword from "./Keyword";

// This renders Step 2 of the Toolbox which displays the AI reccomended resume keywords
export default function ToolboxStep2({ keywords }) {
  const [showAll, setShowAll] = useState(false);
  const initialKeywordCount = 10;

  const mockKeywords = [
    "React.js",
    "TypeScript",
    "Node.js",
    "REST APIs",
    "Git",
    "AWS",
    "Agile Development",
    "CI/CD",
    "JavaScript",
    "Redux",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Unit Testing",
    "GraphQL",
    "Python",
    "SQL",
    "Data Structures",
    "Algorithms",
    "System Design"
  ];
  

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-wrap gap-2">
        {mockKeywords.slice(0, showAll ? keywords.length : initialKeywordCount).map((word, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 bg-fordham-white/5 text-fordham-white rounded-full body-txt"
          >
            {word}
          </span>
        ))}
        <button
          className="px-3 py-1.5 bg-fordham-white/5 text-fordham-gray/60 hover:text-fordham-white rounded-full body-txt transition-colors"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
