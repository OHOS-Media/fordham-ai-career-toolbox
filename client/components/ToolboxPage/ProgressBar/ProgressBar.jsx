import ProgressNumber from "./ProgressNumber";

const toolboxStepsData = [
  { number: 1, description: "Paste a job description" },
  { number: 2, description: "Get keywords" },
  { number: 3, description: "Paste your resume" },
  { number: 4, description: "Get bullet points" },
];

export default function ProgressBar({ activeStep }) {
  return (
    <div className="flex">
      {toolboxStepsData.map((step) => (
        <ProgressNumber step={step} activeStep={activeStep} />
      ))}
    </div>
  );
}
