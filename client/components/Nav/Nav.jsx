import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import LoginPopup from "@/components/LoginPopup";
import Logo from "../Logo";
import Button from "../Button";
import NavLink from "./NavLink";

const navData = {
  links: [
    { title: "Toolbox", href: "/toolbox" },
    { title: "About Us", href: "/about-us" },
    // TODO: Update this place holder link to the actual wordpress site
    { title: "Wordpress Link", href: "/" },
  ],
};

export default function Nav() {
  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user`, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        console.log("Fetch response:", response);
        if (response.ok) {
          const userData = await response.json();
          console.log("User data:", userData);
          setUser(userData);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch user data");
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Perform logout logic here
      setIsLoggedIn(false);
    } else {
      // Show login popup
      setShowLoginPopup(true);
    }
  };

  return (
    <nav className="absolute top-0 left-0 p-6 flex justify-between w-full">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex items-center gap-10">
        {navData.links.map((link, idx) => (
          <NavLink title={link.title} target={link.href} key={idx} />
        ))}

        {user ? (
          <Link href="/profile" className="w-12 h-12 mr-4 rounded-full overflow-hidden">
            <Image
              src={user.profilePicture}
              alt={user.displayName}
              width={64}
              height={64}
              className="object-cover"
            />
          </Link>
        ) : (
          <div onClick={handleLoginLogout}>
            <Button text={"Log In"} />
          </div>
        )}
        {/* 
          TODO: Add dynamic profile link/icon if there is a user authenticated
         */}
      </div>

      {/* Popup */}
      {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />}
    </nav>
  );
}
