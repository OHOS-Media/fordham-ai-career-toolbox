import Image from "next/image";

const FeatureIcon = ({ path, iconAlt }) => {
  return (
    <div className="bg-neutral w-fit p-2 rounded-full">
      <Image src={path} height={35} width={35} alt={iconAlt} />
    </div>
  );
};

export default FeatureIcon;
