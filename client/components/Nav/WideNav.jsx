import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo";
import NavLink from "./NavLink";
import Button from "../Button";
import ErrorAlert from "../ErrorAlert";

export default function WideNav({ navData, isAuthenticated, login, user, error, setError }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Check if we're at the top
      setAtTop(currentScrollPos < 10);

      // Determine scroll direction and visibility
      setVisible(
        // Show nav when:
        // 1. Scrolling up
        // 2. At the top of the page
        // 3. User hasn't scrolled past threshold (100px)
        prevScrollPos > currentScrollPos || currentScrollPos < 10 || currentScrollPos < 100
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`
        w-full
        sticky top-0 z-50 px-4 pt-10
        transition-all duration-500 transform
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav
        className={`
        w-full max-w-5xl mx-auto
        flex justify-between items-center
        px-6 py-4
        rounded-2xl
        bg-white/5 backdrop-blur-[15px] shadow-[2px_4px_30px_0px_rgba(0,0,0,0.10)]
        transition-all duration-300
      `}
      >
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex items-center gap-5">
          {navData.links.map((link, idx) => (
            <NavLink
              key={idx}
              title={link.title}
              target={link.href}
              className={`
                transition-colors duration-200
                ${
                  atTop
                    ? "text-fordham-white hover:text-fordham-gray"
                    : "text-fordham-white hover:text-fordham-gray"
                }
              `}
            />
          ))}

          {isAuthenticated ? (
            <Link href="/profile">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={user.profilePicture}
                  alt={user.displayName}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </Link>
          ) : (
            <Button text="Log In" variant="primary" onClick={login} className="h-9" />
          )}
        </div>
      </nav>

      {error && (
        <ErrorAlert
          errorMessage={error}
          setErrorMessage={setError}
          errorAlertActive={!!error}
          setErrorAlertActive={() => setError(null)}
        />
      )}
    </header>
  );
}
