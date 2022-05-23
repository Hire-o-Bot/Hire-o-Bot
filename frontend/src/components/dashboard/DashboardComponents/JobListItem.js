import React, { useState } from "react";

import editJob from "../../icons/edit.png";
import deleteJob from "../../icons/delete.png";

const JobItem = ({
  jobID,
  jobPosition,
  applications,
  jobStatus,
  jobAction,
  isOpen,
  updateIsOpen,
}) => {
  return (
    <div className="grid grid-cols-8 pl-6 my-4 text-[#333333]">
      <div>{jobID}</div>
      <div className="col-span-3">{jobPosition}</div>
      <div>{applications}</div>
      <div>{jobStatus}</div>
      <div className="pr-8 pl-1 flex justify-start">
        <button>
          <img src={editJob} alt="edit job" className="h-5 w-4" />
        </button>
      </div>
      <div className="pr-8 pl-1 flex justify-start ">
        <button>
          <img src={deleteJob} alt="edit job" className="h-5 w-4" />
        </button>
      </div>
    </div>
  );
};

export default JobItem;
