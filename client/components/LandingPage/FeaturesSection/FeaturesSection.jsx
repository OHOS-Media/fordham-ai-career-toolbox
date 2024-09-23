import FeatureElement from "./FeatureElement";

const FeatureSection = ({ title, featureItems }) => {
  return (
    <div className="flex flex-col items-center justify-center w-4/5 py-10 px-10 rounded-lg">
      <h2 className="h2">{title}</h2>

      <div className="flex justify-between items-start mt-10 gap-6">
      {featureItems.map((feature, idx) => (
          <FeatureElement feature={feature} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
