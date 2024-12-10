import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import WideNav from "./WideNav";
import MobileNav from "./MobileNav/MobileNav";

const navData = {
  links: [
    { title: "Toolbox", href: "/toolbox" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "FAQ", href: "/frequently-asked-questions" },
  ],
};

export default function Nav() {
  const { login } = useAuth();
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  // Handle screen resize for mobile/desktop switch
  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileScreen ? (
    <MobileNav navData={navData} login={login} />
  ) : (
    <WideNav navData={navData} login={login} />
  );
}
