import FeatureIcon from "./FeatureIcon";

const FeatureElement = ({ feature }) => {
  return (
    <div className="flex flex-col items-center md:w-1/3 lg:w-1/5 mx-4 gap-4 md:gap-1">
      <FeatureIcon icon={feature.icon} iconAlt={feature.iconAlt} />
      <p className="body-txt-bold text-center text-secondary">{feature.title}</p>
      <p className="body-txt text-center text-secondary">{feature.description}</p>
    </div>
  );
};

export default FeatureElement;
