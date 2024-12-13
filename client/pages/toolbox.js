import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useApi } from "@/hooks/useApi";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-hot-toast";
import PageContainer from "@/components/PageContainer";
import { Sidebar } from "@/components/ToolboxPage/SideBar";
import MainToolbox from "@/components/ToolboxPage/MainToolbox";
import ToolboxEnd from "@/components/ToolboxPage/ToolboxSteps/ToolboxEnd";
import { useToolboxSteps } from "@/components/ToolboxPage/ToolboxSteps/useToolboxSteps";
import ExitConfirmationModal from "@/components/ToolboxPage/ExitConfirmationModal";
import GradientContainer from "@/components/ui/GradientContainer";

export default function Toolbox() {
  const { request, loading } = useApi();
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [state, setState] = useState({
    toolboxActive: true,
    activeStep: 1,
    exitModalActive: false,
    jobDescription: "",
    keywords: [],
    resume: "",
    bulletPoints: [],
    pendingNavigation: null,
  });

  const {
    toolboxActive,
    activeStep,
    exitModalActive,
    jobDescription,
    keywords,
    resume,
    bulletPoints,
    pendingNavigation,
  } = state;

  const updateState = (updates) => setState((prev) => ({ ...prev, ...updates }));

  // Handle beforeunload event
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (activeStep > 1) {
        // Store the navigation event
        updateState({
          exitModalActive: true,
          isLeavingPage: true,
          pendingNavigation: e,
        });

        // Cancel the event and show our custom modal
        e.preventDefault();
        // Chrome requires returnValue to be set
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [activeStep]);

  const handleReturnBtn = () => {
    if (activeStep > 1) {
      return updateState({ exitModalActive: true });
    } else {
      router.push("/");
    }
  };

  const handleCancel = () => {
    if (state.pendingNavigation) {
      // If there was a pending navigation, prevent it
      state.pendingNavigation.preventDefault();
    }
    updateState({
      exitModalActive: false,
      isLeavingPage: false,
      pendingNavigation: null,
    });
  };

  const handleDone = () => {
    // Use state.isLeavingPage and state.pendingNavigation directly
    if (state.isLeavingPage && state.pendingNavigation) {
      // If user was trying to leave/reload the page, allow it now
      window.onbeforeunload = null;
      window.location.reload();
    } else {
      router.push("/");
    }
  };

  const navigateStep = (direction) => {
    if (direction === "next" && activeStep < 5) {
      updateState({ activeStep: activeStep + 1 });
    } else if (direction === "prev" && activeStep > 1) {
      updateState({ activeStep: activeStep - 1 });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeStep === 1) {
        const data = await request("/api/extract-keywords", {
          method: "POST",
          body: JSON.stringify({ jobDescription }),
        });
        updateState({ keywords: data.keywords });
      } else if (activeStep === 3) {
        const data = await request("/api/resume", {
          method: "POST",
          body: JSON.stringify({ jobDescription, resume }),
        });
        updateState({ bulletPoints: data });
      }
      navigateStep("next");
    } catch (error) {
      console.error("Request failed:", error);
      if (error.message.includes("exceeds limit")) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (activeStep > 4) updateState({ toolboxActive: false });
  }, [activeStep]);

  const { renderStep } = useToolboxSteps({
    state,
    updateState,
    navigateStep,
  });

  // Add authentication check with a ref to track if we've shown the toast
  useEffect(() => {
    let redirecting = false;

    if (!authLoading && !user && !redirecting) {
      redirecting = true;
      toast.error("Please log in to use the toolbox", {
        id: "auth-error",
      });
      router.push("/");
    }
  }, [user, authLoading, router]);

  // If loading or not authenticated, don't render the page content
  if (authLoading || !user) {
    return null;
  }

  return (
    <>
      <GradientContainer />
      <PageContainer
        marginBottom={true}
        marginTop={true}
        limitedWidth={true}
        className="max-w-7xl flex flex-col gap-20 border"
      >
        <div className="w-full flex flex-col items-center gap-2 z-10">
          <h1 className="h2 text-fordham-white">Toolbox</h1>
          <p className="body-txt-md text-center font-light text-fordham-light-gray/60 max-w-2xl">
            Follow the steps below to tailor your resume for the specific job application.
          </p>
        </div>

        {exitModalActive && (
          <ExitConfirmationModal
            setExitModalActive={(value) => updateState({ exitModalActive: value })}
            handleDone={handleDone}
            handleCancel={handleCancel}
          />
        )}

        {toolboxActive ? (
          <div className="h-[700px] w-full flex flex-row gap-6 z-10">
            <Sidebar
              activeStep={activeStep}
              handleReturnBtn={handleReturnBtn}
              handleDone={handleDone}
              setExitModalActive={(value) => updateState({ exitModalActive: value })}
            />
            <MainToolbox
              activeStep={activeStep}
              decrementStep={() => navigateStep("prev")}
              incrementStep={() => navigateStep("next")}
              renderStep={renderStep}
              handleDone={handleDone}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </div>
        ) : (
          <ToolboxEnd />
        )}
      </PageContainer>
    </>
  );
}
