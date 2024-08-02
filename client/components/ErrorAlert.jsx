import { useEffect } from "react";

export default function ErrorAlert({
  errorMessage,
  setErrorMessage,
  errorAlertActive,
  setErrorAlertActive,
}) {
  // Clear the error message after 5s
  useEffect(() => {
    async function clearError() {
      setTimeout(() => {
        setErrorMessage("");
        setErrorAlertActive(false);
      }, 5000);
    }

    clearError();
  }, [errorAlertActive]);

  return (
    <div className="absolute flex justify-center -top-8 left-0 w-full text-red-600">
      <p>{errorMessage}</p>
    </div>
  );
}
