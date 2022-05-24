import React from "react";
import { useState } from "react";
import Job from "./Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([
    {
      jobPosition: "Frontend developer",
      minExperience: "3",
      lowerRange: "30000",
      upperRange: "40000",
      jobDescription:
        "Job is for only the skilled candidates. Those with one year experience can only apply.",
      technologies: ["ReactJS", "HTML", "Javascript", "CSS"],
    },
    {
      jobPosition: "Frontend developer",
      minExperience: "3",
      lowerRange: "30000",
      upperRange: "40000",
      jobDescription:
        "Job is for only the skilled candidates. Those with one year experience can only apply.",
      technologies: ["ReactJS", "HTML", "Javascript", "CSS"],
    },
    {
      jobPosition: "Frontend developer",
      minExperience: "3",
      lowerRange: "30000",
      upperRange: "40000",
      jobDescription:
        "Job is for only the skilled candidates. Those with one year experience can only apply.",
      technologies: ["ReactJS", "HTML", "Javascript", "CSS"],
    },
    {
      jobPosition: "Frontend developer",
      minExperience: "3",
      lowerRange: "30000",
      upperRange: "40000",
      jobDescription:
        "Job is for only the skilled candidates. Those with one year experience can only apply.",
      technologies: ["ReactJS", "HTML", "Javascript", "CSS"],
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
