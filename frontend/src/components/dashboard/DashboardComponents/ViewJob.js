import React from "react";
import CandidateListHeader from "./CandidateListHeader";
import JobAttributeCard from "./JobAttributeCard";
import CandidateListItem from "./CandidateListItem";

const ViewJob = () => {
  const technologies = ["React JS", "HTML", "Javascript", "CSS"];

  return (
    <div className=' bg-[#EEEEEF] h-full'>
      <div className='h-16 bg-white shadow-lg flex items-center justify-center'>
        <div className='text-black font-semibold text-2xl '>
          Frontend Developer
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-12 gap-[30px] mt-20'>
          <div className='col-span-3'>
            <div className='text-base font-semibold pb-2'>Job Details</div>
            <div className=' bg-white shadow-lg rounded-sm border border-[#C5C6C9] mb-4 pl-5 pb-5 flex flex-col'>
              <div className='text-[#555555] pt-5 text-xs uppercase font-semibold '>
                Position
              </div>
              <div className='font-semibold text-base  Gmt-2'>
                Frontend Developer
              </div>
              <div className='text-[#555555] pt-4 text-xs uppercase font-semibold '>
                Technologies
              </div>
              <div className='flex justify-start flew-wrap mt-[2px]'>
                <div className='flex flex-wrap'>
                  {technologies.map((ele) => {
                    return (
                      <div
                        className={`flex justify-start flew-wrap px-2 py-1 mr-2 mt-1  text-xs bg-[#EFEFEF]`}
                        key={ele}>
                        {ele}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <JobAttributeCard
              title='Experience Required'
              description='3-4 Years of Experience'
            />

            <JobAttributeCard
              title='Job Description'
              description='Job is for only the skilled candidates. Those with one year
              experience can only apply'
            />

            <JobAttributeCard
              title='Expected Salary'
              description='Between $3000 to $4000'
            />
          </div>

          <div className='col-span-9'>
            {" "}
            <div className='text-base font-semibold pb-2'>Job Details</div>
            <div className=' bg-white shadow-lg rounded-sm  pb-8 z-1'>
              <div className='mb-4 pb-1 pt-2 border-b border-[#C5C6C9]'>
                <CandidateListHeader />
              </div>
              <CandidateListItem
                CandidateName='James Steven'
                Experience='3 Years'
                isResume={true}
                isTest={true}
                isInterview={true}
                Score='70'
              />
              <CandidateListItem
                CandidateName='Ehmad Saeed'
                Experience='1 Years'
                isResume={true}
                isTest={true}
                isInterview={false}
                Score='80'
              />
              <CandidateListItem
                CandidateName='Dawood Malhi'
                Experience='2 Years'
                isResume={true}
                isTest={false}
                isInterview={false}
                Score='65'
              />
              <CandidateListItem
                CandidateName='Ayesha Tahir'
                Experience='3 Years'
                isResume={true}
                isTest={true}
                isInterview={true}
                Score='70'
              />
              <CandidateListItem
                CandidateName='Eisha Anwer'
                Experience='3 Years'
                isResume={true}
                isTest={true}
                isInterview={false}
                Score='81'
              />{" "}
              <CandidateListItem
                CandidateName='Faisal Mehboob'
                Experience='2 Years'
                isResume={true}
                isTest={false}
                isInterview={false}
                Score='55'
              />{" "}
              <CandidateListItem
                CandidateName='Ahmad Zaheer'
                Experience='8 Years'
                isResume={true}
                isTest={true}
                isInterview={true}
                Score='91'
              />{" "}
              <CandidateListItem
                CandidateName='Bareerah Muslim'
                Experience='2 Years'
                isResume={true}
                isTest={true}
                isInterview={false}
                Score='70'
              />{" "}
              <CandidateListItem
                CandidateName='Krona Emmanuel'
                Experience='5 Years'
                isResume={true}
                isTest={true}
                isInterview={true}
                Score='94'
              />{" "}
              <CandidateListItem
                CandidateName='Kinza Kanwal'
                Experience='3 Years'
                isResume={true}
                isTest={true}
                isInterview={true}
                Score='85'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewJob;
