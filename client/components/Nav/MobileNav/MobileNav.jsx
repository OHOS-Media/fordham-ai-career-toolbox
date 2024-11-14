import { useState } from "react";
import NavToggle from "./NavToggle";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import MobileNavMenu from "./MobileNavMenu";

export default function MobileNav({
  navData,
  isAuthenticated,
  login,
  user,
  error,
  setError,
  scrolled,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-300
      ${
        isOpen
          ? "bg-fordham-black h-screen"
          : scrolled
            ? "bg-fordham-black/95 backdrop-blur-sm"
            : "bg-transparent"
      }
    `}
    >
      <div className="px-4 py-2 flex justify-between items-center">
        <Logo />
        <NavToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {isOpen && (
        <MobileNavMenu
          navData={navData}
          isAuthenticated={isAuthenticated}
          login={login}
          user={user}
          setIsOpen={setIsOpen}
        />
      )}
    </nav>
  );
}
