import ToolboxForm from "./ToolboxForm";

const toolboxStep3FormData = {
  title: "Paste your resume",
  placeholderText:
    "Please paste the full resume here so we can analyze the skills and experience listed. To ensure accuracy, include sections detailing your work history, job titles, responsibilities, and education. Exclude sections like personal statements, hobbies, or references, as they typically don't highlight specific skills. Only resumes in English, please.",
};

export default function ToolboxStep3({ handleSubmitResume, resume, setResume, loading }) {
  return (
    <ToolboxForm
      formData={toolboxStep3FormData}
      handleSubmit={handleSubmitResume}
      value={resume}
      onChange={(e) => setResume(e.target.value)}
      loading={loading}
    />
  );
}
