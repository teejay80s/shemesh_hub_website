import React, { useState } from "react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

const FaqItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full border-b">
      <div className="flex items-center justify-between py-6">
        <h4 className="h4 max-w-[300px] sm:max-w-md md:max-w-max">{title}</h4>
        <button
          className="w-[44px] h-[44px] bg-accent flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiSubtractFill
              className={`text-primary text-2xl transition-opacity duration-700 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : (
            <RiAddFill
              className={`text-primary text-2xl transition-opacity duration-700 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen
            ? "max-h-[200px] opacity-100 p-[16px] transition-all duration-500 ease-out"
            : "max-h-0 opacity-0 p-0 transition-all duration-200 ease-out overflow-hidden"
        }`}
      >
        <p className="pb-8 flex items-center max-w-[860px]">{description}</p>
      </div>
    </div>
  );
};

export default FaqItem;
