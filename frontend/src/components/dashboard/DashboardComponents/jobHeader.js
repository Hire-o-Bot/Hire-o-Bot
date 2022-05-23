import React from "react";

const JobHeader = () => {
  return (
    <div className="grid grid-cols-8 pl-6 text-[  #555555] font-semibold">
      <div>ID</div>
      <div className="col-span-3">POSITION</div>
      <div>CANDIDATES</div>
      <div>STATUS</div>
      <div>Edit</div>
      <div>Delete</div>
    </div>
  );
};

export default JobHeader;
