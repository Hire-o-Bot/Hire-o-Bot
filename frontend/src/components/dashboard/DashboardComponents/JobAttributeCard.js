import React from "react";

const JobAttributeCard = ({ title, description }) => {
  return (
    <div className=' bg-white shadow-lg rounded-sm border border-[#C5C6C9] mb-4 pl-5 pb-5 flex flex-col'>
      <div className='text-[#555555] pt-5 text-xs uppercase font-semibold '>
        {title}
      </div>
      <div className='text-[#555555] text-sm mt-2'>{description}</div>
    </div>
  );
};

export default JobAttributeCard;
