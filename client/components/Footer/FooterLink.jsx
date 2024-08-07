import Link from "next/link";

const FooterLink = ({ title, target }) => {
  return (
    <Link href={target} className="text-md color-secondary">
      {title}
    </Link>
  );
};

export default FooterLink;
