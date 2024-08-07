import Link from "next/link";
import Image from "next/image";

const SocialIconLink = ({ title, target, icon }) => {
  return (
    <Link href={target}>
      <Image src={icon} width={18} height={18} alt={title} />
    </Link>
  );
};

export default SocialIconLink;
