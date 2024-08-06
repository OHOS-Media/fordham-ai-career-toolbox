import NumberIcon from "./NumberIcon";

const StepCard = ({ number, text }) => {
  return (
    <div className="flex flex-col bg-neutral content-center p-2 h-44 w-1/4 rounded-md">
      <NumberIcon number={number} />
      <p className="p-2 mt-8">{text}</p>
    </div>
  );
};

export default StepCard;
