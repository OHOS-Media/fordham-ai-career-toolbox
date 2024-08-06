import StepCard from "./StepCard";
import Arrow from "./Arrow";

const stepSectionData = {
  title: "Get a Polished Resume in 3 Easy Steps",
  step1: {
    number: "1",
    text: "Upload your resume",
  },
  step2: {
    number: "2",
    text: "Copy and paste a desired job’s description",
  },
  step3: {
    number: "3",
    text: "Apply the AI suggested changes to your resume!",
  },
};

const StepsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-grey py-16 px-28 rounded-lg">
      <h1>{stepSectionData.title}</h1>

      <div className="flex justify-center mt-10">
        <StepCard number={stepSectionData.step1.number} text={stepSectionData.step1.text} />
        <Arrow margin={"mt-8 mx-4"} />
        <StepCard number={stepSectionData.step2.number} text={stepSectionData.step2.text} />
        <Arrow margin={"mt-8 mx-4"} />
        <StepCard number={stepSectionData.step3.number} text={stepSectionData.step3.text} />
      </div>
    </div>
  );
};

export default StepsSection;
