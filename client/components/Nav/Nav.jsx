import Logo from "../Logo";
import NavLink from "./NavLink";
import Button from "../Button";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import ErrorAlert from "../ErrorAlert";

const navData = {
  links: [
    { title: "Toolbox", href: "/toolbox" },
    { title: "About Us", href: "/about-us" },
    { title: "Wordpress Link", href: "/" },
  ],
};

export default function Nav() {
  const { isAuthenticated, login, user, error, setError } = useAuth();

  return (
    <nav className="mt-4 px-4 py-2 flex justify-between w-2/3 border-[1px] rounded-full bg-neutral/60 z-10">
      <div className="flex items-center gap-10">
        <Logo />
      </div>

      <div className="flex items-center gap-10">
        {navData.links.map((link, idx) => (
          <NavLink title={link.title} target={link.href} key={idx} />
        ))}
        {isAuthenticated ? (
          <Link href="/profile">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={user.profilePicture}
                alt={user.displayName}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          </Link>
        ) : (
          <Button text="Log In" onClick={login} />
        )}
      </div>
      {error && (
        <ErrorAlert
          errorMessage={error}
          setErrorMessage={setError}
          errorAlertActive={!!error}
          setErrorAlertActive={() => setError(null)}
        />
      )}
    </nav>
  );
}
