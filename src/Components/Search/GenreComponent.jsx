import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getGenre } from '../../Utils/getGenre';

const GenreComponent = () => {

    const [data, setData] = useState(null);
    const genre = useSelector((state) => state.genre.genre);
    const id = genre.uri.slice(13);

    const getGenreData = async() =>{
      const genreData = await getGenre(id);
      setData(genreData)
    }
    useEffect(()=>{
      getGenreData();
    },[])

  return (
    <div>
      {console.log("Data",data)}
      
    </div>
  )
}

export default GenreComponent
