import FAQSection from "@/components/FAQPage/FAQSection";
import PageContainer from "@/components/PageContainer";
import { client } from "@/src/sanity/lib/client";

export default function FAQ({ FAQPageData }) {
  return (
    <PageContainer>
      <div className=" w-full flex flex-col items-center gap-10 g-neutral">
        <h1 className="h2 text-secondary">Frequently Asked Questions</h1>
        <FAQSection FAQPageData={FAQPageData} />
      </div>
    </PageContainer>
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
