import React from "react";

const LoginPopup = ({ onClose }) => {
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Login</h2>
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Login with Google
        </button>
        <button
          onClick={onClose}
          className="mt-4 text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
