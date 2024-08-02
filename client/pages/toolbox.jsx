import { useState } from "react";
import ErrorAlert from "@/components/ErrorAlert";

export default function Toolbox() {
  const [jobDescription, setJobDescription] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [errorAlertActive, setErrorAlertActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/extractKeywords", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobDescription }),
    });

    const data = await response.json();

    // If the data is returned with an error,
    // set the Error Alert to true/active
    if (data.error) {
      console.log(data.error);
      setErrorAlertActive(true);
      setErrorMessage(data.error);
    }

    setKeywords(data.keywords);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full min-h-screen">
      <div className="relative bg-tertiary p-8 rounded shadow-md w-96 h-1/3">
        <div className="flex justify-between items-center mb-4">
          <h4>Keyword Extractor</h4>
        </div>

        {/* If the Error Alert is active render it */}
        {errorAlertActive && (
          <ErrorAlert
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            errorAlertActive={errorAlertActive}
            setErrorAlertActive={setErrorAlertActive}
          />
        )}

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
          <button className="w-full bg-primary text-neutral p-2 rounded" type="submit">
            Extract Keywords
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
      </div>
    </div>
  );
}
