import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { useApi } from "../hooks/useApi";
import ErrorAlert from "@/components/ErrorAlert";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { request } = useApi();

  const loadUser = useCallback(async () => {
    try {
      setLoading(true);
      const userData = await request("/api/user");
      setUser(userData);
    } catch (error) {
      console.error("Failed to fetch user", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const login = useCallback(() => {
    setLoading(true);
    setError(null);
    const width = 500;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`;
    window.open(url, "googleLoginPopup", `width=${width},height=${height},left=${left},top=${top}`);
  }, []);

  const logout = useCallback(async () => {
    try {
      await request("/auth/logout", { method: "GET" });
      setUser(null);
      router.push("/");
    } catch (error) {
      console.error("Logout failed", error);
      setError("Logout failed. Please try again.");
    }
  }, [request, router]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== process.env.NEXT_PUBLIC_SERVER_URL) return;

      if (event.data.type === "LOGIN_SUCCESS") {
        loadUser();
      } else if (event.data.type === "LOGIN_ERROR") {
        setError(event.data.message);
        setLoading(false);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [loadUser]);

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout, loading }}>
      <ErrorAlert errorMessage={error} onClose={() => setError(null)} />
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
