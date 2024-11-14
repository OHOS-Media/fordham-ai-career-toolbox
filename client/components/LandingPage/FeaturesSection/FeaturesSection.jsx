import FeatureElement from "./FeatureCard";

const FeatureSection = ({ title, featureItems }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-[60px]">
      <h2 className="font-bold h3 text-center text-white md:whitespace-normal lg:whitespace-nowrap">{title}</h2>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        {featureItems.map((feature, idx) => (
          <FeatureElement feature={feature} key={idx}  />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
