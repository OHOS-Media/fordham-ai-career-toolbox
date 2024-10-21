import React from "react";

export default function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`body-txt-bold text-white button-primary min-w-[10rem] shadow-md ${className}`}
    >
      {text}
    </button>
  );
}
