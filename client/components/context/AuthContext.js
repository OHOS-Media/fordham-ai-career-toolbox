import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { useApi } from "@/hooks/useApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { request, error: apiError } = useApi();

  const loadUser = useCallback(async () => {
    try {
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
    }
  }, [request, router]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === "success") {
        loadUser();
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [loadUser]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout, loading, error: apiError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
