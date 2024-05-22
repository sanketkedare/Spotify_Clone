import React, { useEffect, useState } from "react";
import { getBrowseAll } from "../../Utils/getBrowseAll";
import BrowseComponent from "./BrowseComponent";
import { Outlet, useLocation } from "react-router-dom";

const SearchResults = ({ result }) => {
  const { pathname } = useLocation();

  const [data, setData] = useState(null);

  const getBrowseData = async () => {
    const browseData = await getBrowseAll();
    setData(browseData.data.browseStart.sections.items[0].sectionItems.items);
  };

  useEffect(() => {
    getBrowseData();
  }, []);

  return (
    <div className="overflow-y-scroll mt-14 mx-3 rounded-xl shadow-lg h-[90%] p-4 bg-gray-900">
      <h1 className="font-bold text-xl">Browse All</h1>
      <div className="flex flex-wrap py-2">
        {pathname === "/search" ? (
          data &&
          data.map((cart, uri) => <BrowseComponent key={uri} item={cart} />)
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default SearchResults;
