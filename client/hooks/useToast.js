import toast from "react-hot-toast";
import { IconAlertOctagon, IconCheck, IconLoader } from "@tabler/icons-react";

// style this toast when you need them
export const useToast = () => {
  const toastStyle = {
    duration: 3000,
    position: "bottom-right",
  };

  const Icon = ({ type }) => {
    const icons = {
      loading: <IconLoader size={16} className="text-fordham-white animate-spin" />,
      error: <IconAlertOctagon size={16} className="text-[#D92D20]" />,
      success: <IconCheck size={16} className="text-fordham-white" />,
      warning: <span className="text-white text-sm">!</span>,
    };

    return icons[type];
  };

  const createToast = (message, type) => {
    toast.custom(
      (t) => (
        <div className="flex bg-white/5 backdrop-blur-[50px] items-center gap-4 py-2 px-4 rounded-[16px]">
          <Icon type={type} />
          <span className="text-fordham-white font-medium">{message}</span>
        </div>
      ),
      toastStyle
    );
  };

  return {
    success: (message) => createToast(message, "success"),
    error: (message) => createToast(message, "error"),
    loading: (message) => createToast(message, "loading"),
  };
};
