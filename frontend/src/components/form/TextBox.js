import React from "react";

const TextBox = ({
  value,
  onChange,
  name,
  placeholder,
  label,
  disabled = false,
}) => {
  return (
    <div className='w-full relative mb-4 rounded-md overflow-hidden'>
      <textarea
        className={`w-full py-2.5 pr-3 pl-3 border border-[#cccccc] outline-none rounded-md h-32 ${
          disabled ? "bg-[#eaeaea]" : "bg-white"
        }`}
        type='textbox'
        value={value}
        onChange={(e) => onChange(e)}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default TextBox;
