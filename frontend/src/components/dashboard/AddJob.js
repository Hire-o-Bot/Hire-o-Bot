import React from "react";
import { useState } from "react";
import { addJob } from "../../state/actions/Jobs";
import { connect } from "react-redux";

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
          <div className="pl-8 pt-4 w-full pr-8">
            <h1 className="font-bold text-[#7A7C7D] text-3xl ">Job Position</h1>
            <input
              className="w-full pt-2.5 pb-1 pr-3 pl-1 border-b border-[#cccccc] outline-none"
              type="text"
              name="jobPosition"
              value={jobPosition}
              onChange={(e) => onChange(e)}
              placeholder="Job Position"
              label="Job Position"
            />
          </div>

          <div className="pl-8 pt-4 w-full pr-8">
            <h1 className="font-medium text-[#333333] text-base ">
              Minimum Experience
            </h1>
            <input
              className="w-full pt-2 pb-2 pr-3 pl-1 border border-t-[.5px] border-[#cccccc] outline-none"
              type="text"
              name="minExperience"
              value={minExperience}
              onChange={(e) => onChange(e)}
              placeholder="Fresh e.g."
              label="Minimum Experience"
            />
          </div>
          <div className="pl-8 pt-5 w-full pr-8 flex flex-row justify-between items-center">
            <h1 className="font-medium text-[#333333] text-base ">
              Expected Salary Between
            </h1>
            <div className="flex flex-row">
              <p className="px-3 py-2 bg-[#CCCCCC] font-bold border border-[1px] border-r-[0px] border-[#cccccc]">
                $
              </p>
              <input
                className="pt-2 pb-2 pr-3 pl-1 w-32 border border-t-[.2px] border-[#cccccc] outline-none"
                type="text"
                name="lowerRange"
                value={lowerRange}
                onChange={(e) => onChange(e)}
                placeholder="Lower Range"
                label="Lower Range"
              />
            </div>{" "}
            <h1 className="font-medium text-[#333333] text-base ">And</h1>
            <div className="flex flex-row">
              <p className="px-3 py-2 bg-[#CCCCCC] font-bold border border-[1px] border-r-[0px] border-[#cccccc]">
                $
              </p>
              <input
                className="pt-2 pb-2 pr-3 pl-1 w-32 border border-t-[.2px] border-[#cccccc] outline-none"
                type="text"
                name="upperRange"
                value={upperRange}
                onChange={(e) => onChange(e)}
                placeholder="Upper Range"
                label="Upper Range"
              />
            </div>
          </div>
          <div className="pl-8 pt-4 w-full pr-8">
            <h1 className="font-medium text-[#333333] text-base ">
              Job Description
            </h1>
            <textarea
              className="w-full h-36 pt-2 pb-2 pr-3 pl-1 border border-t-[.5px] border-[#cccccc] outline-none"
              type="text"
              name="jobDescription"
              value={jobDescription}
              onChange={(e) => onChange(e)}
              placeholder=""
              label="Job Description"
            />
          </div>

          <div className="pl-8 pt-4 w-full pr-8">
            <h1 className="font-medium text-[#333333] text-base ">
              Technologies
            </h1>
            <div className="flex flex-row justify-start items-center border border-t-[.5px] border-[#cccccc] outline-none">
              {techList.map((ele) => {
                return (
                  <div
                    className="py-2 pl-3 pr-2 m-2 bg-[#EFEFEF]  flex flex-row"
                    key={ele}
                    data-key={ele}
                  >
                    <div>{ele}</div>
                    <button
                      type="button"
                      className="pl-4 font-semibold"
                      onClick={(key) => {
                        removeTechnology(key);
                      }}
                    >
                      x
                    </button>
                  </div>
                );
              })}
              <input
                className="w-full pt-2 pb-2 pr-3 pl-2 my-2 outline-none"
                type="text"
                name="technologies"
                value={technologies}
                onChange={(e) => onChange(e)}
                onKeyDown={(e) => onKeyPress(e)}
                placeholder="React, Node etc"
                label="Technologies"
              />
            </div>
          </div>
          <div className="pb-12 pt-6 pr-8 flex justify-end">
            <button
              className="w-28 p-2.5 bg-[#1A1A3C] text-white font-medium  cursor-pointer  transition rounded-md overflow-hidden"
              type="button"
              onClick={(e) => handleFormSubmission(e)}
            >
              Create Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { addJob })(AddNewJob);
