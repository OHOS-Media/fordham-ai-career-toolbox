import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconFileText,
  IconTag,
} from "@tabler/icons-react";
import Button from "../ui/Button";

export const Sidebar = ({ activeStep, progress, handleReturnBtn }) => (
  <div className="w-[300px] flex flex-shrink-0 flex-col justify-between min-h-full bg-fordham-brown rounded-[16px] border-[1px] border-[#3B3533]">
    {/* Top Section */}
    <div>
      <h2 className="font-medium body-text-md text-fordham-white p-6 border-b-[1px] border-[#3B3533]">
        Progress
      </h2>
      <div className="p-6">
        {/* Tool Selection */}
        <div className="space-y-4">
          {/* Keyword Extractor */}
          <div
            className={`${
              activeStep <= 2 ? "bg-fordham-white/5" : ""
            } p-4 rounded-[8px] flex flex-col gap-4 transition-all duration-300`}
          >
            <div className="text-fordham-white w-full flex items-center gap-4">
              {activeStep <= 2 ? (
                <IconChevronDown className="w-4 font-bold" />
              ) : (
                <IconChevronRight className="w-4 font-bold" />
              )}
              <div
                className={`flex gap-2 body-txt font-bold ${
                  activeStep <= 2 ? "text-fordham-white" : "text-fordham-gray/60"
                }`}
              >
                <IconTag className="w-4" />
                <p>Keyword extractor</p>
              </div>
            </div>
            {/* Show steps only when in keyword extractor phase */}
            {activeStep <= 2 && (
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div
                    className={`mx-[6px] rounded-full w-1 h-auto ${
                      activeStep === 1 ? "bg-red-500" : "bg-fordham-gray/40"
                    }`}
                  ></div>
                  <p
                    className={`body-txt-md ${
                      activeStep === 1 ? "text-fordham-white" : "text-fordham-gray/60"
                    }`}
                  >
                    Upload job description
                  </p>
                </div>
                <div className="flex gap-4">
                  <div
                    className={`mx-[6px] rounded-full w-1 h-auto ${
                      activeStep === 2 ? "bg-red-500" : "bg-fordham-gray/40"
                    }`}
                  ></div>
                  <p
                    className={`body-txt-md ${
                      activeStep === 2 ? "text-fordham-white" : "text-fordham-gray/60"
                    }`}
                  >
                    Get keywords
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Resume Enhancer */}
          <div
            className={`${
              activeStep >= 3 && activeStep <= 4 ? "bg-fordham-white/5" : ""
            } p-4 rounded-[8px] flex flex-col gap-4 transition-all duration-300`}
          >
            <div className="text-fordham-white w-full flex items-center gap-4">
              {activeStep >= 3 && activeStep <= 4 ? (
                <IconChevronDown className="w-4 font-bold" />
              ) : (
                <IconChevronRight className="w-4 font-bold" />
              )}
              <div
                className={`flex gap-2 body-txt font-bold ${
                  activeStep >= 3 && activeStep <= 4 ? "text-fordham-white" : "text-fordham-gray/60"
                }`}
              >
                <IconFileText className="w-4" />
                <p>Resume enhancer</p>
              </div>
            </div>
            {/* Show steps only when in resume enhancer phase */}
            {activeStep >= 3 && activeStep <= 4 && (
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div
                    className={`mx-[6px] rounded-full w-1 h-auto ${
                      activeStep === 3 ? "bg-red-500" : "bg-fordham-gray/40"
                    }`}
                  ></div>
                  <p
                    className={`body-txt-md ${
                      activeStep === 3 ? "text-fordham-white" : "text-fordham-gray/60"
                    }`}
                  >
                    Upload resume
                  </p>
                </div>
                <div className="flex gap-4">
                  <div
                    className={`mx-[6px] rounded-full w-1 h-auto ${
                      activeStep === 4 ? "bg-red-500" : "bg-fordham-gray/40"
                    }`}
                  ></div>
                  <p
                    className={`body-txt-md ${
                      activeStep === 4 ? "text-fordham-white" : "text-fordham-gray/60"
                    }`}
                  >
                    Get bullet points
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Cover letter generator */}
          <div
            className={`${
              activeStep >= 5 ? "bg-fordham-white/5" : ""
            } p-4 rounded-[8px] flex flex-col gap-4 transition-all duration-300`}
          >
            <div className="text-fordham-white w-full flex items-center gap-4">
              {activeStep >= 5 ? (
                <IconChevronDown className="w-4 font-bold" />
              ) : (
                <IconChevronRight className="w-4 font-bold" />
              )}
              <div
                className={`flex gap-2 body-txt font-bold ${
                  activeStep >= 5 ? "text-fordham-white" : "text-fordham-gray/60"
                }`}
              >
                <IconFileText className="w-4" />
                <p>Cover letter</p>
              </div>
            </div>
            {/* Show steps only when in cover letter phase */}
            {activeStep >= 5 && (
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div
                    className={`mx-[6px] rounded-full w-1 h-auto ${
                      activeStep === 5 ? "bg-red-500" : "bg-fordham-gray/40"
                    }`}
                  ></div>
                  <p
                    className={`body-txt-md ${
                      activeStep === 5 ? "text-fordham-white" : "text-fordham-gray/60"
                    }`}
                  >
                    Get cover letter
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="flex flex-col justify-center items-center w-full">
      {/* Progress Bar */}
      <div className="flex justify-stretch items-center space-y-2 w-full h p-6 gap-2">
        <div className="h-3 bg-fordham-dark-gray rounded-full w-full">
          <div
            className="h-full bg-gradient-to-r from-[#7E1515] via-[#BE2929] to-[#F34848] rounded-full transition-all duration-300"
            style={{ width: `${(activeStep / 5) * 100}%` }}
          />
        </div>
        <p className="body-txt-sm text-fordham-gray -translate-y-1">
          {Math.round((activeStep / 5) * 100)}%
        </p>
      </div>

      {/* Back to Dashboard */}
      <div className="w-full border-t-[1px] border-[#3B3533]">
        <div className="flex justify-center items-center p-6">
          <Button
            className="w-full"
            variant="secondary"
            text={"Back to dashboard"}
            onClick={handleReturnBtn}
          ></Button>
        </div>
      </div>
    </div>
  </div>
);
