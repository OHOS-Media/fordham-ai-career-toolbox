// pages/index.js
import { useState } from "react";

export default function Home() {
  const [jobDescription, setJobDescription] = useState("");
  const [keywords, setKeywords] = useState([]);

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
    setKeywords(data.keywords);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl mb-4">Keyword Extractor</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="5"
              placeholder="Enter job description..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            className="w-full bg-blue-500 text-white p-2 rounded"
            type="submit"
          >
            Extract Keywords
          </button>
        </form>
        {keywords.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl">Extracted Keywords:</h2>
            <ul className="mt-2 bg-gray-200 p-2 rounded list-disc list-inside">
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
