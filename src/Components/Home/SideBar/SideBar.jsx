import React, { useState } from "react";
import SideBarHeader from "./SideBarHeader";
import SidebarLibraries from "./SidebarLibraries";
import SidebarClose from "./SidebarClose";
import SideBarCloseLibrary from "./SideBarCloseLibrary";

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="fixed h-full p-1 text-white">
      {sidebarOpen ? (
        <div className="w-full">
          <SideBarHeader fun={setSidebarOpen} />
          <SidebarLibraries state={sidebarOpen} fun={setSidebarOpen} />
        </div>
      ) : (
        <div>
          <SidebarClose />
          <SideBarCloseLibrary state={sidebarOpen}  fun={setSidebarOpen} />
        </div>
      )}
    </div>
  );
};

export default SideBar;
