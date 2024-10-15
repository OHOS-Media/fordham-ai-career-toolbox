import FAQSection from "@/components/FAQPage/FAQSection";

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center bg-neutral w-full pt-36">
      <h1 className="h2 text-secondary">Frequently Asked Questions</h1>
      <FAQSection />
    </div>
  )
}