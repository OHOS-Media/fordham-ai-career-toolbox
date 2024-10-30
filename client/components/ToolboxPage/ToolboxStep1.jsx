import { useApi } from "@/hooks/useApi";
import ToolboxForm from "./ToolboxForm";

const toolboxStep1FormData = {
  title: "Paste a job description below...",
  placeholderText:
    "Please paste the full job description here so we can analyze its required skills. To ensure accuracy, include sections detailing roles, responsibilities, and qualifications. Exclude sections like 'About Us/Company,' salary/benefits, and diversity statements, as they typically don't mention hard skills. Only English job descriptions, please.",
  loadingTxt: "Extracting keywords...",
};

// This renders Step 1 of the Toolbox which takes in a job description from the user,
// and queries the server for the suggested resume keywords
export default function ToolboxStep1({
  jobDescription,
  setJobDescription,
  setKeywords,
  incrementStep,
}) {
  const { request, loading } = useApi();

  // Query the server using the given job description,
  // and set the keyword state with the response,
  // or console.log if theres a error
  const handleSubmit = async (e) => {
    e.preventDefault();

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
  };

  return (
    <ToolboxForm
      formData={toolboxStep1FormData}
      handleSubmit={handleSubmit}
      value={jobDescription}
      onChange={(e) => setJobDescription(e.target.value)}
      loading={loading}
    />
  );
}
