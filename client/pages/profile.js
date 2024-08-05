import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";

export default function Profile() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-neutral">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!user) {
    router.push("/");
    return null;
  }

  return (
    <Layout>
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
          <Button text="Log out" onClick={logout} className="mb-2" />
          <Link href="/">
            <Button text="Go to Home" className="w-full" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
