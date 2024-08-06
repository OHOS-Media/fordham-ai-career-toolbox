import StatTag from "./StatTag";

const statisticsSectionData = [
  { number: "1M+", text: "Customers visit Albino every months" },
  { number: "93%", text: "Satisfaction rate from our customers" },
  { number: "4.9", text: "Average customer ratings out of 5.00!" },
];

const StatisticsSection = () => {
  return (
    <div className="flex w-full justify-evenly pb-16 border-b border-grey">
      {statisticsSectionData.map((stat) => (
        <StatTag number={stat.number} text={stat.text} />
      ))}
    </div>
  );
};

export default StatisticsSection;
