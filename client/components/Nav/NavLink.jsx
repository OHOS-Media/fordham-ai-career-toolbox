import Link from "next/link";

export default function NavLink({ title, target, className = "" }) {
  return (
    <Link href={target} className={className}>
      {title}
    </Link>
  );
}
