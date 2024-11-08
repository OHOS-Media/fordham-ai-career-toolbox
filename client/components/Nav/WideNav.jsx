import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo";
import NavLink from "./NavLink";
import Button from "../Button";
import ErrorAlert from "../ErrorAlert";

export default function WideNav({ navData, isAuthenticated, login, user, error, setError }) {
  return (
    <nav className="w-full max-w-5xl w-2/3 flex sticky top-5 justify-between px-6 py-2 shadow-md border-[1px] border-white rounded-full bg-white/50 backdrop-blur-md z-20">
      <div className="flex items-center gap-10">
        <Logo />
      </div>

      <div className="flex items-center gap-12">
        {navData.links.map((link, idx) => (
          <NavLink
            title={link.title}
            target={link.href}
            className="body-txt-md-bold text-secondary hover:text-primary"
            key={idx}
          />
        ))}

        {/* Uncomment the lines below to enable authentication */}
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
          <Button text="Log In" className={"rounded-full"} onClick={login} />
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
