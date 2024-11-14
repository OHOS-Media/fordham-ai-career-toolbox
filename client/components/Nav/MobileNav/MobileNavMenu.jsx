// components/Nav/MobileNav/MobileNavMenu.jsx
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function MobileNavMenu({ navData, isAuthenticated, login, user, setIsOpen }) {
  const handleClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div className="flex flex-col items-center pt-20 px-4">
      {/* Auth Section */}
      <div className="mb-12 w-full">
        {isAuthenticated ? (
          <Link href="/profile" onClick={handleClick}>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-fordham-brown/50">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={user.profilePicture}
                  alt={user.displayName}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <span className="text-fordham-white">{user.displayName}</span>
            </div>
          </Link>
        ) : (
          <Button
            text="Log In"
            onClick={login}
            className="w-full bg-gradient-to-r from-[#7E1515] to-[#F34848] text-fordham-white"
          />
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col w-full space-y-6">
        {navData.links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="text-fordham-white text-2xl font-medium hover:text-fordham-gray transition-colors p-2"
            onClick={handleClick}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
