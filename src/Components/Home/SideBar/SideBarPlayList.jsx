import React, { useState } from "react";

const SideBarPlayList = () => {
  const [playLists, setPlayLists] = useState(null);

  return (
    <div className="mt-3">
      {playLists === null && (
        <div className="bg-gray-800 w-full h-[150px] rounded-xl p-4">
          <h3 className="text-white font-bold text-md my-2">
            Create Your First Playlist
          </h3>
          <h5 className="text-white font-bold text-sm">
            It's easy, we'll help you
          </h5>

          <button className="bg-white font-bold text-md text-black hover:px-3 p-2 my-3 rounded-2xl">
            Create PlayList
          </button>
        </div>
      )}
    </div>
  );
};

export default SideBarPlayList;
