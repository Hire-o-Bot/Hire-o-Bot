import React from "react";
import { useState } from "react";
import Job from "./Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([
    {
      jobPosition: "Frontend developer",
      minExperience: "11",
      lowerRange: "120",
      upperRange: "130",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      technologies: ["ReactJS", "redux", "Angular", "mobx"],
    },
  ]);
  return (
    <div>
      <div className='w-4/5 mx-auto'>
        <div className='grid grid-cols-3 gap-8'>
          {jobs && jobs.length > 0 && jobs.map((cur) => <Job data={cur} />)}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
