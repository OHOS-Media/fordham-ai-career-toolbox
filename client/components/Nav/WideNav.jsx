import Link from "next/link";
import Image from "next/image";

import Logo from "../Logo";
import NavLink from "./NavLink";
import Button from "../Button";
import ErrorAlert from "../ErrorAlert";

export default function WideNav({ navData, isAuthenticated, login, user, error, setError }) {
  return (
    <nav className="mt-4 px-4 py-2 flex absolute top-5 justify-between w-11/12 lg:w-2/3 border-[1px] border-white rounded-full bg-white/50 z-10">
      <div className="flex items-center gap-10">
        <Logo />
      </div>

      <div className="flex items-center gap-10">
        {navData.links.map((link, idx) => (
          <NavLink title={link.title} target={link.href} className="body-txt-bold text-secondary hover:text-primary" key={idx} />
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
