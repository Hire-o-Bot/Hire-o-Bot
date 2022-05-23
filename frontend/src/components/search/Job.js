import React from "react";
import LinkTo from "../items/LinkTo";

const Job = ({ data }) => {
  const { jobPosition, minExperience, jobDescription, technologies } = data;
  return (
    <div className='p-8 bg-[#ffffff] border border-[#cccccc] rounded-md flex flex-col justify-between'>
      <div className=''>
        <h3 className='text-2xl font-bold text-[#001E2B] mb-5'>
          {jobPosition}
        </h3>
        <p className='flex justify-between items-center mb-3'>
          <span className='text-lg font-bold text-[#444444]'>
            Experience Required
          </span>
          <span className='py-1.5 px-3 border border-[#cccccc] bg-[#eaeaea] rounded-sm'>
            {minExperience} years
          </span>
        </p>
        <div className='flex flex-wrap mb-3'>
          {technologies &&
            technologies.length > 0 &&
            technologies.map((cur) => (
              <div className='mr-2 mb-2 bg-[#abedb6] text-[#006100] uppercase text-sm font-bold rounded-sm py-1.5 px-3 border border-[#006100]'>
                {cur}
              </div>
            ))}
        </div>
        <p className='mb-3'>
          {jobDescription.length > 30
            ? `${jobDescription.substring(0, 100)}...`
            : jobDescription}
        </p>
      </div>

      <LinkTo url={"/job/id"} value={"View Job"} alignRight={true} />
    </div>
  );
};

export default Job;
