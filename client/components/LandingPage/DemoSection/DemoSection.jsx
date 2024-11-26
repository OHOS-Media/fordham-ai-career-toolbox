import DemoBlock from "./DemoBlock/DemoBlock";

const DemoSection = ({ demoOverview }) => {
  return (
    <section className="flex flex-col w-full gap-20 md:gap-40">
      {demoOverview.map((demo, idx) => (
        <DemoBlock {...demo} key={idx} />
      ))}
    </section>
  );
};

export default DemoSection;
