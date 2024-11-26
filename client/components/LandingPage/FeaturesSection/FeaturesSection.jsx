import FeatureElement from "./FeatureCard";

const FeatureSection = ({ title, featureItems }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 md:gap-10 lg:gap-[60px]">
      <h2 className="font-bold h5 sm:h3 text-center text-fordham-white leading-tight">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {featureItems.map((feature, idx) => (
          <FeatureElement feature={feature} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;