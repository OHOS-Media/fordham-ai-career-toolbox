import { useApi } from "@/hooks/useApi";
import ToolboxForm from "./ToolboxForm";

// This renders Step 1 of the Toolbox which takes in a resume from the user,
// and queries the server for the suggested resume bullet points
// ToolboxStep3.jsx
export default function ToolboxStep3({ resume, setResume }) {
  const placeholder = `Please paste the full resume here so we can analyze the skills and experience listed.

To ensure accuracy, include sections detailing:
• Work history
• Job titles
• Responsibilities
• Education

Exclude sections like:
• Personal statements
• Hobbies
• References

as they typically don't highlight specific skills. Only resumes in English, please.`;

  return (
    <div className="flex flex-col gap-4 h-full">
      <textarea
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        placeholder={placeholder}
        className="w-full flex-1 bg-fordham-brown text-fordham-white rounded-[8px] p-4 placeholder:text-fordham-gray/60 focus:outline-none resize-none"
      />
    </div>
  );
}
