import React from "react";
import ExitConfirmationModal from "./ExitConfirmationModal";
import { IconChevronLeft, IconDots, IconPointFilled } from "@tabler/icons-react";
import Button from "../ui/Button";

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
  const getButtonConfig = () => {
    switch (activeStep) {
      case 1:
      case 3:
        return {
          text: loading ? "Processing..." : "Submit",
          onClick: handleSubmit,
          disabled: loading,
        };
      case 2:
        return [
          {
            text: "I'm done",
            onClick: () => setExitModalActive(true),
            variant: "secondary",
          },
          {
            text: "Continue to bullet points...",
            onClick: () => incrementStep(),
          },
        ];
      case 4:
        return [
          {
            text: "I'm done",
            onClick: () => incrementStep(),
            variant: "secondary",
          },
          {
            text: "Save Keywords & Bullet Points",
            onClick: () => alert("This feature is not yet implemented."),
          },
        ];
      default:
        return null;
    }
  };

  const buttonConfig = getButtonConfig();

  return (
    <div className="bg-fordham-brown rounded-[16px] w-full max-h-full flex flex-col">
      {/* Header Section */}
      <div className="flex p-6 border-b-[1px] border-[#3B3533] gap-4">
        <h2 className="font-medium body-text-md text-fordham-white">TOOLBOX</h2>
        <IconPointFilled className="w-3 text-fordham-gray/60" />
        <p className="body-txt text-fordham-gray/60">
          Follow the steps to tailor your resume for the specific job application.
        </p>
      </div>

      {/* Content Section */}

      <div className="h-full flex-1 relative flex flex-col max-h-full overflow-hidden">
        <div className={`p-6 flex-1 overflow-y-auto custom-scrollbar`}>{renderStep()}</div>

        {/* Action Buttons */}
        {buttonConfig && (
          <div className="w-full border-t-[1px] border-[#3B3533]">
            <div className="w-full flex justify-end items-center p-6 gap-4">
              {/* Back Button */}
              {activeStep > 1 && (
                <div className="">
                  <Button variant="secondary" onClick={decrementStep} text="Back"></Button>
                </div>
              )}

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

      {/* Exit Modal */}
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
    </div>
  );
}
export default MainToolbox;
