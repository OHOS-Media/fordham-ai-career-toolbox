import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { Toaster } from "react-hot-toast";

const Accordion = ({
  data,
  variant = "faq", // 'faq' or 'toolbox'
  onCopy,
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Add Toaster component */}
      {/* <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#333",
            color: "#fff",
          },
          success: {
            iconTheme: {
              primary: "#4ade80",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      /> */}
      <div className="w-full flex flex-col gap-4 pb-10">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title || item.question}
            content={item.content || item.answer}
            bulletPoints={item.bulletPoints}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
            variant={variant}
            onCopy={onCopy}
          />
        ))}
      </div>
    </>
  );
};

export default Accordion;
