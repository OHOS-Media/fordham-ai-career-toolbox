import React from "react";

export default function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button type={type} onClick={onClick} className={`body-txt-bold button-primary ${className}`}>
      {text}
    </button>
  );
}
