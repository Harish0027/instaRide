import React from "react";
import { customButtonProps } from "@/types/index";

const CustomButton= ({ title, containerStyles, handleClick }:customButtonProps) => {
  return (
    <button className={`custom-btn ${containerStyles}`} onClick={handleClick}>
      {title}
    </button>
  );
};

export default CustomButton;
