import { useEffect } from "react";

export default function ErrorAlert({ errorMessage, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [errorMessage, onClose]);

  if (!errorMessage) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 bg-error-state text-neutral">
      <div className="container mx-auto flex justify-between items-center">
        <p>{errorMessage}</p>
        <button onClick={onClose} className="text-neutral hover:text-primary-dark">
          ✕
        </button>
      </div>
    </div>
  );
}
