// client/hooks/useApi.js
import { useState, useCallback } from "react";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_SERVER_URL?.replace("https://", "http://")
    : process.env.NEXT_PUBLIC_SERVER_URL;

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (endpoint, options = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...(process.env.NODE_ENV === "development" && {
          rejectUnauthorized: false,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 403) {
          if (data.requiresTerms) {
            throw {
              response: {
                status: 403,
                data: {
                  requiresTerms: true,
                  error: "Terms acceptance required",
                },
              },
            };
          }
          if (data.error === "Weekly usage limit reached") {
            throw {
              response: {
                status: 403,
                data: {
                  error: "Weekly usage limit reached",
                  resetDate: data.resetDate,
                  remainingUses: data.remainingUses,
                },
              },
            };
          }
        }

        if (response.status === 401) {
          throw {
            response: {
              status: 401,
              data: {
                error: "Please log in to access this resource",
              },
            },
          };
        }

        throw new Error(data.error || "API request failed");
      }

      return data;
    } catch (err) {
      setError(err.response?.data?.error || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { request, loading, error };
};
