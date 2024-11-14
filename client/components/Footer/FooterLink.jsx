import Link from "next/link";

const FooterLink = ({ title, path }) => {
  const href = path.startsWith("http") ? path : `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
  return (
    <Link
      href={href}
      className="text-base hover:text-fordham-white transition-colors cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default FooterLink;
