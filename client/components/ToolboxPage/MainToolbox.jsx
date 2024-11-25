import React from "react";
import ExitConfirmationModal from "./ExitConfirmationModal";
import { IconPointFilled } from "@tabler/icons-react";
import Button from "../ui/Button";
import { useAuth } from "@/context/AuthContext";
import Notification from "../ui/Notification";

function MainToolbox({
  setExitModalActive,
  exitModalActive,
  decrementStep,
  incrementStep,
  activeStep,
  renderStep,
  handleDone,
  handleSubmit,
  loading,
}) {
  const { usageError, checkUsage } = useAuth();

  const handleButtonClick = async (e) => {
    if (activeStep === 1 || activeStep === 3) {
      const hasTokens = await checkUsage();
      if (!hasTokens) return;
    }
    handleSubmit(e);
  };

  const getButtonConfig = () => {
    const isDisabled = loading || !!usageError;

    switch (activeStep) {
      case 1:
        return [
          {
            text: loading ? "Processing..." : "Get keywords",
            onClick: handleButtonClick,
            disabled: isDisabled,
          },
        ];
      case 2:
        return [
          {
            text: "Enhance resume",
            onClick: () => incrementStep(),
          },
        ];
      case 3:
        return {
          text: loading ? "Processing..." : "Submit resume",
          onClick: handleButtonClick,
          disabled: isDisabled,
        };
      case 4:
        return [
          {
            text: "Browse more features",
            onClick: () => alert("This feature is not yet implemented."),
          },
        ];
      default:
        return null;
    }
  };

  const getNotificationConfig = () => {
    if (loading) {
      return {
        type: "loading",
        title: activeStep === 1 ? "Extracting keywords" : "Extracting bullet points",
        message: `Hang tight! We are currently analyzing the ${
          activeStep === 1 ? "keywords" : "bullet points"
        }.`,
      };
    }

    if (usageError) {
      return {
        type: "error",
        title: "Not enough tokens",
        message: usageError || "You do not have enough tokens. Please come back next week.",
      };
    }

    return null;
  };

  const buttonConfig = getButtonConfig();
  const notificationConfig = getNotificationConfig();

  return (
    <div className="bg-fordham-brown rounded-[16px] w-full max-h-full flex flex-col border-[1px] border-[#3B3533]">
      <div className="flex p-6 border-b-[1px] border-[#3B3533] gap-4">
        <h2 className="font-medium body-text-md text-fordham-white">TOOLBOX</h2>
        <IconPointFilled className="w-3 text-fordham-gray/60" />
        <p className="body-txt text-fordham-gray/60">
          Follow the steps to tailor your resume for the specific job application.
        </p>
      </div>

      <div className="h-full flex-1 relative flex flex-col max-h-full overflow-hidden">
        <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">{renderStep()}</div>

        {buttonConfig && (
          <div className="w-full border-t-[1px] border-[#3B3533]">
            <div className="w-full flex justify-end items-center p-6 gap-4">
              {activeStep > 1 && <Button variant="secondary" onClick={decrementStep} text="Back" />}

              {Array.isArray(buttonConfig) ? (
                buttonConfig.map((btn, index) => (
                  <Button
                    key={index}
                    text={btn.text}
                    onClick={btn.onClick}
                    variant={btn.variant}
                    disabled={btn.disabled}
                  />
                ))
              ) : (
                <Button
                  text={buttonConfig.text}
                  onClick={buttonConfig.onClick}
                  disabled={buttonConfig.disabled}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {exitModalActive && (
        <>
          <div className="fixed inset-0 bg-fordham-black/30 backdrop-blur-sm z-40" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <ExitConfirmationModal
              setExitModalActive={setExitModalActive}
              handleDone={handleDone}
            />
          </div>
        </>
      )}

      {notificationConfig && (activeStep === 1 || activeStep === 3) && (
        <Notification
          type={notificationConfig.type}
          title={notificationConfig.title}
          message={notificationConfig.message}
          position="center"
        />
      )}
    </div>
  );
}

export default MainToolbox;
