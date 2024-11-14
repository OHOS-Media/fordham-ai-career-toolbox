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
      if (userData && isNewLogin) {
        toast.success(`Welcome back, ${userData.displayName}!`, {
          duration: 3000,
          style: {
            background: "#282220",
            color: "#fff",
            borderRadius: "8px",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#282220",
          },
        });
        setIsNewLogin(false);
      }
    } catch (error) {
      console.error("Failed to fetch user", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [request, isNewLogin]);

  // Initial load
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
        iconTheme: {
          primary: "#fff",
          secondary: "#282220",
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
    const handleMessage = (event) => {
      if (event.origin !== process.env.NEXT_PUBLIC_SERVER_URL) return;

      if (event.data.type === "LOGIN_SUCCESS") {
        setIsNewLogin(true);
        loadUser();
      } else if (event.data.type === "LOGIN_ERROR") {
        setError(event.data.message);
        setLoading(false);
        toast.error(event.data.message || "Failed to login. Please try again.", {
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
  }, [loadUser]);

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
