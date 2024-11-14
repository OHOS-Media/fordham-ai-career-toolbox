import DemoBlock from "./DemoBlock/DemoBlock";

const DemoSection = ({ demoOverview }) => {
  return (
    <section className="flex flex-col sm:w-3/4 lg:w-full gap-24 lg:gap-36">
      {demoOverview.map((demo, idx) => (
        <DemoBlock {...demo} key={idx} />
      ))}
    </section>
  );
};

export default DemoSection;
