// pages/index.js
import { useState } from "react";
import ErrorAlert from "@/components/ErrorAlert";
import LoginPopup from "@/components/LoginPopup";

export default function Home() {
  const [jobDescription, setJobDescription] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [errorAlertActive, setErrorAlertActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

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

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Perform logout logic here
      setIsLoggedIn(false);
    } else {
      // Show login popup
      setShowLoginPopup(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative bg-tertiary p-8 rounded shadow-md w-96">
        {/* Show Login Popup*/}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl">Keyword Extractor</h1>
          <button
            onClick={handleLoginLogout}
            className={`px-4 py-2 rounded ${
              isLoggedIn ? "error-state" : "bg-primary"
            } text-neutral`}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
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
          <button
            className="w-full bg-primary text-neutral p-2 rounded"
            type="submit"
          >
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

      {/* Popup */}
      {showLoginPopup && (
        <LoginPopup onClose={() => setShowLoginPopup(false)} />
      )}
    </div>
  );
}
