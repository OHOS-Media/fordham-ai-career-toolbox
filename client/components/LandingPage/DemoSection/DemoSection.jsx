import Image from "next/image";
import DemoScreenshotPlaceholder from "@/public/assets/DemoScreenshotPlaceholder.svg";
import CheckboxLabel from "./CheckboxLabel";
import { urlFor } from "@/src/sanity/lib/image";

const DemoSection = ({ title, description, checkboxItems, demoImage }) => {
  console.log(urlFor(demoImage).url);

  return (
    <div className="flex flex-col px-4 md:flex-row gap-14 items-center md:gap-0 md:justify-evenly 2xl:justify-center 2xl:gap-20 w-full bg-primary text-white py-20 z-10">
      <div className="flex flex-col md:w-2/5 gap-6">
        <h2 className="h2 text-center md:text-left leading-tight">{title}</h2>
        <p className="body-txt mt-4">{description}</p>

        <div className="flex flex-col gap-4">
          {checkboxItems.map((boxTitle, idx) => (
            <CheckboxLabel text={boxTitle} key={idx} />
          ))}
        </div>
      </div>

      <div className="w-fit">
        <Image src={urlFor(demoImage).url()} alt="Demo Screenshot" width={400} height={400} />
      </div>
    </div>
  );
};

export default DemoSection;
