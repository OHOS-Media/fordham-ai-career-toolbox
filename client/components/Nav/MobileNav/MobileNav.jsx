import { useState } from "react";
import NavToggle from "./NavToggle";

import Link from "next/link";
import Image from "next/image";

import Logo from "@/components/Logo";
import FordhamLogo from "@/public/assets/FordhamLogo.svg";
import NavLink from "../NavLink";
import Button from "@/components/Button";
import ErrorAlert from "@/components/ErrorAlert";

export default function MobileNav({ navData, isAuthenticated, login, user, error, setError }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`flex flex-col absolute w-full h-fit top-0 z-10 items-center justify-end ${isOpen && "sticky min-h-screen bg-neutral"}`}
    >
      <NavToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <MobileNavMenu
          navData={navData}
          isAuthenticated={isAuthenticated}
          login={login}
          user={user}
          error={error}
          setError={setError}
          setIsOpen={setIsOpen}
        />
      )}
    </nav>
  );
}

function MobileNavMenu({ navData, isAuthenticated, login, user, error, setError, setIsOpen }) {
  return (
    <>
      <div className="absolute top-2 left-2">
        {isAuthenticated ? (
          <Link
            href="/profile"
            onClick={() =>
              setTimeout(() => {
                setIsOpen((prevState) => !prevState);
              }, 550)
            }
          >
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

      <div className="flex flex-col h-screen justify-center items-center gap-4">
        {navData.links.map((link, idx) => (
          <Link
            href={link.href}
            className="h4 text-secondary hover:text-primary"
            onClick={() =>
              setTimeout(() => {
                setIsOpen((prevState) => !prevState);
              }, 550)
            }
            key={idx}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="relative bottom-8">
        <Link
          href="/"
          onClick={() =>
            setTimeout(() => {
              setIsOpen((prevState) => !prevState);
            }, 550)
          }
        >
          <Image src={FordhamLogo} alt="Fordham Logo" width={300} height={200} />
        </Link>
      </div>
    </>
  );
}
