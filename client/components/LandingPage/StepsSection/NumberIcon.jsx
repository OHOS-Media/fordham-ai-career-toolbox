const NumberIcon = ({ number }) => {
  return (
    <div className="flex justify-center items-center w-8 h-8 bg-tertiary rounded-full">
      <p className="text-primary text-sm">{number}</p>
    </div>
  );
};

export default NumberIcon;
