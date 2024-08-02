// pages/index.js
import { useEffect, useState } from "react";
import ErrorAlert from "@/components/ErrorAlert";
import Nav from "@/components/Nav/Nav";
import LoginPopup from "@/components/LoginPopup";

export default function Home() {
  const [jobDescription, setJobDescription] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [errorAlertActive, setErrorAlertActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    // Check login status on component mount
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user`, {
        credentials: "include",
      });
      if (response.ok) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Failed to check login status:", error);
    }
  };

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

  const handleLoginLogout = async () => {
    if (isLoggedIn) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/logout`, {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Logout failed:", error);
        setErrorMessage("Logout failed. Please try again.");
        setErrorAlertActive(true);
      }
    } else {
      setShowLoginPopup(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginPopup(false);
  };

  const handleLoginFailure = (message) => {
    setErrorMessage(message || "Login failed. Please try again.");
    setErrorAlertActive(true);
    setShowLoginPopup(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Nav />
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

      {/* Popup */}
      {showLoginPopup && (
        <LoginPopup
          onClose={() => setShowLoginPopup(false)}
          onLoginSuccess={handleLoginSuccess}
          onLoginFailure={handleLoginFailure}
        />
      )}
    </div>
  );
}
