import StepCard from "./StepCard";
import Arrow from "./Arrow";

const stepSectionData = {
  title: "Get a Polished Resume in 4 Easy Steps",
  step1: {
    number: "1",
    text: "Copy and paste a desired job’s description",
  },
  step2: {
    number: "2",
    text: "Get AI recommended keywords",
  },
  step3: {
    number: "3",
    text: "Copy and paste your resume",
  },
  step4: {
    number: "4",
    text: "Get resume bullet point suggestions and add them to your resume!",
  },
};

const StepsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-4/5 py-16 px-10 rounded-lg">
      <h2 className="h2">{stepSectionData.title}</h2>

      <div className="flex justify-center items-center mt-10">
        <StepCard number={stepSectionData.step1.number} text={stepSectionData.step1.text} />
        <Arrow margin={"mx-4"} />
        <StepCard number={stepSectionData.step2.number} text={stepSectionData.step2.text} />
        <Arrow margin={"mx-4"} />
        <StepCard number={stepSectionData.step3.number} text={stepSectionData.step3.text} />
        <Arrow margin={"mx-4"} />
        <StepCard number={stepSectionData.step4.number} text={stepSectionData.step4.text} />
      </div>
    </div>
  );
};

export default StepsSection;
