import Link from "next/link";

export default function NavLink({ title, target, className = "" }) {
  return (
    <Link href={target} className={`text-base font-medium ${className}`}>
      {title}
    </Link>
  );
}
