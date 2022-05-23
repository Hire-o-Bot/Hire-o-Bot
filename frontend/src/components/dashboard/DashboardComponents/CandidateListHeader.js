import React from "react";

const CandidateListHeader = () => {
  return (
    <div className="grid grid-cols-7 pl-6 text-[#555555] font-semibold uppercase">
      <div className="col-span-2">Candidate</div>
      <div>Experience</div>
      <div>Resume</div>
      <div>Test</div>
      <div>Interview</div>
      <div>Score</div>
    </div>
  );
};

export default CandidateListHeader;
