import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const Button = ({ text }) => {
  return (
    <button className="flex items-center justify-between w-[210px] h-[54px] py-[5px] pl-[10px] pr-[5px]  min-w-[200px] bg-accent group">
      <div className="flex-1 text-center track-[1.2px] font-primary font-bold text-primary text-sm uppercase">
        {text}
      </div>
      <div className="w-11 h-11 bg-primary flex items-center justify-center">
        <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
      </div>
    </button>
  );
};

export default Button;
