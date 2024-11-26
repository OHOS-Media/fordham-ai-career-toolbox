import { useState, useEffect } from "react";
import NavToggle from "./NavToggle";
import Logo from "@/components/ui/Logo";
import MobileNavMenu from "./MobileNavMenu";
import AuthNavButton from "../AuthNavButton";

export default function MobileNav({ navData, login }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
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

  useEffect(() => {
    if (!visible) {
      setMenuIsOpen(false);
    }
  }, [visible]);

  return (
    <header
      className={`
      w-full sticky top-0 z-50 pt-10
      transition-all duration-500 transform px-5
      ${visible ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      <nav className="w-full max-w-5xl relative transition-all duration-300">
        <div
          className={`
            h-[72px] mx-auto flex
            justify-between items-center
            pl-6 pr-3 rounded-2xl z-10
          bg-white/5 backdrop-blur-[15px]
            border-[1px] border-[#3B3533]
          `}
        >
          <div className="flex items-center h-full" onClick={() => setMenuIsOpen(false)}>
            <Logo />
          </div>

          <div className="flex items-center gap-6 h-full">
            <AuthNavButton onLogin={login} />

            <NavToggle menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          </div>
        </div>

        {menuIsOpen && <MobileNavMenu navData={navData} setMenuIsOpen={setMenuIsOpen} />}
      </nav>
    </header>
  );
}
