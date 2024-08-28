import Image from "next/image";
import Button from "../Button";
import ProgressAlert from "@/public/assets/ProgressAlert.svg";

export default function ExitConfirmationModal({ setExitModalActive, handleDone }) {
  const handleCancel = () => {
    setExitModalActive(false);
  };

  return (
    <div className="flex flex-col bg-grey p-8 rounded-md w-fit absolute top-50 gap-10 border-t-4 border-error-state z-30">
      <div className="flex flex-col items-center gap-4">
        <Image src={ProgressAlert} alt="Progress Alert" width={50} height={50} />
        <p className="body-txt-md-bold text-center">
          If you continue, any unsaved changes will be lost. <br />{" "}
          <span className="body-txt-md">Do you want to proceed?</span>
        </p>
      </div>

      <div className="flex justify-between">
        <Button
          text={"Cancel"}
          className="bg-grey border text-secondary hover:bg-dark-grey/20"
          onClick={handleCancel}
        />
        <Button text={"Im Done"} onClick={handleDone} />
      </div>
    </div>
  );
}
