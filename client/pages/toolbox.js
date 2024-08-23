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
      const data = await request("/api/extractKeywords", {
        method: "POST",
        body: JSON.stringify({ jobDescription }),
      });
      setKeywords(data.keywords);
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
        return <ToolboxStep1 />;
      case 2:
        return <ToolboxStep2 />;
      case 3:
        return <ToolboxStep3 />;
      case 4:
        return <ToolboxStep4 />;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col gap-10 items-center justify-center bg-neutral">
        {toolboxActive ? (
          <div className="flex flex-col gap-10 w-3/5">
            <ProgressBar activeStep={activeStep} />

            <div className="flex flex-col items-center justify-between bg-grey p-8 rounded-md h-96 w-full">
              <div className="w-full">{renderStep()}</div>

              <div className="flex w-full justify-between">
                <Button text={"prev"} onClick={decrementStep} />
                <Button text={"next"} onClick={incrementStep} />
              </div>
            </div>
          </div>
        ) : (
          <ToolboxEnd />
        )}

        {/* <div className="bg-tertiary p-8 rounded shadow-md w-96">
          <h1 className="text-2xl mb-4">Keyword Extractor</h1>

          {error && <ErrorAlert errorMessage={error} />}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <textarea
                className="w-full p-2 border border-secondary rounded"
                rows="5"
                placeholder="Enter job description..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              ></textarea>
            </div>
            <button
              className="w-full bg-primary text-neutral p-2 rounded"
              type="submit"
              disabled={loading}
            >
              {loading ? "Extracting..." : "Extract Keywords"}
            </button>
          </form>
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
