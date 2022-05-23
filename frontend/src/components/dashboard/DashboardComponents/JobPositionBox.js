import React from "react";

const JobPosition = ({ onChange, name, value, placeholder, label }) => {
  return (
    <div className="pl-8 pt-4 w-full pr-8">
      <h1 className="font-bold text-[#7A7C7D] text-3xl ">Job Position</h1>
      <input
        className="w-full pt-2.5 pb-1 pr-3 pl-1 border-b border-[#cccccc]  focus:border-[#1A1A3C] outline-none"
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

export default JobPosition;
