import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Fetch response:", response);
        if (response.ok) {
          const userData = await response.json();
          console.log("User data:", userData);
          setUser(userData);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch user data");
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/logout`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.ok) {
        // Clear user data from state
        setUser(null);
        // Redirect to home page
        router.push("/");
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
      setError("Failed to logout. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral">
        <div className="bg-tertiary p-8 rounded shadow-md w-96">
          <h1 className="text-2xl mb-4 text-error-state">Error</h1>
          <p>{error}</p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 w-full bg-primary text-neutral p-2 rounded hover:bg-secondary transition-colors"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral">
      <div className="bg-tertiary p-8 rounded shadow-md w-96">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 mr-4 rounded-full overflow-hidden">
            <Image
              src={user.profilePicture}
              alt={user.displayName}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl">Profile</h1>
            <p className="text-secondary">Welcome, {user.displayName}!</p>
          </div>
        </div>
        <p className="mb-4">Email: {user.email}</p>
        <button
          onClick={handleLogout}
          className="w-full bg-primary text-neutral p-2 rounded hover:bg-error-state transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
