import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";
import ToolboxStep1 from "@/components/ToolboxPage/ToolboxStep1";
import ToolboxStep2 from "@/components/ToolboxPage/ToolboxStep2";
import ToolboxStep3 from "@/components/ToolboxPage/ToolboxStep3";
import ToolboxStep4 from "@/components/ToolboxPage/ToolboxStep4";
import ToolboxEnd from "@/components/ToolboxPage/ToolboxEnd";
import ExitConfirmationModal from "@/components/ToolboxPage/ExitConfirmationModal";
import PageContainer from "@/components/PageContainer";
import { IconChevronLeft, IconFileText } from "@tabler/icons-react";
import { Sidebar } from "@/components/ToolboxPage/SideBar";
import Button from "@/components/ui/Button";
import MainToolbox from "@/components/ToolboxPage/MainToolbox";

export default function Toolbox() {
  const { request, loading } = useApi();
  const [toolboxActive, setToolboxActive] = useState(true);
  const [activeStep, setActiveStep] = useState(4);
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
  };

  const incrementStep = () => {
    if (activeStep < 5) {
      setActiveStep(activeStep + 1);
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (activeStep === 1) {
      try {
        const data = await request("/api/extract-keywords", {
          method: "POST",
          body: JSON.stringify({ jobDescription }),
        });
        setKeywords(data.keywords);
        incrementStep();
      } catch (error) {
        console.error("Failed to extract keywords", error);
      }
    } else if (activeStep === 3) {
      try {
        const data = await request("/api/resume", {
          method: "POST",
          body: JSON.stringify({ jobDescription, resume }),
        });
        setBulletPoints(data);
        incrementStep();
      } catch (error) {
        console.error("Failed to extract bullet points", error);
      }
    }
  };

  return (
    <PageContainer
      marginBottom={true}
      marginTop={true}
      limitedWidth={true}
      className="max-w-7xl flex flex-col gap-20"
    >
      <div className=" w-full flex flex-col items-center gap-2">
        <h1 className="h2 text-fordham-white">Toolbox</h1>
        <p className="body-txt-md text-center font-light text-fordham-light-gray/60 max-w-2xl">
          Follow the steps below to tailor your resume for the specific job application.
        </p>
      </div>
      {exitModalActive && (
        <div className="fixed inset-0 bg-fordham-black/30 backdrop-blur-sm z-40" />
      )}

      {toolboxActive ? (
        <div className="max-h-[830px] w-full flex flex-row gap-6">
          {/* Sidebar */}
          <Sidebar activeStep={activeStep} />

          {/* Main Toolbox */}
          <MainToolbox
            activeStep={activeStep}
            decrementStep={decrementStep}
            incrementStep={incrementStep}
            renderStep={renderStep}
            setExitModalActive={setExitModalActive}
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
