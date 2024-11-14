import { urlFor } from "@/src/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import FooterLink from "./FooterLink";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const Footer = ({ data }) => {
  if (!data) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative overflow-hidden z-10 pt-20 mb-20 border-t border-white/20">
      <div className="container w-full mx-auto px-4 md:px-0 relative z-10">
        <div className="flex flex-col md:flex-row gap-20">
          {/* Brand Section */}
          <div className="flex-shrink-0 md:w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-fordham-white">RAMResume</h2>
            <p className="text-sm mb-4 text-fordham-light-gray/60">{data.description}</p>
            <div className="flex gap-4 mt-4">
              {data.socialLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.path}
                  className="hover:opacity-80 transition-opacity w-4 h-4 flex items-center justify-center"
                >
                  <Image
                    src={urlFor(link.icon).url()}
                    width={20}
                    height={20}
                    alt={link.title}
                    className="w-full h-full object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Links and Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
            {/* Navigation Links */}
            {data.links.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-base font-semibold mb-4 text-fordham-white">{section.title}</h3>
                <ul className="text-base space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-fordham-light-gray/60">
                      <FooterLink title={item.title} path={item.path} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Section */}
            <div>
              <h3 className="text-base font-semibold mb-4 text-fordham-white">Contact Us</h3>
              <div className="space-y-4 text-base text-fordham-light-gray/60">
                <div className="flex items-start">
                  <IconMail size={20} strokeWidth={1.5} className="min-w-[20px] mr-4 mt-1" />
                  <span>{data.contact.email}</span>
                </div>
                <div className="flex items-start">
                  <IconPhone size={20} strokeWidth={1.5} className="min-w-[20px] mr-4 mt-1" />
                  <span>{data.contact.phone}</span>
                </div>
                <div className="flex items-start">
                  <IconMapPin size={20} strokeWidth={1.5} className="min-w-[20px] mr-4 mt-1" />
                  <div className="flex flex-col space-y-4">
                    <span>
                      The Personal and Professional Development Center The Gabelli School of
                      Business
                    </span>

                    <span>441 E Fordham Road The Bronx, NY 10458</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-fordham-dark-gray pt-10 mt-10">
          <p className="text-center text-sm text-fordham-light-gray/60">
            © {currentYear} RAMResume. Developed by{" "}
            <a
              href="https://ohos.nyc"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              OHOS Media
            </a>{" "}
            in collaboration with{" "}
            <a
              href="https://www.fordham.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Gabelli School of Business
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
