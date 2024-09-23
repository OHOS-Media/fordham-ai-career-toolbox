import FeatureIcon from "./FeatureIcon";

const FeatureElement = ({ feature }) => {
  return (
    <div className="flex flex-col items-center w-1/4 mx-4 gap-1">
      <FeatureIcon icon={feature.icon} iconAlt={feature.iconAlt} />
      <p className="body-txt-bold text-center">{feature.title}</p>
      <p className="body-txt text-center">{feature.description}</p>
    </div>
  );
};

export default FeatureElement;
