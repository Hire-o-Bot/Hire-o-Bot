import React from "react";
import { useState } from "react";
import { addJob } from "../../state/actions/Jobs";
import { connect } from "react-redux";
import ExperienceBox from "./ExperienceBox";
import JobPosition from "./JobPositionBox";
import ExpectedSalary from "./ExpectedSalaryBox";
import JobDescriptionBox from "./JobDescriptionBox";
import Technologies from "./TechnologiesBox";
import SubmitButton from "./SubmitButton";

const AddNewJob = ({ addJob }) => {
  const [jobInfo, setUserCredentials] = useState({
    jobPosition: "",
    minExperience: "",
    lowerRange: "",
    upperRange: "",
    jobDescription: "",
    technologies: "",
    techList: [],
  });

  const {
    jobPosition,
    minExperience,
    lowerRange,
    upperRange,
    jobDescription,
    technologies,
    techList,
  } = jobInfo;

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    addJob(
      jobPosition,
      minExperience,
      lowerRange,
      upperRange,
      jobDescription,
      techList
    );
  };

  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      if (techList.indexOf(e.target.value) === -1) {
        techList.push(e.target.value);
        setUserCredentials({
          ...jobInfo,
          techList: techList,
          technologies: "",
        });
        console.log(jobInfo);
      } else {
        console.log(jobInfo);
        setUserCredentials({
          ...jobInfo,
          technologies: "",
        });
      }
    }
  };

  const onChange = (e) => {
    setUserCredentials({ ...jobInfo, [e.target.name]: e.target.value });
    console.log(jobInfo);
  };

  const removeTechnology = (e) => {
    const ele = e.currentTarget.parentNode.getAttribute("data-key");
    var index = techList.indexOf(ele);
    if (index > -1) {
      techList.splice(index, 1);
      setUserCredentials({
        ...jobInfo,
        techList: techList,
      });
    }
  };

  return (
    <div className="bg-[#E5E5E5]">
      <div className="h-16 bg-white shadow-xl flex items-center justify-center">
        <div className="text-black font-semibold text-2xl ">Add New Job</div>
      </div>
      <div className="flex mt-4 justify-center">
        <form
          className="flex flex-col  mb-12 w-[700px] h-[600px] bg-white shadow-xl border border-[1px] border-[#cccccc]"
          onSubmit={(e) => handleFormSubmission(e)}
        >
          <JobPosition
            name="jobPosition"
            value={jobPosition}
            onChange={onChange}
            placeholder="Frontend Developer e.g"
            label="Job Position"
          />

          <ExperienceBox
            name="minExperience"
            value={minExperience}
            onChange={onChange}
            placeholder="Fresh e.g"
            label="Minimum Experience"
          />

          <ExpectedSalary
            onChange={onChange}
            lowerRange={lowerRange}
            upperRange={upperRange}
          />

          <JobDescriptionBox
            onChange={onChange}
            name="jobDescription"
            value={jobDescription}
            placeholder=""
            label="Job Description"
          />

          <Technologies
            onChange={onChange}
            removeTechnology={removeTechnology}
            techList={techList}
            onKeyPress={onKeyPress}
            name="technologies"
            value={technologies}
            placeholder="React, Node e.g."
            label="Technologies"
          />

          <div className="pb-12 pt-6 pr-8 flex justify-end">
            <SubmitButton
              handleFormSubmission={handleFormSubmission}
              value="Create Job"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { addJob })(AddNewJob);
