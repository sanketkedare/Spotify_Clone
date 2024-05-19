import React from 'react'
import PlaylistCard from '../Playlists/PlaylistCard';
import {useState,useEffect} from 'react';
import {baseApi} from "../../api/axiosInstance";
import { Link } from "react-router-dom";

const PlayList = () => {
  const [playlists,setPlaylists] = useState(null);

  const fetchAllPlaylist = async () =>{
      try{
        const playlists = await baseApi.get("/playlist",{
          params:{
            id :'37i9dQZF1DX4Wsb4d7NKfP'
          }
        })
        
        setPlaylists(playlists.data)
      }
      catch(error){
        console.log("Error in fetching playlist",error)
      }
  }

  useEffect(() => {
    fetchAllPlaylist();

  }, [])
  
  return (
    <div className="flex flex-col">
      <div className="mt-36 ml-96 font-bold text-4xl ">
      <Link to="/playlist"><h2>Spotify PlayList</h2></Link>
      </div>
      <div className="mt-36 ml-96 flex flex-wrap gap-4">
        
        {
          playlists && 
          <PlaylistCard 
          key={playlists.id} 
          images={playlists.images} 
          name={playlists.name} 
          type={playlists.type} 
        />
        }
        
      </div>
    </div>
  )
}

export default PlayList
