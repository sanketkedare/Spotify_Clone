import React, { useState } from "react";
import Advertisement from "./Advertisement";
import CurrentSong from "./CurrentSong";

const PlayBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="fixed bottom-0  w-screen h-[13vh] flex justify-center items-center text-white">
      {isLoggedIn ? <CurrentSong /> : <Advertisement />}
    </div>
  );
};

export default PlayBar;
