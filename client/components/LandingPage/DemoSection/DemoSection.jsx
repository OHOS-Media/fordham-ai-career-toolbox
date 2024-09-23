import Image from "next/image";
import DemoScreenshotPlaceholder from "@/public/assets/DemoScreenshotPlaceholder.svg";
import CheckboxLabel from "./CheckboxLabel";

const DemoSection = ({ title, description, checkboxItems, demoImage }) => {
  return (
    <div className="flex justify-evenly w-full bg-primary text-white py-20">
      <div className="flex flex-col w-2/5 gap-6">
        <h2 className="h2 leading-tight">{title}</h2>
        <p className="body-txt mt-4">{description}</p>

        <div className="flex flex-col gap-4">
          {checkboxItems.map((boxTitle, idx) => (
            <CheckboxLabel text={boxTitle} key={idx} />
          ))}
        </div>
      </div>

      <div className="w-fit">
        <Image src={DemoScreenshotPlaceholder} alt="Demo Screenshot" width={400} height={400} />
      </div>
    </div>
  );
};

export default DemoSection;
