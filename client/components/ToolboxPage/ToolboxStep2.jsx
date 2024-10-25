import { useState } from "react";
import Button from "../Button";
import Keyword from "./Keyword";

// This renders Step 2 of the Toolbox which displays the AI reccomended resume keywords
export default function ToolboxStep2({ keywords, setExitModalActive, incrementStep }) {
  const [showAll, setShowAll] = useState(false);
  const initialKeywordCount = 10; 

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const openExitModal = () => {
    setExitModalActive(true);
  };

  return (
    <div className="flex flex-col gap-2 justify-between h-full">
      <div className="flex flex-col">
        <h4 className="body-txt-lg-bold text-secondary">Get Keywords</h4>

        <div className="flex flex-wrap gap-2 mt-4">
          {/* If showAll is true, render all of the keywords, otherwise only display the initial count */}
          {keywords.slice(0, showAll ? keywords.length : initialKeywordCount).map((word, idx) => (
            <Keyword word={word} key={idx} />
          ))}

          <button
            className="bg-neutral p-[.5em] rounded body-txt hover:text-primary"
            onClick={handleShowAll}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-fit sm:w-full justify-between">
        <Button text={"I'm done"} onClick={openExitModal} className="w-fit" />
        <Button text={"Continue to bullet points..."} onClick={incrementStep} />
      </div>
    </div>
  );
}
