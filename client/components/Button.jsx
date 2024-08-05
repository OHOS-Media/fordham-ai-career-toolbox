import React from "react";

export default function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary text-neutral font-bold py-2 px-10 rounded-lg hover:bg-primary-dark transition-colors ${className}`}
    >
      {text}
    </button>
  );
}
