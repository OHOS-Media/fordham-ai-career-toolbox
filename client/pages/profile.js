import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function Profile() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (typeof window === "undefined" || loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-neutral">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral">
          <div className="flex flex-col items-center gap-2">
            <div className="mr-4 rounded-full overflow-hidden">
              <Image
                src={user.profilePicture}
                alt={user.displayName}
                width={150}
                height={150}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-2xl">{user.displayName}</h1>
              <p className="text-secondary">{user.email}</p>
            </div>
          </div>
          
          <Button onClick={logout} text="Log out" className="mt-10" />
      </div>
    </Layout>
  );
}
