import Button from "../Button";

const toolboxStep1FormData = {
  placeholderText:
    "Please paste the full job description here so we can analyze its required skills. To ensure accuracy, include sections detailing roles, responsibilities, and qualifications. Exclude sections like 'About Us/Company,' salary/benefits, and diversity statements, as they typically don't mention hard skills. Only English job descriptions, please.",
};

export default function ToolboxStep1({ handleSubmit, jobDescription, setJobDescription, loading }) {
  return (
    <div className="flex flex-col gap-4 h-full">
      <h4 className="h4">Paste a job description below...</h4>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full h-full justify-between"
      >
        <textarea
          className="w-full p-6 rounded overflow-scroll mb-4"
          rows="11"
          placeholder={toolboxStep1FormData.placeholderText}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        ></textarea>

        <Button type="submit" text={loading ? "Extracting..." : "Submit"} disabled={loading} />
      </form>
    </div>
  );
}
