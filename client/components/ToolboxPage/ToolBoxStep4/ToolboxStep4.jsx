import BulletItem from "./BulletItem";
import Button from "../../Button";

export default function ToolboxStep4({ bulletPoints, incrementStep }) {
  return (
    <div className="flex flex-col gap-4 justify-between h-full">
      <div className="h-full">
        <h4 className="body-txt-lg-bold text-secondary px-4">Get Bullet Points</h4>

        <div className="flex flex-col gap-4 w-fit mt-4 h-full relative">
          {bulletPoints.map((job, jobIndex) =>
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
            alert("This feature is not yet implemented.");
          }}
        />
      </div>
    </div>
  );
}
