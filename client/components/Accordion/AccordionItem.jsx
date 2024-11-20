import { IconMinus, IconPlus, IconCopy } from "@tabler/icons-react";
import { toast } from "react-hot-toast";
import CopyButton from "./CopyButton";

const AccordionItem = ({ title, content, bulletPoints, isOpen, onClick, variant, onCopy }) => {
  const handleCopy = async () => {
    const textToCopy = bulletPoints ? bulletPoints.join("\n") : content;
    await navigator.clipboard.writeText(textToCopy);
    if (onCopy) onCopy(textToCopy);
  };

  const renderContent = () => {
    if (bulletPoints) {
      return (
        <ul className="list-disc pl-4 text-fordham-white font-light text-base space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-fordham-white font-light text-base">{content}</p>;
  };

  return (
    <div
      onClick={onClick}
      className="bg-fordham-white/5 rounded-[16px] pr-4 pl-[32px] py-4 hover:cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-fordham-white text-lg font-bold">{title}</h3>
        <div className="flex items-center gap-2">
          {/* Copy button - only show in toolbox variant when section is open */}
          {variant === "toolbox" && isOpen && <CopyButton onCopy={handleCopy} />}

          {/* Toggle button */}
          <button
            className="bg-fordham-white/5 rounded-[8px] hover:bg-fordham-white/20 p-3 transition-colors duration-200 cursor-pointer"
            aria-label={isOpen ? "Close section" : "Open section"}
          >
            {isOpen ? (
              <IconMinus
                size={24}
                className="text-fordham-white transition-transform duration-300"
              />
            ) : (
              <IconPlus
                size={24}
                className="text-fordham-white transition-transform duration-300"
              />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default AccordionItem;
