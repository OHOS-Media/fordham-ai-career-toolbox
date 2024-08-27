import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";
import ErrorAlert from "@/components/ErrorAlert";
import Layout from "@/components/Layout";
import ToolboxStep1 from "@/components/ToolboxPage/ToolboxStep1";
import ToolboxStep2 from "@/components/ToolboxPage/ToolboxStep2";
import ToolboxStep3 from "@/components/ToolboxPage/ToolboxStep3";
import ToolboxStep4 from "@/components/ToolboxPage/ToolboxStep4";
import ToolboxEnd from "@/components/ToolboxPage/ToolboxEnd";
import Button from "@/components/Button";
import ProgressBar from "@/components/ToolboxPage/ProgressBar/ProgressBar";

export default function Toolbox() {
  const [jobDescription, setJobDescription] = useState("");
  const [keywords, setKeywords] = useState([]);
  const { request, loading, error } = useApi();
  const [toolboxActive, setToolboxActive] = useState(true);
  const [activeStep, setActiveStep] = useState(1);

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
        return <ToolboxStep2 keywords={keywords} />;
      case 3:
        return <ToolboxStep3 />;
      case 4:
        return <ToolboxStep4 />;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col gap-10 items-center justify-center bg-neutral">
        {error && <ErrorAlert errorMessage={error} />}
        {toolboxActive ? (
          <div className="flex flex-col items-center gap-10 w-3/5 h-[40rem] mt-10">
            <ProgressBar activeStep={activeStep} />

            <div className="flex flex-col items-center justify-between bg-grey p-8 rounded-md h-full w-5/6">
              <div className="w-full">{renderStep()}</div>
            </div>
          </div>
        ) : (
          <ToolboxEnd />
        )}

        {/* <div className="bg-tertiary p-8 rounded shadow-md w-96">
          <h1 className="text-2xl mb-4">Keyword Extractor</h1>

          {keywords?.length > 0 && (
            <div className="mt-4">
              <h2 className="text-xl">Extracted Keywords:</h2>
              <ul className="mt-2 bg-neutral p-2 rounded list-disc list-inside">
                {keywords.map((keyword, index) => (
                  <li key={index}>{keyword}</li>
                ))}
              </ul>
            </div>
          )}
        </div> */}
      </div>
    </Layout>
  );
}
