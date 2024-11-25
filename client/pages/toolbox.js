import { useState, useEffect } from "react";
import { useApi } from "@/hooks/useApi";
import PageContainer from "@/components/PageContainer";
import { Sidebar } from "@/components/ToolboxPage/SideBar";
import MainToolbox from "@/components/ToolboxPage/MainToolbox";
import ToolboxEnd from "@/components/ToolboxPage/ToolboxSteps/ToolboxEnd";
import { useToolboxSteps } from "@/components/ToolboxPage/ToolboxSteps/useToolboxSteps";

export default function Toolbox() {
  const { request, loading } = useApi();
  const [state, setState] = useState({
    toolboxActive: true,
    activeStep: 1,
    exitModalActive: false,
    jobDescription: "",
    keywords: [],
    resume: "",
    bulletPoints: [],
  });

  const {
    toolboxActive,
    activeStep,
    exitModalActive,
    jobDescription,
    keywords,
    resume,
    bulletPoints,
  } = state;

  const updateState = (updates) => setState((prev) => ({ ...prev, ...updates }));

  const handleDone = () => updateState({ exitModalActive: false, activeStep: 5 });

  const navigateStep = (direction) => {
    if (direction === "next" && activeStep < 5) {
      updateState({ activeStep: activeStep + 1 });
    } else if (direction === "prev" && activeStep > 1) {
      updateState({ activeStep: activeStep - 1 });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeStep === 1) {
        const data = await request("/api/extract-keywords", {
          method: "POST",
          body: JSON.stringify({ jobDescription }),
        });
        updateState({ keywords: data.keywords });
      } else if (activeStep === 3) {
        const data = await request("/api/resume", {
          method: "POST",
          body: JSON.stringify({ jobDescription, resume }),
        });
        updateState({ bulletPoints: data });
      }
      navigateStep("next");
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  useEffect(() => {
    if (activeStep > 4) updateState({ toolboxActive: false });
  }, [activeStep]);

  const { renderStep } = useToolboxSteps({
    state,
    updateState,
    navigateStep,
  });

  return (
    <PageContainer
      marginBottom={true}
      marginTop={true}
      limitedWidth={true}
      className="max-w-7xl flex flex-col gap-20"
    >
      <div className="w-full flex flex-col items-center gap-2">
        <h1 className="h2 text-fordham-white">Toolbox</h1>
        <p className="body-txt-md text-center font-light text-fordham-light-gray/60 max-w-2xl">
          Follow the steps below to tailor your resume for the specific job application.
        </p>
      </div>

      {exitModalActive && (
        <div className="fixed inset-0 bg-fordham-black/30 backdrop-blur-sm z-40" />
      )}

      {toolboxActive ? (
        <div className="h-[700px] w-full flex flex-row gap-6">
          <Sidebar activeStep={activeStep} />
          <MainToolbox
            activeStep={activeStep}
            decrementStep={() => navigateStep("prev")}
            incrementStep={() => navigateStep("next")}
            renderStep={renderStep}
            setExitModalActive={(value) => updateState({ exitModalActive: value })}
            handleDone={handleDone}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      ) : (
        <ToolboxEnd />
      )}
    </PageContainer>
  );
}
