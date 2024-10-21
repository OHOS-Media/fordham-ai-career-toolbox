import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/src/sanity/lib/image";

const Block = ({ children }) => <div className="mb-6">{children}</div>;
const H1 = ({ children }) => <h1 className="text-3xl font-bold mb-4 text-primary">{children}</h1>;
const H2 = ({ children }) => (
  <h2 className="text-2xl font-semibold mb-3 text-primary">{children}</h2>
);
const H3 = ({ children }) => (
  <h3 className="text-xl font-semibold mb-2 text-primary">{children}</h3>
);
const H4 = ({ children }) => (
  <h4 className="text-lg font-semibold mb-2 text-primary">{children}</h4>
);
const Normal = ({ children }) => <p className="mb-4 text-secondary leading-relaxed">{children}</p>;
const BlockQuote = ({ children }) => (
  <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-gray-600">
    {children}
  </blockquote>
);
const Code = ({ children }) => (
  <code className="bg-gray-100 rounded p-1 font-mono text-sm">{children}</code>
);
const ListItem = ({ children }) => <li className="mb-1">{children}</li>;
const BulletList = ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>;
const NumberedList = ({ children }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>;

const SanityImage = ({ value }) => {
  return (
    <div className="my-8">
      <Image
        src={urlFor(value).url()}
        alt={value.alt || " "}
        width={800}
        height={500}
        className="rounded-lg"
      />
      {value.caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-2">{value.caption}</figcaption>
      )}
    </div>
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
  },
  types: {
    image: SanityImage,
  },
};

const StyledPortableText = ({ value }) => {
  return (
    <div className="prose max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
};

export default StyledPortableText;
