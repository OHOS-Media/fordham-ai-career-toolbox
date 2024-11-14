import FeatureElement from "./FeatureElement";

const FeatureSection = ({ title, featureItems }) => {
  return (
    <div className="flex flex-col items-center justify-center z-10">
      <h2 className="h3 text-center text-fordham-white">{title}</h2>

      <div className="flex flex-wrap justify-center items-start mt-10 gap-6 xl:gap-0">
        {featureItems.map((feature, idx) => (
          <FeatureElement feature={feature} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
