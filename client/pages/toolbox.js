import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";
import ErrorAlert from "@/components/ErrorAlert";
import Layout from "@/components/Layout";
import ToolboxStep1 from "@/components/ToolboxPage/ToolboxStep1";
import ToolboxStep2 from "@/components/ToolboxPage/ToolboxStep2";
import ToolboxStep3 from "@/components/ToolboxPage/ToolboxStep3";
import ToolboxStep4 from "@/components/ToolboxPage/ToolboxStep4";
import ToolboxEnd from "@/components/ToolboxPage/ToolboxEnd";
import ProgressBar from "@/components/ToolboxPage/ProgressBar/ProgressBar";
import BackButton from "@/components/ToolboxPage/BackButton";
import ExitConfirmationModal from "@/components/ToolboxPage/ExitConfirmationModal";

export default function Toolbox() {
  const [jobDescription, setJobDescription] = useState("");
  const [keywords, setKeywords] = useState([]);
  const { request, loading, error } = useApi();
  const [toolboxActive, setToolboxActive] = useState(true);
  const [activeStep, setActiveStep] = useState(1);
  const [exitModalActive, setExitModalActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await request("/api/extract-keywords", {
        method: "POST",
        body: JSON.stringify({ jobDescription }),
      });

      setKeywords(data.keywords);
      console.log("Keywords:", data.keywords);

      incrementStep();
    } catch (error) {
      console.error("Failed to extract keywords", error);
    }
  };

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
            handleSubmit={handleSubmit}
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            loading={loading}
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
        return <ToolboxStep3 />;
      case 4:
        return <ToolboxStep4 />;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col gap-10 items-center justify-center bg-neutral relative">
        {error && <ErrorAlert errorMessage={error} />}

        {exitModalActive && (
          <>
            <ExitConfirmationModal
              setExitModalActive={setExitModalActive}
              handleDone={handleDone}
            />{" "}
            <div className="min-h-screen min-w-full bg-secondary/30 absolute z-20 backdrop-filter backdrop-blur-[0.8px]"></div>
          </>
        )}

        {toolboxActive ? (
          <div className="flex flex-col items-center gap-10 w-3/5 h-[40rem] max-h-[40rem] mt-10">
            <ProgressBar activeStep={activeStep} />

            <div className="flex flex-col items-center justify-between relative bg-grey p-8 rounded-md h-full w-5/6">
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
    </Layout>
  );
}
