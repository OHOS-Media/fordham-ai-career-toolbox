import React, { useEffect } from "react";

const LoginPopup = ({ onClose, onLoginSuccess, onLoginFailure }) => {
  // This useEffect hook listens for messages from the popup window.
  useEffect(() => {
    const handleMessage = (event) => {
      // If the message is "success", call onLoginSuccess and onClose.
      if (event.data === "success") {
        onLoginSuccess();
        onClose();
      } else if (typeof event.data === "string" && event.data.startsWith("{")) {
        try {
          const data = JSON.parse(event.data);

          // If the message is a JSON object with a status of "failure", call onLoginFailure and onClose.
          if (data.status === "failure") {
            // Send the message to the onLoginFailure function and close the popup.
            onLoginFailure(data.message);
            onClose();
          }
        } catch (error) {
          console.error("Error parsing message:", error);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onClose, onLoginSuccess, onLoginFailure]);

  const handleGoogleLogin = () => {
    const width = 500;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`;

    window.open(url, "googleLoginPopup", `width=${width},height=${height},left=${left},top=${top}`);
  };

  return (
    <div className="fixed inset-0 bg-secondary bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-neutral p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Login</h2>
        <button
          onClick={handleGoogleLogin}
          className="bg-primary text-neutral px-4 py-2 rounded hover:bg-error-state transition-colors"
        >
          Login with Google
        </button>
        <button onClick={onClose} className="mt-4 secondary hover:text-primary">
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
