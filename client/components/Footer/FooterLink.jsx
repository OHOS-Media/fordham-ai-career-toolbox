import Link from "next/link";

const FooterLink = ({ title, path }) => {
  const isExternal = path.startsWith("http");
  const href = isExternal ? path : `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-base hover:text-fordham-white transition-colors cursor-pointer"
      >
        {title}
      </a>
    );
  }

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
