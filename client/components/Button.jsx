import { useState } from "react";

const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
  icon = null,
  iconPosition = "after", // 'before' or 'after'
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const baseStyles =
    "rounded-[8px] transition-[background,transform,outline] duration-200 ease-in-out flex items-center justify-center gap-2 px-5 py-3";

  const variants = {
    primary: {
      default: "font-medium bg-fordham-white text-fordham-black border-transparent",
      hover: "hover:bg-fordham-gray",
      pressed: "outline outline-[6px] outline-fordham-white/20 scale-95 shadow-inner",
      disabled: "font-medium bg-fordham-light-gray text-fordham-dark-gray cursor-not-allowed",
    },
    secondary: {
      default: "bg-transparent text-fordham-white border-[1px] border-fordham-white",
      hover: "bg-fordham-white bg-opacity-[5%] hover:text-fordham-gray",
      pressed:
        "border-none bg-fordham-white bg-opacity-[5%] outline outline-[6px] outline-fordham-white/20 scale-95 shadow-inner",
      disabled:
        "font-medium outline outline-fordham-dark-gray outline-[1px] text-fordham-dark-gray cursor-not-allowed",
    },
    tertiary: {
      default: "font-light bg-transparent text-fordham-white",
      hover: "hover:text-fordham-light-gray",
      pressed: "bg-fordham-white/5 text-fordham-light-gray",
      disabled: "text-fordham-dark-gray cursor-not-allowed",
    },
  };

  const getButtonStyles = () => {
    const variantStyles = variants[variant];

    if (disabled) {
      return `${baseStyles} ${variantStyles.disabled}`;
    }

    return `
      ${baseStyles}
      ${variantStyles.default}
      ${variantStyles.hover}
      ${isPressed ? variantStyles.pressed : ""}
    `;
  };

  const handleMouseDown = () => {
    if (!disabled) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    if (!disabled) {
      setIsPressed(false);
    }
  };

  const renderContent = () => {
    if (!icon) return text;

    return iconPosition === "before" ? (
      <>
        {icon}
        {text}
      </>
    ) : (
      <>
        {text}
        {icon}
      </>
    );
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={`${getButtonStyles()} ${className}`}
      disabled={disabled}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsPressed(false)}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
