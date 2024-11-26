import FeatureElement from "./FeatureCard";

const FeatureSection = ({ title, featureItems }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 md:gap-[60px] px-4 md:px-0">
      <h2 className="font-bold h4 md:h3 text-center text-white">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl">
        {featureItems.map((feature, idx) => (
          <FeatureElement feature={feature} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
