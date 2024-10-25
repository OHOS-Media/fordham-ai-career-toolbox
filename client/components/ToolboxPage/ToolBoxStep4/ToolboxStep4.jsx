import BulletItem from "./BulletItem";
import Button from "../../Button";

// This renders Step 4 of the Toolbox which displays the AI reccomended resume bullet points
export default function ToolboxStep4({ bulletPoints, incrementStep }) {
  return (
    <div className="flex flex-col gap-4 justify-between h-full">
      <div className="h-full">
        <h4 className="body-txt-lg-bold text-secondary px-4">Get Bullet Points</h4>

        <div className="flex flex-col gap-4 w-fit mt-4 h-full relative">
          {/* Map through bulletPoints array to render each job's bullet points */}
          {bulletPoints.map((job, jobIndex) =>
            // For each job, map through its key-value pairs to render BulletItem components
            Object.entries(job).map(([jobTitle, bulletPoint], idx) => (
              <BulletItem
                jobTitle={jobTitle}
                bulletPoint={bulletPoint}
                jobIndex={jobIndex}
                key={idx}
              />
            ))
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-fit sm:w-full justify-between z-30">
        <Button text={"I'm done"} onClick={incrementStep} className="w-fit" />
        <Button
          text={"Save Keywords & Bullet Points"}
          onClick={() => {
            incrementStep();
            alert("This feature is not yet implemented.");
          }}
        />
      </div>
    </div>
  );
}
