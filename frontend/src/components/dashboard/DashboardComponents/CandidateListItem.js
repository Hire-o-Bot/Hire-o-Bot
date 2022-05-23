import React from "react";

import tickIcon from "../../icons/tick.png";
import crossIcon from "../../icons/cross.png";

const JobItem = ({
  CandidateName,
  Experience,
  isResume,
  isTest,
  isInterview,
  Score,
}) => {
  return (
    <div className="grid grid-cols-7 pl-6 my-4 text-[#555555]">
      <div className="col-span-2">{CandidateName}</div>
      <div>{Experience}</div>
      <div>
        {isResume ? (
          <img className="h-5 w-5" alt="tick" src={tickIcon} />
        ) : (
          <img className="h-5 w-5" alt="tick" src={crossIcon} />
        )}
      </div>
      <div>
        {isTest ? (
          <img className="h-5 w-5" alt="tick" src={tickIcon} />
        ) : (
          <img className="h-5 w-5" alt="tick" src={crossIcon} />
        )}
      </div>
      <div>
        {isInterview ? (
          <img className="h-5 w-5" alt="tick" src={tickIcon} />
        ) : (
          <img className="h-5 w-5" alt="tick" src={crossIcon} />
        )}
      </div>
      <div className="text-[#7FCEAA] font-semibold"> {Score}</div>
    </div>
  );
};

export default JobItem;
