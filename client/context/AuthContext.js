// client/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { useApi } from "../hooks/useApi";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isNewLogin, setIsNewLogin] = useState(false);
  const router = useRouter();
  const { request } = useApi();

  const loadUser = useCallback(async () => {
    try {
      const userData = await request("/api/user");
      setUser(userData);

      // Check terms status after login
      if (userData && isNewLogin) {
        if (!userData.hasAcceptedTerms) {
          router.push("/terms");
          toast.error("Please accept the terms to continue", {
            duration: 5000,
            style: { background: "#282220", color: "#fff" },
          });
        } else {
          toast.success(`Welcome back, ${userData.displayName}!`);
        }
        setIsNewLogin(false);
      }
    } catch (error) {
      console.error("Failed to fetch user", error);
      setUser(null);

      // Handle terms-specific errors
      if (error.response?.status === 403 && error.response?.data?.requiresTerms) {
        router.push("/terms");
      }
    } finally {
      setLoading(false);
    }
  }, [request, router, isNewLogin]);

  const acceptTerms = useCallback(async () => {
    try {
      await request("/auth/accept-terms", {
        method: "POST",
      });
      await loadUser();
      router.push("/");
      toast.success("Terms accepted successfully!", {
        duration: 3000,
        style: {
          background: "#282220",
          color: "#fff",
          borderRadius: "8px",
        },
      });
    } catch (error) {
      toast.error("Failed to accept terms. Please try again.", {
        duration: 3000,
        style: {
          background: "#282220",
          color: "#fff",
          borderRadius: "8px",
        },
      });
    }
  }, [request, router, loadUser]);

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
      setLoading(true);
      await request("/auth/logout", { method: "GET" });
      setUser(null);
      router.push("/");
      toast.success("Successfully logged out", {
        duration: 3000,
        style: {
          background: "#282220",
          color: "#fff",
          borderRadius: "8px",
        },
      });
    } catch (error) {
      console.error("Logout failed", error);
      setError("Logout failed. Please try again.");
      toast.error("Logout failed. Please try again.", {
        duration: 3000,
        style: {
          background: "#282220",
          color: "#fff",
          borderRadius: "8px",
        },
      });
    } finally {
      setLoading(false);
    }
  }, [request, router]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== process.env.NEXT_PUBLIC_SERVER_URL) return;

      if (event.data.type === "LOGIN_SUCCESS") {
        setIsNewLogin(true);
        loadUser();
        if (event.data.requiresTerms) {
          router.push("/terms");
        }
      } else if (event.data.type === "LOGIN_ERROR") {
        setError(event.data.message);
        toast.error(event.data.message || "Failed to login", {
          duration: 3000,
          style: {
            background: "#282220",
            color: "#fff",
            borderRadius: "8px",
          },
        });
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [loadUser, router]);

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    acceptTerms,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
