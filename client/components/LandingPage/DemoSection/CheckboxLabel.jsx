import Image from "next/image";
import CheckBox from "/public/assets/Checkbox.svg";

const CheckboxLabel = ({ text }) => {
  return (
    <div className="flex gap-2">
      <Image src={CheckBox} alt="Demo Screenshot" width={22} height={22} />
      <p className="body-txt">{text}</p>
    </div>
  );
};

export default CheckboxLabel;
