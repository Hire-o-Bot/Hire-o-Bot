import React from "react";

export const CheckBox = ({ label, id, value, dark = false }) => {
  return (
    <div className='mb-4'>
      <input type='checkbox' id={id} name={id} value={value} />
      <label
        className={`ml-3 ${dark ? "text-white" : "text-black"}`}
        htmlFor={id}>
        {label}
      </label>
      <br />
    </div>
  );
};
