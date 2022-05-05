import React from "react";

const Technologies = ({
  onChange,
  removeTechnology,
  techList,
  onKeyPress,
  name,
  value,
  placeholder,
  label,
}) => {
  return (
    <div className="pl-8 pt-4 w-full pr-8">
      <h1 className="font-medium text-[#333333] text-base ">Technologies</h1>
      <div className="flex flex-row justify-start items-center border border-t-[.5px] border-[#cccccc] outline-none">
        {techList.map((ele) => {
          return (
            <div
              className="py-2 pl-3 pr-2 m-2 bg-[#EFEFEF]  flex flex-row"
              key={ele}
              data-key={ele}
            >
              <div>{ele}</div>
              <button
                type="button"
                className="pl-4 font-semibold"
                onClick={(key) => {
                  removeTechnology(key);
                }}
              >
                x
              </button>
            </div>
          );
        })}
        <input
          className="w-full pt-2 pb-2 pr-3 pl-2 my-2 outline-none"
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyPress(e)}
          placeholder={placeholder}
          label={label}
        />
      </div>
    </div>
  );
};

export default Technologies;
