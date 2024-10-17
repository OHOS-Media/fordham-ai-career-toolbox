import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

import WideNav from "./WideNav";
import MobileNav from "./MobileNav/MobileNav";

const navData = {
  links: [
    { title: "Toolbox", href: "/toolbox" },
    { title: "About Us", href: "/about-us" },
    { title: "Blog", href: "/blog" },
    { title: "F.A.Q", href: "/frequently-asked-questions" },
  ],
};

export default function Nav() {
  const { isAuthenticated, login, user, error, setError } = useAuth();
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  // This determines wether to display the Full Nav or the Mobile Nav by
  // tracking the width of the screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    setIsMobileScreen(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobileScreen ? (
    <MobileNav
      navData={navData}
      isAuthenticated={isAuthenticated}
      login={login}
      user={user}
      error={error}
      setError={setError}
    />
  ) : (
    <WideNav
      navData={navData}
      isAuthenticated={isAuthenticated}
      login={login}
      user={user}
      error={error}
      setError={setError}
    />
  );
}
