import FAQSection from "@/components/FAQPage/FAQSection";
import { client } from "@/src/sanity/lib/client";

export default function FAQ({ FAQPageData }) {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center bg-neutral w-full pt-36">
      <h1 className="h2 text-secondary">Frequently Asked Questions</h1>
      <FAQSection FAQPageData={FAQPageData} />
    </div>
  );
}

export async function getStaticProps() {
  const FAQPageData = await client.fetch("*[_type == 'faq']");

  return {
    props: {
      FAQPageData,
    },
    revalidate: 30, // Revalidate every 30 seconds
  };
}
