import React, { useState } from "react";
import { VscLibrary } from "react-icons/vsc";
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import SideBarPlayList from "./SideBarPlayList";
import SideBarPodCast from "./SideBarPodCast";

const SidebarLibraries = ({state, fun}) => {
  const [libraryOpen, setLibraryOpen] = useState(false);

  const libraryHandeler = () => {
    setLibraryOpen(true);
    fun(!state)
  };

  return (
    <div className="rounded-md bg-[#0a0e16] m-1 p-4 h-[70vh]">
      <div>
        <div className=" pl-3 flex justify-between my-2">
          <div
            className={`flex items-center gap-2 hover:text-white ${
              !libraryOpen && "text-gray-400"
            }`}
            onClick={libraryHandeler}
          >
            {!libraryOpen ? (
              <BiLibrary className="text-[30px]" />
            ) : (
              <VscLibrary className="text-[30px]" />
            )}
            <span className="text-md font-bold">Your Libraries</span>
          </div>
          <div className="flex gap-5 items-center text-gray-400 text-[15px] pr-3">
            <FaPlus className="hover:text-white cursor-pointer" />
            <FaArrowRight className="hover:text-white cursor-pointer" />
          </div>
        </div>
        <SideBarPlayList />
        <SideBarPodCast />
      </div>
    </div>
  );
};

export default SidebarLibraries;
