import Image from "next/image";
import { urlFor } from "@/src/sanity/lib/image";

const HighlightItem = ({ text, icon, iconAlt }) => {
  return (
    <div className="flex gap-2">
      <div>
        {icon && <Image src={urlFor(icon).url()} alt={iconAlt} width={22} height={22} />}
      </div>
      
      <p className="body-txt">{text}</p>
    </div>
  );
};

export default HighlightItem;
