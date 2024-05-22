import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setGenre } from "../../Redux/genreSlice";

const BrowseComponent = ({ item }) => {
  
  const dispatch = useDispatch();
  const handleSetGenre = () => dispatch(setGenre(item))


  const backgroundColor =
    item?.content?.data?.data?.cardRepresentation?.backgroundColor.hex;
  const title =
    item?.content?.data?.data?.cardRepresentation?.title?.transformedLabel ||
    item?.content?.data?.title.transformedLabel;
  const imageUrl =
    item?.content?.data?.data?.cardRepresentation?.artwork.sources[0].url ||
    item?.content?.data?.artwork.sources[0].url;
  const pageUrl = item.uri.slice(13);

  return (
    <Link to={`/search/${pageUrl}`} onClick={handleSetGenre}>
      <div
        className={`w-[250px] h-[150px] border m-2 p-2 rounded-xl overflow-hidden relative cursor-pointer`}
        style={{ backgroundColor }}
      >
        <h1 className="text-xl font-bold w-2/3 p-2 absolute z-10">{title}</h1>
        <img
          alt={title}
          src={imageUrl}
          className="w-[120px] overflow-hidden rotate-12 ml-32 mt-4"
        />
      </div>
    </Link>
  );
};

export default BrowseComponent;
