const toolboxStep1FormData = {
  placeholderText:
    "Please paste the full job description here so we can analyze its required skills. To ensure accuracy, include sections detailing roles, responsibilities, and qualifications. Exclude sections like 'About Us/Company,' salary/benefits, and diversity statements, as they typically don't mention hard skills. Only English job descriptions, please.",
};

export default function ToolboxStep1({ handleSubmit, jobDescription, setJobDescription, loading }) {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="h4">Paste a job description below...</h4>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            className="w-full p-6 rounded overflow-scroll"
            rows="10"
            placeholder={toolboxStep1FormData.placeholderText}
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
    </div>
  );
}
