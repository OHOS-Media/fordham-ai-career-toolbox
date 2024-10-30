import AccordionItem from "./AccordionItem";

const FAQSection = ({ FAQPageData }) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex flex-col w-full">
        {FAQPageData.map((faq, idx) => (
          <AccordionItem question={faq.question} answer={faq.answer} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
