import Link from "next/link";

const FooterLink = ({ title, path }) => {
  const href = path.startsWith("http") ? path : `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
  return (
    <Link href={href} className="body-txt-md color-secondary hover:text-white transition-colors">
      {title}
    </Link>
  );
};

export default FooterLink;
