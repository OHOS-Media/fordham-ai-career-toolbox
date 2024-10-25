import FeatureElement from "./FeatureElement";

const FeatureSection = ({ title, featureItems }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-4/5 py-10 px-10 z-10">
      <h2 className="h2 text-center text-secondary">{title}</h2>

      <div className="flex flex-wrap justify-center items-start mt-10 gap-6 xl:gap-0">
        {featureItems.map((feature, idx) => (
          <FeatureElement feature={feature} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
