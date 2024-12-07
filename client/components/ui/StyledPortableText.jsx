import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/src/sanity/lib/image";

const Block = ({ children }) => <div className="mb-8">{children}</div>;

const H1 = ({ children }) => (
  <h1 className="h2 text-fordham-white mb-8">{children}</h1>
);

const H2 = ({ children }) => (
  <h2 className="h3 text-fordham-white mb-6">{children}</h2>
);

const H3 = ({ children }) => (
  <h3 className="h4 text-fordham-white mb-4">{children}</h3>
);

const H4 = ({ children }) => (
  <h4 className="h5 text-fordham-white mb-4">{children}</h4>
);

const Normal = ({ children }) => (
  <p className="text-fordham-light-gray/80 leading-relaxed mb-6">{children}</p>
);

const BlockQuote = ({ children }) => (
  <blockquote className="border-l-4 border-fordham-brown pl-6 py-2 my-8 text-fordham-light-gray/60 italic">
    {children}
  </blockquote>
);

const Code = ({ children }) => (
  <code className="bg-fordham-white/5 rounded-lg px-2 py-1 font-mono text-fordham-white text-sm">
    {children}
  </code>
);

const ListItem = ({ children }) => (
  <li className="text-fordham-light-gray/80 mb-3">{children}</li>
);

const BulletList = ({ children }) => (
  <ul className="list-disc pl-6 mb-8 space-y-2 marker:text-fordham-brown">
    {children}
  </ul>
);

const NumberedList = ({ children }) => (
  <ol className="list-decimal pl-6 mb-8 space-y-2 marker:text-fordham-brown">
    {children}
  </ol>
);

const SanityImage = ({ value }) => {
  return (
    <figure className="my-10">
      <Image
        src={urlFor(value).url()}
        alt={value.alt || " "}
        width={1200}
        height={700}
        className="w-full rounded-[16px] object-cover"
      />
      {value.caption && (
        <figcaption className="text-center text-sm text-fordham-light-gray/60 mt-4">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
};

const Link = ({ value, children }) => {
  const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
  return (
    <a
      href={value?.href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="text-fordham-brown hover:text-fordham-white transition-colors underline underline-offset-4"
    >
      {children}
    </a>
  );
};

const components = {
  block: {
    normal: Normal,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    blockquote: BlockQuote,
  },
  list: {
    bullet: BulletList,
    number: NumberedList,
  },
  listItem: ListItem,
  marks: {
    code: Code,
    link: Link,
  },
  types: {
    image: SanityImage,
  },
};

const StyledPortableText = ({ value }) => {
  return (
    <div className="w-full">
      <PortableText value={value} components={components} />
    </div>
  );
};

export default StyledPortableText;
