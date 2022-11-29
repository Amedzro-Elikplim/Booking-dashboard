import React, { useState } from "react";
import Sidebar from "react-sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { MenuTopView } from "./Menu";
import Main from "./Main";

export const SidebarComponent = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSideBarOpen(open);
  };
  return (
    <Sidebar
      sidebar={<MenuTopView />}
      open={sideBarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: "white" } }}
      touch={true}
      transitions={true}
      shadow={true}
       
    >
      <nav className="nav">
        <GiHamburgerMenu
          className="icon"
          onClick={() => onSetSidebarOpen(true)}
        />
        <p className="sidebar-text">Admin Dashboard</p>
      </nav>

      <Main />


    </Sidebar>
  );
};
