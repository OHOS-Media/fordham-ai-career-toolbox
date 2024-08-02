import React from "react";

const LoginPopup = ({ onClose }) => {
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`;
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
