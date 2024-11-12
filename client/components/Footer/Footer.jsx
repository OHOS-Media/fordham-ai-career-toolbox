import { urlFor } from "@/src/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import FooterLink from "./FooterLink";

const Footer = ({ data }) => {
  if (!data) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-16 w-full relative overflow-hidden z-10">
      <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-tertiary via-neutral to-tertiary opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">RAMResume</h2>
            <p className="text-sm mb-4">{data.description}</p>
            <div className="flex gap-4 mt-4">
              {data.socialLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.path}
                  className="hover:opacity-80 transition-opacity w-6 h-6 flex items-center justify-center"
                >
                  <Image
                    src={urlFor(link.icon).url()}
                    width={24}
                    height={24}
                    alt={link.title}
                    className="w-full h-full object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {data.links.map((section, idx) => (
            <div key={idx} className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-4 text-tertiary">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-gray-300">
                    <FooterLink title={item.title} path={item.path} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-tertiary">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>{data.contact.email}</li>
              <li>{data.contact.phone}</li>
              <li>{data.contact.address}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pt-4 mt-8">
        <p className="text-center text-sm text-white/70">
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

      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-tertiary opacity-5 rounded-full -mb-16 -mr-16 blur-3xl"></div>
    </footer>
  );
};

export default Footer;
