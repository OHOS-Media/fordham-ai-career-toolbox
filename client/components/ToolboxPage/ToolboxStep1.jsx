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
export default function ToolboxStep1({ jobDescription, setJobDescription }) {
  const placeholder = `Please paste the full job description here so we can analyze its required skills.

To ensure accuracy, include sections detailing:
• Roles
• Responsibilities
• Qualifications

Exclude sections like:
• About Us/Company
• Salary/benefits
• Diversity statements

as they typically don't mention hard skills. Only English job descriptions, please.`;

  return (
    <div className="flex flex-col gap-4 h-full">
      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder={placeholder}
        className="w-full flex-1 bg-fordham-brown text-fordham-white rounded-[8px] placeholder:text-fordham-gray/60 focus:outline-none resize-none"
      />
    </div>
  );
}
