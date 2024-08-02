import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user`, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else if (response.status === 401) {
          // User is not authenticated
          router.push("/");
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
  }, [router]);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/logout`, {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        setUser(null);
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
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral">
        <div className="bg-tertiary p-8 rounded shadow-md w-96">
          <h1 className="text-2xl mb-4 text-error-state">Error</h1>
          <p>{error}</p>
          <Link href="/">
            <p className="mt-4 block w-full bg-primary text-neutral p-2 rounded hover:bg-secondary transition-colors text-center">
              Go to Home
            </p>
          </Link>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral">
        <div className="bg-tertiary p-8 rounded shadow-md w-96">
          <h1 className="text-2xl mb-4">Not Logged In</h1>
          <p>Please log in to view your profile.</p>
          <Link href="/">
            <Button text="Go to Home" />
          </Link>
        </div>
      </div>
    );
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
        <Link href="/">
          <Button onClick={handleLogout} text="Log out" />
        </Link>
        <Link href="/">
          <Button text="Go to Home" />
        </Link>
      </div>
    </div>
  );
}
