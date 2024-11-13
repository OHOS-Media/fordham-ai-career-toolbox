import FeatureElement from "./FeatureElement";

const FeatureSection = ({ title, featureItems }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-4/5 py-10 px-10 z-10">
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white md:whitespace-normal lg:whitespace-nowrap mb-8 sm:mb-12">{title}</h2>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
        {featureItems.map((feature, idx) => (
          <FeatureElement feature={feature} key={idx}  />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
