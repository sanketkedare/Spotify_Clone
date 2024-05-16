import React from "react";
import PlayBarSettings from "./PlayBarSettings";
import SongInfo from "./SongInfo";
import Media from "./Media";

const CurrentSong = () => {
  return (
    <div className="pt-2 w-full h-full ">
      <div className="bg-black h-full flex justify-between items-center px-2">
        <SongInfo />
        <Media />
        <PlayBarSettings />
      </div>
    </div>
  );
};

export default CurrentSong;
