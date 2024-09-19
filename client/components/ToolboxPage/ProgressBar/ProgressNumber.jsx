import Arrow from "./Arrow";

export default function ProgressNumber({ step, activeStep }) {
  const applyStyles = () => {
    if (activeStep === step.number) {
      return "border-2 border-primary bg-white/50 text-primary";
    }

    if (activeStep > step.number) {
      return "border-2 border-primary bg-primary text-neutral";
    }

    return "bg-white/50 text-primary";
  };

  return (
    <div className="flex flex-col gap-2 relative items-center w-full">
      <div className={`${applyStyles()} flex justify-center items-center w-14 h-14 rounded-full`}>
        <p className="body-txt-md-bold">{step.number}</p>
      </div>

      {step.number < 4 && (
        <div className="absolute top-5 -right-16">
          <Arrow step={step} activeStep={activeStep} />
        </div>
      )}

      <p className="body-txt text-secondary opacity-70">{step.description}</p>
    </div>
  );
}
