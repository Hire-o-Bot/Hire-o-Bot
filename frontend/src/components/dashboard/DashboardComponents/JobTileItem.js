import React from "react";
import deleteIcon from "../../icons/delete-white-png.png";
import editIcon from "../../icons/edit-white-png.png";

const JobItemTileView = () => {
  const technologies = ["React JS", "HTML", "Javascript", "CSS"];

  return (
    <div>
      <div className="relative w-[234px] h-[290px] bg-white shadow-lg rounded-sm border border-[#C5C6C9] ml-8 mb-8 pl-5 flex flex-col">
        <div className="text-[#777777] pt-5 text-xs ">30 Applications</div>
        <div className="font-semibold text-sm  Gmt-2">Frontend Developer</div>
        <div className="text-[#777777] text-xs">May 22, 2022</div>
        <div className="flex justify-start flew-wrap mt-3">
          <div className="flex flex-wrap">
            {technologies.map((ele) => {
              return (
                <div
                  className={`flex justify-start flew-wrap px-2 py-1 mr-2 mt-1  text-xs bg-[#EFEFEF]`}
                  key={ele}
                >
                  {ele}
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-[#555555] text-sm mt-2">
          Job is for only the skilled candidates. Those with one year experience
          can only apply.
        </div>
        <div className="absolute bottom-0 left-0 pl-5 h-10 w-[232px] bg-[#C5C6C9]">
          <div className="flex flex-row justify-between mt-2">
            <div>
              <div>
                <button className="p-2 mr-2 rounded-sm bg-[#2A2A4A]">
                  <img
                    className="h-3 w-3 cursor-pointer"
                    src={editIcon}
                    alt="list icon"
                  />
                </button>
                <button className="p-2 mr-2 rounded-sm bg-[#2A2A4A]">
                  <img
                    className="h-3 w-3 cursor-pointer"
                    src={deleteIcon}
                    alt="list icon"
                  />
                </button>
              </div>
            </div>
            <button className="px-1 mr-2 rounded-sm bg-[#2A2A4A] text-center text-white text-xs">
              <p className="h-4 w-8 text-center"> View</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItemTileView;
