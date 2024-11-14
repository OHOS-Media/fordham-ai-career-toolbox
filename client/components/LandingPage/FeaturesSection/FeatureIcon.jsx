import { urlFor } from "@/src/sanity/lib/image";

const FeatureIcon = ({ iconAlt, icon }) => {
  return (
    <div className="w-10 p-2 rounded-[8px] bg-white/5 ">
      {icon && <img src={urlFor(icon).url()} alt={iconAlt} />}
    </div>
  );
};

export default FeatureIcon;
