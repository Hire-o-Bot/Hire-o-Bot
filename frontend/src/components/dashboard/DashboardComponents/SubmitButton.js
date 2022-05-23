import React from "react";

const SubmitButton = ({ handleFormSubmission, value }) => {
  return (
    <button
      className='p-2 bg-[#1A1A3C] text-white font-medium  cursor-pointer  transition rounded-md overflow-hidden'
      type='button'
      onClick={(e) => handleFormSubmission(e)}>
      {value}
    </button>
  );
};

export default SubmitButton;
