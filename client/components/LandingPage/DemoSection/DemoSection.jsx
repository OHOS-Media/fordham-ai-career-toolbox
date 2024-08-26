import Image from "next/image";
import DemoScreenshotPlaceholder from "@/public/assets/DemoScreenshotPlaceholder.svg";
import CheckboxLabel from "./CheckboxLabel";

const demoSectionData = {
  title: "Generate Powerful Bullet Points for your Resume",
  description:
    "Our bullet point generator tool takes the hassle out of crafting impactful resume bullet points. Simply input your job description and let our tool do the work for you.",
  checkBoxTitles: [
    "Save time and Effort",
    "Stand out from the competition",
    "Highlight your achievements",
  ],
};

const DemoSection = () => {
  return (
    <div className="flex justify-evenly w-full bg-tertiary py-20">
      <div className="flex flex-col w-2/5 gap-4">
        <h2 className="h2 text-center leading-tight">{demoSectionData.title}</h2>
        <p className="body-txt mt-4 mx-4">{demoSectionData.description}</p>

        <div className="flex flex-col gap-4 mx-4">
          {demoSectionData.checkBoxTitles.map((boxTitle, idx) => (
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
