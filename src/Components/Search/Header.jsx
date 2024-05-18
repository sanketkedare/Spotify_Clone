import React from "react";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

const Header = () => {
  return (
    <div className="fixed flex justify-between items-center  h-[50px]  w-3/4">
      <div className="flex w-[10%] justify-evenly items-center">
        <IoChevronBackCircleOutline />
        <IoChevronForwardCircleOutline />
      </div>
      <div className="w-2/4  h-full">
        <input type="text" placeholder="What do you want to play" className="px-4 bg-black  border border-black w-full h-[80%] rounded-xl text-white"/>
      </div>
      <div className="w-1/4 flex justify-center items-center">Extras</div>
    </div>
  );
};

export default Header;
