import { urlFor } from "@/src/sanity/lib/image";

const FeatureIcon = ({ iconAlt, icon }) => {
  return (
    <div className="bg-neutral w-fit p-2 rounded-full">
      {icon && <img src={urlFor(icon).url()} alt={iconAlt} />}
    </div>
  );
};

export default FeatureIcon;
