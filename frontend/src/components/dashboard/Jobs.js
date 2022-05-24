import React from "react";
import listIcon from "../icons/listIcon.png";
import tilesIcon from "../icons/tilesIcon.png";
import JobItem from "./DashboardComponents/JobListItem";
import SubmitButton from "./DashboardComponents/SubmitButton";
import { useEffect, useState } from "react";
import { getJobs } from "../../state/actions/Jobs";
import { connect } from "react-redux";
import JobHeader from "./DashboardComponents/jobHeader";
import JobItemTileView from "./DashboardComponents/JobTileItem";

const Jobs = ({ jobs, isLoading, getJobs }) => {
  useEffect(() => {
    getJobs();
  }, [getJobs]);

  const [tileView, setTileView] = useState(true);

  return (
    <div>
      <div className='bg-[#EEEEEF] h-full'>
        <div className='h-16 bg-white shadow-lg flex items-center justify-center'>
          <div className='text-black font-semibold text-2xl '>Jobs Posted</div>
        </div>
        <div>
          <div className='max-w-4xl mx-auto mb-8'>
            <div className='mt-12 flex items-center justify-end'>
              <div className='px-4'>View As</div>
              <button
                className='p-2 mr-2 rounded-sm bg-[#2A2A4A]'
                onClick={(e) => setTileView(false)}>
                <img
                  className='h-3 w-3 cursor-pointer'
                  src={listIcon}
                  alt='list icon'
                />
              </button>
              <button
                className='p-2 mr-20 rounded-sm'
                onClick={(e) => setTileView(true)}>
                <img
                  className='h-3 w-3 cursor-pointer text-white'
                  src={tilesIcon}
                  alt='tiles icon'
                />
              </button>
              <SubmitButton value='Add New Job' />
            </div>
          </div>
          <div className=''>
            {!tileView ? (
              <div className='w-[800px] bg-white shadow-lg rounded-sm border pb-8 z-1'>
                <div className='mb-4 pb-1 mt-2 border-b border-[#C5C6C9]'>
                  <JobHeader />
                </div>
                <JobItem
                  jobID={"1"}
                  jobPosition={"Full Stack Developer"}
                  applications={"0"}
                  jobStatus={"Active"}
                  jobAction={"Delete"}
                />
                <JobItem
                  jobID={"2"}
                  jobPosition={"Backend Developer"}
                  applications={"44"}
                  jobStatus={"Closed"}
                  jobAction={"Edit"}
                />
                <JobItem
                  jobID={"1"}
                  jobPosition={"Frontend Developer"}
                  applications={"22"}
                  jobStatus={"Active"}
                  jobAction={"Delete"}
                />
                <JobItem
                  jobID={"2"}
                  jobPosition={"Backend Developer"}
                  applications={"44"}
                  jobStatus={"Closed"}
                  jobAction={"Edit"}
                />
                <JobItem
                  jobID={"1"}
                  jobPosition={"Frontend Developer"}
                  applications={"22"}
                  jobStatus={"Active"}
                  jobAction={"Delete"}
                />
                <JobItem
                  jobID={"2"}
                  jobPosition={"Backend Developer"}
                  applications={"44"}
                  jobStatus={"Closed"}
                  jobAction={"Edit"}
                />
              </div>
            ) : (
              <div className='grid grid-cols-3 gap-[30px] max-w-4xl mx-auto'>
                <JobItemTileView />
                <JobItemTileView />
                <JobItemTileView />
                <JobItemTileView />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* ) : (
          <p>No Jobs Found</p>
        )
      ) : (
        <p>Loading</p>
      )} */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, { getJobs })(Jobs);
