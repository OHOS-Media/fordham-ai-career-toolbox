import Logo from "../Logo";
import NavLink from "./NavLink";
import Button from "../Button";

import Link from "next/link";
import { useAuth } from "../../context/AuthContext";

const navData = {
  links: [
    { title: "Toolbox", href: "/toolbox" },
    { title: "About Us", href: "/about-us" },
    { title: "Wordpress Link", href: "/" },
  ],
};

export default function Nav() {
  const { isAuthenticated, login, user } = useAuth();

  return (
    <nav className="absolute top-0 left-0 p-6 flex justify-between w-full">
      <div className="flex items-center gap-10">
        <Logo />
      </div>

      <div className="flex items-center gap-10">
        {navData.links.map((link, idx) => (
          <NavLink title={link.title} target={link.href} key={idx} />
        ))}
        {isAuthenticated ? (
          <Link href="/profile">
            <Button text={user.displayName} />
          </Link>
        ) : (
          <Button text="Log In" onClick={login} />
        )}
      </div>
    </nav>
  );
}
