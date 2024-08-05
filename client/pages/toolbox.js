import { useState } from "react";
import { useApi } from "@/hooks/useApi";
import ErrorAlert from "@/components/ErrorAlert";
import Layout from "@/components/Layout";

export default function Toolbox() {
  const [jobDescription, setJobDescription] = useState("");
  const [keywords, setKeywords] = useState([]);
  const { request, loading, error } = useApi();

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

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral">
        <div className="bg-tertiary p-8 rounded shadow-md w-96">
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
        </div>
      </div>
    </Layout>
  );
}
