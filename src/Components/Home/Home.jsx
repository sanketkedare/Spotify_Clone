import React from "react";
import SideBar from "./SideBar/SideBar";
import PlayBar from "./PlayBar.jsx/PlayBar";
import Navbar from "../NavBar/Navbar";
import AuthNavbar from "../NavBar/AuthNavbar";
import { useState } from "react";
import { fetchPodcastEpisodes } from "../../Utils/getPodcast";
import PopularArtist from "../pages/PopularArtist";
import PlayList from "../pages/PlayList";
import Album from '../pages/Album';

const Home = () => {
  const [user, setuser] = useState(false);
  return (
    <div>
      <SideBar />
      <PlayBar />
      <div className="flex ml-8 w-[60%]">
        <Navbar />
        {user ? Navbar : AuthNavbar}
      </div>
      <div className="w-[3/4]">
      <PopularArtist/>
      <PlayList/>
      <Album/>
      </div>
    </div>
  );
};

export default Home;
