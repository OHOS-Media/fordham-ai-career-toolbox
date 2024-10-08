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
    { title: "Blog", href: "/Blog" },
    { title: "F.A.Q", href: "/faq" },
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
    <footer className="flex justify-center py-16 bg-primary w-full text-white">
      <div className="flex flex-col-reverse lg:flex-row w-11/12 lg:w-5/6 gap-6 lg:gap-0">
        <div className="flex flex-col lg:w-1/3 gap-4">
          <h3 className="h3">Fordham University</h3>
          <p className="body-txt color-secondary opacity-70">{footerData.description}</p>

          <div className="flex gap-8">
            {footerData.socialLinks.map((link, idx) => (
              <SocialIconLink title={link.title} target={link.href} icon={link.icon} key={idx} />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-fit lg:w-2/3 gap-8 lg:justify-evenly">
          {footerData.links.map((link, idx) => (
            <FooterLink title={link.title} target={link.href} key={idx} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
