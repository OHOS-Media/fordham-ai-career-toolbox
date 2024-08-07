import Logo from "../Logo";
import FooterLink from "./FooterLink";
import TwitterLogo from "@/public/assets/TwitterLogo.svg";
import FacebookLogo from "@/public/assets/FacebookLogo.svg";
import InstagramLogo from "@/public/assets/InstagramLogo.svg";
import LinkedInLogo from "@/public/assets/LinkedInLogo.svg";
import SocialIconLink from "./SocialIconLink";

const footerData = {
  description: "Lorem Ipsum Aliquam fusce hac purus fames id tincidunt. Sed augue nostra",
  links: [
    { title: "Toolbox", href: "/toolbox" },
    { title: "About Us", href: "/about-us" },
    { title: "Wordpress Link", href: "/" },
  ],
  socialLinks: [
    { title: "Twitter/X", href: "/", icon: TwitterLogo },
    { title: "Facebook", href: "/", icon: FacebookLogo },
    { title: "Instagram", href: "/", icon: InstagramLogo },
    { title: "LinkedIn", href: "/", icon: LinkedInLogo },
  ],
};

const Footer = () => {
  return (
    <footer className="flex justify-center py-12">
      <div className="flex flex-col w-1/5 gap-8">
        <div className="w-fit">
          <Logo />
        </div>
        <p className="color-secondary opacity-70">{footerData.description}</p>

        <div className="flex gap-8">
          {footerData.socialLinks.map((link, idx) => (
            <SocialIconLink title={link.title} target={link.href} icon={link.icon} key={idx} />
          ))}
        </div>
      </div>

      <div className="flex w-1/2 justify-evenly">
        {footerData.links.map((link, idx) => (
          <FooterLink title={link.title} target={link.href} key={idx} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
