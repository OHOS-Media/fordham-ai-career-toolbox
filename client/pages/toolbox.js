import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";
import ToolboxStep1 from "@/components/ToolboxPage/ToolboxStep1";
import ToolboxStep2 from "@/components/ToolboxPage/ToolboxStep2";
import ToolboxStep3 from "@/components/ToolboxPage/ToolboxStep3";
import ToolboxStep4 from "@/components/ToolboxPage/ToolBoxStep4/ToolboxStep4.jsx";
import ToolboxEnd from "@/components/ToolboxPage/ToolboxEnd";
import ProgressBar from "@/components/ToolboxPage/ProgressBar/ProgressBar";
import BackButton from "@/components/ToolboxPage/BackButton";
import ExitConfirmationModal from "@/components/ToolboxPage/ExitConfirmationModal";
import PageContainer from "@/components/PageContainer";

export default function Toolbox() {
  const { error } = useApi();
  const [toolboxActive, setToolboxActive] = useState(true);
  const [activeStep, setActiveStep] = useState(1);
  const [exitModalActive, setExitModalActive] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [resume, setResume] = useState("");
  const [bulletPoints, setBulletPoints] = useState([]);

  // If the user is done with the Toolbox, make sure the Exit Modal is close, and
  // progress to the Toolbox End component
  const handleDone = () => {
    setExitModalActive(false);
    setActiveStep(5);
  };

  // If the rendered step isn't the first one, go to the previous step
  const decrementStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
    return;
  };

  // If the rendered step isn't the last one, go to the next step
  const incrementStep = () => {
    if (activeStep < 5) {
      setActiveStep(activeStep + 1);
    }
    return;
  };

  // If the active step is the last one, set the Toolbox to inactive to render
  // the Toolbox End component
  useEffect(() => {
    if (activeStep > 4) {
      setToolboxActive(false);
    }
  }, [activeStep]);

  // Render the Toolbox step, based on the activeStep state
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
    <PageContainer>
      {/* If the Exit Modal is active, darken and blur the background */}
      {exitModalActive && (
        <div className="min-w-full top-0 left-0 bg-secondary/30 absolute z-20 backdrop-filter backdrop-blur-[0.8px]"></div>
      )}

      <div className="min-h-screen mx-auto gap-10">
        {/* If theres an error, display the error message */}
        // TODO: Add error handling

        {/* If the Toolbox is active, render it */}
        {toolboxActive ? (
          <div className="flex flex-col items-center gap-12">
            <h1 className="h1 text-secondary">Toolbox</h1>

            <ProgressBar activeStep={activeStep} />

            <div
              className={`${activeStep === 4 ? "bg-fordham-black" : "bg-white/50 shadow-md"} flex flex-col items-center justify-between relative p-5 rounded-md h-full mx-5 lg:mx-0 w-full`}
            >
              {/* If the current Toolbox Step isn't the first one, display a button for the user to return to the previous step */}
              {activeStep > 1 && (
                <div className="absolute -left-14" onClick={decrementStep}>
                  <BackButton />
                </div>
              )}

              {exitModalActive && (
                <div className="flex justify-center">
                  <ExitConfirmationModal
                    setExitModalActive={setExitModalActive}
                    handleDone={handleDone}
                  />
                </div>
              )}

              <div className="w-full h-full">{renderStep()}</div>
            </div>
          </div>
        ) : (
          <ToolboxEnd />
        )}
      </div>
    </PageContainer>
  );
}
