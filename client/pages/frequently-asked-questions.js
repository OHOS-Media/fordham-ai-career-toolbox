import FAQSection from "@/components/FAQPage/FAQSection";
import PageContainer from "@/components/PageContainer";
import GradientContainer from "@/components/ui/GradientContainer";
import { client } from "@/src/sanity/lib/client";

export default function FAQ({ FAQPageData }) {
  return (
    <PageContainer marginBottom={true}>
      <GradientContainer>
        <div className="flex flex-col">
          <div className=" w-full flex flex-col items-center gap-2 py-20 px-10">
            <h1 className="h4 md:h3 text-fordham-white">Here to help</h1>
            <p className="body-txt-md text-center font-light text-fordham-light-gray/60 max-w-2xl">
              Frequently asked questions and resources to assist you.
            </p>
          </div>
          <FAQSection FAQPageData={FAQPageData} />
        </div>
      </GradientContainer>
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
