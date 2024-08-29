import { useApi } from "@/hooks/useApi";
import ToolboxForm from "./ToolboxForm";

const toolboxStep3FormData = {
  title: "Paste your resume",
  placeholderText:
    "Please paste the full resume here so we can analyze the skills and experience listed. To ensure accuracy, include sections detailing your work history, job titles, responsibilities, and education. Exclude sections like personal statements, hobbies, or references, as they typically don't highlight specific skills. Only resumes in English, please.",
};

export default function ToolboxStep3({
  resume,
  setResume,
  jobDescription,
  incrementStep,
  setBulletPoints,
}) {
  const { request, loading } = useApi();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Resume: ", resume);
    console.log("Job Description: ", jobDescription);

    try {
      const data = await request("/api/resume", {
        method: "POST",
        body: JSON.stringify({ jobDescription, resume }),
      });

      console.log("Bullet points", data);
      setBulletPoints(data);

      incrementStep();
    } catch (error) {
      console.error("Failed to extract bullet points", error);
    }
  };

  return (
    <ToolboxForm
      formData={toolboxStep3FormData}
      handleSubmit={handleSubmit}
      value={resume}
      onChange={(e) => setResume(e.target.value)}
      loading={loading}
    />
  );
}
