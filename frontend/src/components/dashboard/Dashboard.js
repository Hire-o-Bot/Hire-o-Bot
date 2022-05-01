import React from "react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import homeImg from "../icons/home.png";
import editProf from "../icons/editProf.png";
import viewProf from "../icons/viewProf.png";
import AddNew from "../icons/addNew.png";
import ViewAll from "../icons/viewAll.png";
import menuIcon from "../icons/menu.png";
import notificatonIcon from "../icons/notificationIcon.png";
import dropDownIcon from "../icons/dropDownIcon.png";
import AddNewJob from "./AddJob";

const Dashboard = () => {
  const [isOpen, updateIsOpen] = useState(false);

  return (
    <div className="flex flex-row">
      <div className="bg-[#1A1A3C] w-64 h-screen">
        <div className="text-3xl font-semibold text-white font-raleway text-center pt-5 pb-3 pr-7 border-white/30 border-b border-solid">
          HiroBot
        </div>

        <div className="ml-10 pb-5 mr-10 pt-10 border-white/30 border-b border-solid">
          <SectionHeading heading="MAIN" />
          <div className="text-white font-raleway font-semibold text-base flex flex-row mt-2">
            <img src={homeImg} alt="hhh" className="h-5 w-5" />
            <div className="pl-4">
              <p>Dashboard</p>
            </div>
          </div>
        </div>

        <div className="ml-10 pb-5 mr-10 pt-7 border-white/30 border-b border-solid">
          <SectionHeading heading="PROFILE" />
          <div className="text-white font-raleway font-semibold text-base flex flex-row mt-2">
            <img src={viewProf} alt="hhh" className="h-5 w-5" />
            <div className="pl-4">
              <p>View Profile</p>
            </div>
          </div>
          <div className="text-white font-raleway font-semibold text-base flex flex-row mt-2">
            <img src={editProf} alt="hhh" className="h-5 w-5" />
            <div className="pl-4">
              <p>Edit Profile</p>
            </div>
          </div>
        </div>

        <div className="ml-10 pb-5 mr-10 pt-7 border-white/30 border-b border-solid">
          <SectionHeading heading="JOBS" />
          <div className="text-white font-raleway font-semibold text-base flex flex-row mt-2">
            <img src={AddNew} alt="hhh" className="h-5 w-5" />
            <div className="pl-4">
              <p>Add New Job</p>
            </div>
          </div>

          <div
            className="text-white font-raleway font-semibold text-base flex flex-row mt-2 "
            style={{ marginLeft: "-5px" }}
          >
            <img src={ViewAll} alt="hhh" className="h-7 w-7" />
            <div className="pl-4" style={{ marginLeft: "-3px" }}>
              <p>View All Jobs</p>
            </div>
          </div>
        </div>
      </div>

      {/*Navigation Bar*/}
      <div className="flex flex-col">
        <div className="bg-[#1A1A3C] w-screen h-[69px] border-white/30 border-l border-solid flex flex-row justify-between items-center ">
          {/*Menu button*/}
          <div className="pl-10">
            <img src={menuIcon} alt="menu icon" className="h-7 w-7" />
          </div>
          {/*Company profile and notification button on top right corner on navigation bar*/}
          <div className="flex flex-row ">
            <div className="pr-6">
              <img src={notificatonIcon} alt="menu icon" className="h-7 w-7" />
            </div>

            <div className="flex flex-row items-center">
              <p className="text-white font-semibold text-base pr-3">Clustox</p>
            </div>
            <div className="relative  pr-8 pl-1">
              <button
                className="relative z-10 pt-2"
                onClick={() => updateIsOpen(!isOpen)}
              >
                <img
                  src={dropDownIcon}
                  alt="menu icon"
                  className="h-3 w-3 cursor-pointer"
                />
              </button>
              {isOpen ? (
                <button
                  className="fixed top-0 bottom-0 left-0 right-0 h-full w-full cursor-default"
                  tabIndex="-1"
                  onClick={() => updateIsOpen(false)}
                ></button>
              ) : null}
              {isOpen ? (
                <div className="absolute right-0  w-48 mt-3 shadow-xl bg-white rounded-lg py-2 ">
                  <div>
                    <a
                      href="aaa"
                      className="block px-4 py-2 text-gray-800 hover:bg-[#1A1A3C] hover:text-white"
                    >
                      Profile Edit
                    </a>
                  </div>
                  <a
                    href="aa"
                    className="block px-4 py-2 text-gray-800 hover:bg-[#1A1A3C] hover:text-white"
                  >
                    View All Jobs
                  </a>
                  <a
                    href="aa"
                    className="block px-4 py-2 text-gray-800 hover:bg-[#1A1A3C] hover:text-white"
                  >
                    Add New Jobs
                  </a>
                  <a
                    href="aa"
                    className="block px-4 py-2 text-gray-800 hover:bg-[#1A1A3C] hover:text-white"
                  >
                    Log Out
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <AddNewJob />
      </div>
    </div>
  );
};

export default Dashboard;
