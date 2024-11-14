import { useState, useEffect } from "react";
import Logo from "../ui/Logo";
import NavLink from "./NavLink";
import AuthNavButton from "./AuthNavButton";

export default function WideNav({ navData, isAuthenticated, login, user, error, setError }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setAtTop(currentScrollPos < 10);
      setVisible(
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
        w-full sticky top-0 z-50 pt-10
        transition-all duration-500 transform
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav
        className={`
          w-full max-w-5xl h-[72px] mx-auto 
          flex justify-between items-center
          pl-6 pr-3 rounded-2xl
          bg-white/5 backdrop-blur-[15px]
          shadow-[2px_4px_30px_0px_rgba(0,0,0,0.10)]
          transition-all duration-300
        `}
      >
        <div className="flex items-center h-full">
          <Logo />
        </div>

        <div className="flex items-center gap-10 h-full">
          {navData.links.map((link, idx) => (
            <NavLink
              key={idx}
              title={link.title}
              target={link.href}
              className={`
                font-extralight transition-colors duration-200
                ${
                  atTop
                    ? "text-fordham-white hover:text-fordham-gray"
                    : "text-fordham-white hover:text-fordham-gray"
                }
              `}
            />
          ))}
        </div>

        <div className="flex items-center h-full">
          <AuthNavButton onLogin={login} />
        </div>
      </nav>
    </header>
  );
}
