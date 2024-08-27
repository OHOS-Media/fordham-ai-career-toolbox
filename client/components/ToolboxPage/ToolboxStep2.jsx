import { useState } from "react";
import Button from "../Button";
import Keyword from "./Keyword";

export default function ToolboxStep2({ keywords, handleDone, incrementStep }) {
  const [showAll, setShowAll] = useState(false);
  const initialKeywordCount = 10;

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex flex-col gap-4 justify-between h-full">
      <div className="flex flex-col gap-4">
        <h4 className="h4">Get Keywords</h4>

        <div className="flex flex-wrap gap-2">
          {keywords.slice(0, showAll ? keywords.length : initialKeywordCount).map((word, idx) => (
            <Keyword word={word} key={idx}>
              {word}
            </Keyword>
          ))}
          <button
            className="bg-neutral p-[.5em] rounded body-txt hover:text-primary"
            onClick={handleShowAll}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <Button text={"I'm done"} onClick={handleDone} />
        <Button text={"Continue to bullet points..."} onClick={incrementStep} />
      </div>
    </div>
  );
}
