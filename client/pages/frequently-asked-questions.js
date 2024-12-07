import FAQSection from "@/components/FAQPage/FAQSection";
import PageContainer from "@/components/PageContainer";
import GradientContainer from "@/components/ui/GradientContainer";
import { client } from "@/src/sanity/lib/client";

export default function FAQ({ FAQPageData, faqPageContent }) {
  return (
    <PageContainer marginBottom={true}>
      <GradientContainer>
        <div className="flex flex-col">
          <div className="w-full flex flex-col items-center gap-2 py-20 px-10">
            <h1 className="h4 md:h3 text-fordham-white">
              {faqPageContent?.title || "Here to help"}
            </h1>
            <p className="body-txt-md text-center font-light text-fordham-light-gray/60">
              {faqPageContent?.description || 
                "Frequently asked questions and resources to assist you."}
            </p>
          </div>
          <FAQSection FAQPageData={FAQPageData} />
        </div>
      </GradientContainer>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const [FAQPageData, faqPageContent] = await Promise.all([
    client.fetch("*[_type == 'faq']"),
    client.fetch(`*[_type == "faqPage"][0]`)
  ]);

  return {
    props: {
      FAQPageData,
      faqPageContent,
    },
    revalidate: 30,
  };
}
