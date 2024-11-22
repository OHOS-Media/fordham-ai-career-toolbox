import { IconAlertOctagon, IconLoader } from "@tabler/icons-react";
import React from "react";

const Notification = ({
  type = "loading",
  title = "Loading",
  message = "Please wait...",
  position = "center",
  className = "",
}) => {
  const positions = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const icons = {
    loading: (
      <div className="w-10 h-10 rounded-[8px] p-2 bg-fordham-light-gray/60 flex items-center justify-center">
        <IconLoader size={24} className="text-fordham-dark-gray animate-spin" />
      </div>
    ),
    error: (
      <div className="w-10 h-10 rounded-[8px] p-2 bg-[#FEE4E2] flex items-center justify-center">
        <IconAlertOctagon size={24} className="text-[#D92D20]" />
      </div>
    ),
    success: (
      <div className="w-5 h-5 rounded-full bg-fordham-light-gray/60 flex items-center justify-center">
        <span className="text-fordham-dark-gray text-sm">✓</span>
      </div>
    ),
    warning: (
      <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center">
        <span className="text-white text-sm">!</span>
      </div>
    ),
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 w-screen h-screen overflow-hidden overscroll-none">
      <div className={`absolute ${positions[position]} z-50 animate-fadeIn ${className}`}>
        <div className="bg-fordham-white shadow-lg rounded-[16px] p-6 w-[248px]">
          <div className="flex flex-col items-start gap-6">
            {icons[type]}
            <div className="flex flex-col gap-2">
              <h3 className="text-fordham-black body-txt-md font-medium">{title}</h3>
              <p className="text-fordham-dark-gray body-txt-sm">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
