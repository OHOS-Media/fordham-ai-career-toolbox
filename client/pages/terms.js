import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { IconLoader2 } from "@tabler/icons-react";
import PageContainer from "@/components/PageContainer";
import toast from "react-hot-toast";

export default function Terms() {
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, loading, acceptTerms, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect if no user or already accepted terms
    if (!loading && (!user || user.hasAcceptedTerms)) {
      router.replace("/");
    }
  }, [user, loading, router]);

  const handleAccept = async () => {
    if (!accepted || isSubmitting) return;

    try {
      setIsSubmitting(true);
      await acceptTerms();
    } catch (error) {
      toast.error("Failed to accept terms. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDecline = async () => {
    try {
      await logout();
      toast.error("You must accept the terms to use RAMresume.");
      router.replace("/");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <IconLoader2 className="w-8 h-8 animate-spin text-fordham-white" />
      </div>
    );
  }

  return (
    <PageContainer marginBottom={true} marginTop={true}>
      <div className="max-w-2xl mx-auto bg-fordham-white/5 p-8 rounded-lg backdrop-blur-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-fordham-white">
          Important Notice About RAMresume AI Usage
        </h1>

        <div className="space-y-4 text-fordham-white mb-8">
          <p>Please read and acknowledge the following:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>RAMresume uses artificial intelligence to assist with resume optimization.</li>
            <li>AI technology can sometimes generate incorrect or incomplete information.</li>
            <li>All AI-generated suggestions should be carefully reviewed and verified.</li>
            <li>You are responsible for ensuring the accuracy of your final resume.</li>
            <li>Always use professional judgment when applying AI suggestions.</li>
          </ol>
        </div>

        <div className="flex items-center mb-8">
          <input
            type="checkbox"
            id="terms"
            className="mr-3 h-4 w-4 cursor-pointer"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            disabled={isSubmitting}
          />
          <label htmlFor="terms" className="text-fordham-white cursor-pointer">
            I understand and accept these terms
          </label>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleAccept}
            disabled={!accepted || isSubmitting}
            className={`px-6 py-2 rounded-lg ${
              accepted && !isSubmitting
                ? "bg-fordham-primary hover:bg-fordham-primary/80"
                : "bg-gray-500 cursor-not-allowed"
            } text-white transition-colors flex items-center`}
          >
            {isSubmitting && <IconLoader2 className="w-4 h-4 mr-2 animate-spin" />}
            Accept
          </button>
          <button
            onClick={handleDecline}
            disabled={isSubmitting}
            className="px-6 py-2 rounded-lg border border-fordham-white text-fordham-white hover:bg-fordham-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Decline
          </button>
        </div>
      </div>
    </PageContainer>
  );
}
