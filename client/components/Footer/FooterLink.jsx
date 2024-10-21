import Link from "next/link";

const FooterLink = ({ title, path }) => {
  const href = process.env.NEXT_PUBLIC_BASE_URL + path;
  return (
    <Link href={href} className="body-txt-md color-secondary hover:text-white transition-colors">
      {title}
    </Link>
  );
};
export default FooterLink;
