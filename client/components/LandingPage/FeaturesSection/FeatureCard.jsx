import FeatureIcon from "./FeatureIcon";

const FeatureElement = ({ feature }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-fordham-white/5 rounded-[16px] shadow-md min-w-[240px] h-auto gap-6">
      <FeatureIcon icon={feature.icon} iconAlt={feature.iconAlt} />

      <div className="flex flex-col gap-2">
        <p className="text-left font-medium text-base text-fordham-white w-full whitespace-nowrap">
          {feature.title}
        </p>
        <p className="text-left text-sm text-fordham-light-gray/60">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureElement;
