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
  console.log(navData);
  return (
    <nav className="absolute top-0 left-0 p-6 flex justify-between w-full">
      <Logo />

      <div className="flex items-center gap-10">
        {navData.links.map((link, idx) => (
          <NavLink title={link.title} target={link.href} key={idx} />
        ))}

        {/* TODO: Move the logic to log in here */}
        <Button text={"Log In"} />
        {/* 
          TODO: Add dynamic profile link/icon if there is a user authenticated
         */}
      </div>
    </nav>
  );
}
