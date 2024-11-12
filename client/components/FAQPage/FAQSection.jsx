import Accordion from "../Accordion/Accordion";

const FAQSection = ({ FAQPageData }) => {
  const handleCopy = (copiedText) => {
    console.log('Copied:', copiedText);
    // Additional handling if needed
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex flex-col w-full">
        <Accordion data={FAQPageData} variant="faq" onCopy={handleCopy}/>
      </div>
    </div>
  );
};

export default FAQSection;
