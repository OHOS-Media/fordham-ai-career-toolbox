import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";
import { IconLoader2 } from "@tabler/icons-react";
import PageContainer from "@/components/PageContainer";

export default function Profile() {
  const { user, loading, logout, usage, checkUsage } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  useEffect(() => {
    checkUsage();
  }, [checkUsage]);

  console.log("usage:", usage);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <IconLoader2 className="w-8 h-8 animate-spin text-fordham-white" />
      </div>
    );
  }

  return (
    <PageContainer marginBottom={true} marginTop={true}>
      <div className="flex flex-col items-center gap-6 bg-fordham-white/5 p-8 rounded-lg backdrop-blur-sm">
        <div className="rounded-full overflow-hidden">
          <Image
            src={user.profilePicture}
            alt={user.displayName}
            width={150}
            height={150}
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-fordham-white text-2xl font-medium">{user.displayName}</h1>
          <p className="text-fordham-white/80">{user.email}</p>
          {usage && (
            <div className="flex flex-col items-center mt-4 text-fordham-white/80">
              <p>Remaining Uses: {usage.remainingUses}</p>
              <p>Resets on: {new Date(usage.resetDate).toLocaleDateString()}</p>
            </div>
          )}
        </div>

        <Button onClick={logout} text="Log out" variant="primary" />
      </div>
    </PageContainer>
  );
}
