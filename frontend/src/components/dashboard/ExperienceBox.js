import React from "react";

const ExperienceBox = ({ onChange, name, value, placeholder, label }) => {
  return (
    <div className="pl-8 pt-4 w-full pr-8">
      <h1 className="font-medium text-[#333333] text-base ">
        Minimum Experience
      </h1>
      <input
        className="w-full pt-2 pb-2 pr-3 pl-1 border border-[#cccccc] focus:border-[#1A1A3C] outline-none"
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        label={label}
      />
    </div>
  );
};

export default ExperienceBox;
