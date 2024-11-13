import FeatureIcon from "./FeatureIcon";

const FeatureElement = ({ feature }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white/5 rounded-lg shadow-md min-w-[250px] max-w-[300px] h-auto">
      <FeatureIcon icon={feature.icon} iconAlt={feature.iconAlt} />
      <p className="body-txt-bold text-left text-white text-xl mt-2 mb-2 w-full overflow-hidden text-ellipsis whitespace-nowrap">{feature.title}</p>
      <p className="body-txt text-left text-white text-sm mt-auto">{feature.description}</p>
    </div>
  );
};

export default FeatureElement;
