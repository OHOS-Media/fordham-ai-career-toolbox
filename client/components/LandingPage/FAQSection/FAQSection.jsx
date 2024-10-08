import AccordionItem from "./AccordionItem";

const faqSectionData = [
  {
    question: "Lorem ipsum?",
    answer:
      "Aliquam fusce hac purus fames id tincidunt. Sed augue nostra; parturient integer mauris at. Viverra scelerisque habitasse molestie erat primis dis cras laoreet. Facilisis rutrum nisi class bibendum morbi vivamus inceptos ex.",
  },
  {
    question: "Lorem ipsum?",
    answer:
      "Aliquam fusce hac purus fames id tincidunt. Sed augue nostra; parturient integer mauris at. Viverra scelerisque habitasse molestie erat primis dis cras laoreet. Facilisis rutrum nisi class bibendum morbi vivamus inceptos ex.",
  },
  {
    question: "Lorem ipsum?",
    answer:
      "Aliquam fusce hac purus fames id tincidunt. Sed augue nostra; parturient integer mauris at. Viverra scelerisque habitasse molestie erat primis dis cras laoreet. Facilisis rutrum nisi class bibendum morbi vivamus inceptos ex.",
  },
];

const FAQSection = () => {
  return (
    <div className="flex flex-col gap-6 items-center md:w-2/3 lg:w-1/2 2xl:w-1/3 mt-10 mb-60">
      <h2 className="h2 text-secondary text-center">Frequently Asked Questions</h2>
      <div className="flex flex-col w-full">
        {faqSectionData.map((faq, idx) => (
          <AccordionItem question={faq.question} answer={faq.answer} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
