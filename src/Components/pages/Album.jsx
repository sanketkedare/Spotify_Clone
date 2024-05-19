import React from 'react'
import AlbumCard from '../Albums/AlbumCard';

import {useState,useEffect} from 'react';
import {baseApi} from "../../api/axiosInstance";
import { Link } from "react-router-dom";

const Album = () => {
    const [albums,setalbums] = useState(null);

  const fetchAllAlbums = async () =>{
      try{
        const albums = await baseApi.get("/albums",{
          params:{
            ids:'3IBcauSj5M2A6lTeffJzdv'
          }
        })
      
        setalbums(albums.data.albums)
      }
      catch(error){
        console.log("Error in fetching albums",error)
      }
  }

  useEffect(() => {
    fetchAllAlbums();

  }, [])

  return (
    <div className="flex flex-col">
      <div className="mt-36 ml-96 font-bold text-4xl ">
      <Link to="/album"><h2>Albums</h2></Link>
      </div>
      <div className="mt-36 ml-96 flex flex-wrap gap-4">
        {albums && albums.map((album) => (
          
          <AlbumCard 
            key={album.uid} 
            images={album.images} 
            name={album.name} 
            type={album.type} 
          />
        ))}
      </div>
    </div>
  )
}

export default Album
