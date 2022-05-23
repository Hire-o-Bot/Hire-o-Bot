import React from "react";
import Button from "../../../items/Button";

export const Experience = ({
  company,
  joinDate,
  endDate,
  position,
  description,
  handleDeleteExperience,
}) => {
  return (
    <div className='p-7 bg-white border border-[#cccccc] mb-5 rounded-md overflow-hidden flex justify-between items-center'>
      <div className=''>
        <div className='flex'>
          <div className='pt-1.5'>
            <p className='text-md font-bold'>
              <span className=''>{joinDate}</span> -{" "}
              <span className=''>{endDate}</span>
            </p>
          </div>
          <div
            className='
        ml-16 pl-16 relative
        after:absolute after:left-0 after:top-3 after:w-[11px] after:h-[11px] after:bg-[#001E2B] after:rounded-full
        before:absolute before:left-[5px] before:top-3 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-[#001E2B]
        before:to-transparent
        '>
            <h3 className='text-2xl font-bold mb-2 text-[#001E2B]'>
              <span>{position}</span>
            </h3>
            <h4 className='text-xl text-[#555555] font-bold italic mb-2'>
              {company}
            </h4>
            <p className='text-md text-[#333333]'>{description}</p>
          </div>
        </div>
      </div>
      <div className=''>
        <Button
          value='Delete'
          type='danger'
          handleClick={handleDeleteExperience}
        />
      </div>
    </div>
  );
};
export default Experience;
