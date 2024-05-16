import React, { useState } from "react";
import { VscLibrary } from "react-icons/vsc";
import { BiLibrary } from "react-icons/bi";
import {  FaPlus } from "react-icons/fa6";


const SideBarCloseLibrary = ({state, fun}) => {
    const [libraryOpen, setLibraryOpen] = useState(false);

  const libraryHandeler = () => {
    setLibraryOpen(true);
    fun(!state)
  };
  return (
    <div className="rounded-md bg-[#0a0e16] m-1 p-4 h-[70vh] ">
      <div>
        <div className="my-2">
          <div
            className={`flex justify-center items-center gap-2 hover:text-white ${
              !libraryOpen && "text-gray-400"
            }`}
            onClick={libraryHandeler}
          >
            {!libraryOpen ? (
              <BiLibrary className="text-[30px]" />
            ) : (
              <VscLibrary className="text-[30px]" />
            )}
          </div>
          <div className="flex justify-center my-5 gap-5 items-center text-gray-400 text-[15px]">
            <FaPlus className="hover:text-white cursor-pointer" />
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default SideBarCloseLibrary
