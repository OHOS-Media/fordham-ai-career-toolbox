import AIPoweredBadge from "./AIPoweredBadge";

const aiPoweredSectionData = {
  description:
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Cras iaculis sem placerat nam sed. Eu eros netus magna torquent neque sagittis. Conubia platea convallis curabitur phasellus per dictum. Nec tempus risus justo erat vitae mattis suspendisse. Curae facilisis laoreet lectus erat scelerisque nascetur, sagittis semper sociosqu.",
};

const AIPoweredSection = () => {
  return (
    <div className="flex flex-col items-center w-1/2">
      <AIPoweredBadge />
      <p className="mt-8 text-center text-md">{aiPoweredSectionData.description}</p>
    </div>
  );
};

export default AIPoweredSection;
