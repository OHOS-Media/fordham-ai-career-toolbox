import React from "react";
import Image from "next/image";
import BackArrow from "@/public/assets/Back.svg";

export default function BackButton() {
  return (
    <Image
      src={BackArrow}
      alt="Back Arrow"
      width={40}
      height={40}
      className="hover:opacity-50 hover:cursor-pointer"
    />
  );
}
