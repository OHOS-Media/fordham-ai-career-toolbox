import { useState } from "react";
import { IconInfoCircle } from "@tabler/icons-react";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";
import { useToast } from "@/hooks/useToast";

// This renders Step 2 of the Toolbox which displays the AI reccomended resume keywords
export default function ToolboxStep2({ keywords }) {
  const { success } = useToast();
  const [showAll, setShowAll] = useState(false);
  const initialKeywordCount = 20;

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
    "System Design",
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
  ];

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    success("Copied!");
  }

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex gap-2">
        <IconInfoCircle className="w-5 text-fordham-gray/60" />
        <p className="body-txt text-fordham-gray/60">
          Key words can be copied by clicking on them.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        {keywords.slice(0, showAll ? keywords.length : initialKeywordCount).map((word, idx) => (
          <Button key={idx} variant="tertiary" text={word} onClick={copyToClipboard}></Button>
        ))}
        {keywords.length > initialKeywordCount && (
          <Button
            variant="secondary"
            text={`${showAll ? "Show less" : "Show more"}`}
            onClick={() => setShowAll(!showAll)}
          />
        )}
      </div>
    </div>
  );
}
