const StatTag = ({ number, text }) => {
  return (
    <div className="flex flex-row items-center gap-4 w-1/5">
      <span className="text-h1 font-bold">{number}</span>
      <p className="body-txt text-secondary opacity-70">{text}</p>
    </div>
  );
};

export default StatTag;
