import React from "react";

const SalaryInputBox = ({ onChange, name, value, placeholder, label }) => {
  return (
    <div className="flex flex-row">
      <p className="px-3 py-2 bg-[#CCCCCC] font-bold border border-[1px] border-r-[0px] border-[#cccccc]">
        $
      </p>
      <input
        className="pt-2 pb-2 pr-3 pl-1 w-32 border border border-[#cccccc] focus:border-t-[#1A1A3C] focus:border-r-[#1A1A3C] focus:border-b-[#1A1A3C] outline-none"
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

export default SalaryInputBox;
