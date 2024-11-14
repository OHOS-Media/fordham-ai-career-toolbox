import { useState } from "react";
import { useApi } from "@/hooks/useApi";

const PasswordEntry = ({ onPasswordVerified }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { request, loading } = useApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await request("/api/verify-password", {
        method: "POST",
        body: JSON.stringify({ password }),
      });
      onPasswordVerified();
    } catch (error) {
      setError("Incorrect password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Site Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Enter"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordEntry;
