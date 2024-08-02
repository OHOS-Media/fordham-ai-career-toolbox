import Link from "next/link";

export default function NavLink({ title, target }) {
  return (
    <Link href={target} className="font-bold">
      {title}
    </Link>
  );
}
