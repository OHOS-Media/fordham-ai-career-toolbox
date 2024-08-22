import Link from "next/link";

const FooterLink = ({ title, target }) => {
  return (
    <Link href={target} className="body-txt-md color-secondary">
      {title}
    </Link>
  );
};

export default FooterLink;
