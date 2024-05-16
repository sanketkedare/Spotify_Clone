import React, { useState } from "react";

const SideBarPodCast = () => {
  const [podcasts, setPodcasts] = useState(null);
  return (
    <div className="mt-5">
      {podcasts === null && (
        <div className="bg-gray-800 w-full h-[150px] rounded-xl p-4">
          <h3 className="text-white font-bold text-md my-2">
            Let's find some podcasts to follow
          </h3>
          <h5 className="text-white font-bold text-sm">
            We'll keep you updated on letest episodes
          </h5>

          <button className="bg-white font-bold text-md text-black hover:px-3 p-2 my-3 rounded-2xl">
            Browse podcasts
          </button>
        </div>
      )}
    </div>
  );
};

export default SideBarPodCast;
