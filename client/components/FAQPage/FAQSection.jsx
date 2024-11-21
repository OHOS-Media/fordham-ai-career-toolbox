import Accordion from "../Accordion/Accordion";

const FAQSection = ({ FAQPageData }) => {
  const handleCopy = (copiedText) => {
    console.log("Copied:", copiedText);
    // Additional handling if needed
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <Accordion data={FAQPageData} variant="faq" onCopy={handleCopy} />
    </div>
  );
};

export default FAQSection;
