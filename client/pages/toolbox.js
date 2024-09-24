import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";

import ErrorAlert from "@/components/ErrorAlert";
import ToolboxStep1 from "@/components/ToolboxPage/ToolboxStep1";
import ToolboxStep2 from "@/components/ToolboxPage/ToolboxStep2";
import ToolboxStep3 from "@/components/ToolboxPage/ToolboxStep3";
import ToolboxStep4 from "@/components/ToolboxPage/ToolBoxStep4/ToolboxStep4.jsx";
import ToolboxEnd from "@/components/ToolboxPage/ToolboxEnd";
import ProgressBar from "@/components/ToolboxPage/ProgressBar/ProgressBar";
import BackButton from "@/components/ToolboxPage/BackButton";
import ExitConfirmationModal from "@/components/ToolboxPage/ExitConfirmationModal";

export default function Toolbox() {
  const { error } = useApi();
  const [toolboxActive, setToolboxActive] = useState(true);
  const [activeStep, setActiveStep] = useState(1);
  const [exitModalActive, setExitModalActive] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [resume, setResume] = useState("");
  const [bulletPoints, setBulletPoints] = useState([]);

  const handleDone = () => {
    setExitModalActive(false);
    setActiveStep(5);
  };

  const decrementStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
    return;
  };

  const incrementStep = () => {
    if (activeStep < 5) {
      setActiveStep(activeStep + 1);
    }
    return;
  };

  useEffect(() => {
    if (activeStep > 4) {
      setToolboxActive(false);
    }
  }, [activeStep]);

  const renderStep = () => {
    switch (activeStep) {
      case 1:
        return (
          <ToolboxStep1
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            setKeywords={setKeywords}
            incrementStep={incrementStep}
          />
        );
      case 2:
        return (
          <ToolboxStep2
            keywords={keywords}
            setExitModalActive={setExitModalActive}
            incrementStep={incrementStep}
          />
        );
      case 3:
        return (
          <ToolboxStep3
            resume={resume}
            setResume={setResume}
            jobDescription={jobDescription}
            incrementStep={incrementStep}
            setBulletPoints={setBulletPoints}
          />
        );
      case 4:
        return <ToolboxStep4 bulletPoints={bulletPoints} incrementStep={incrementStep} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center bg-neutral relative w-full border-primary">
      {error && <ErrorAlert errorMessage={error} />}

      {exitModalActive && (
        <>
          <ExitConfirmationModal setExitModalActive={setExitModalActive} handleDone={handleDone} />{" "}
          <div className="min-h-screen h-[200vh] min-w-full bg-secondary/30 absolute z-20 backdrop-filter backdrop-blur-[0.8px]"></div>
        </>
      )}

      {toolboxActive ? (
        <div className="flex flex-col items-center gap-12 w-3/5 mt-40 mb-36 h-[38rem] max-h-[38rem]">
          <ProgressBar activeStep={activeStep} />

          <div
            className={`${activeStep === 4 ? "bg-neutral" : "bg-white/50"} flex flex-col items-center justify-between relative p-5 rounded-md h-full w-5/6`}
          >
            {activeStep > 1 && (
              <div className="absolute -left-16" onClick={decrementStep}>
                <BackButton />
              </div>
            )}

            <div className="w-full h-full">{renderStep()}</div>
          </div>
        </div>
      ) : (
        <ToolboxEnd />
      )}
    </div>
  );
}
