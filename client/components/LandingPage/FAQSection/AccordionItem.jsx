import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TriangleArrow from "@/public/assets/TriangleArrow.svg";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      answerRef.current.style.maxHeight = `${answerRef.current.scrollHeight}px`;
    } else {
      answerRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="m-4 p-4 hover:cursor-pointer border border-tertiary"
    >
      <div className="flex justify-between">
        <p className="text-md font-bold ">{question}</p>
        <Image
          src={TriangleArrow}
          width={22}
          height={22}
          className={isOpen ? "rotate-180" : ""}
          alt="Triangle Arrow"
        />
      </div>

      <div className={`accordion-answer ${isOpen ? "mt-4" : ""}`} ref={answerRef}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
