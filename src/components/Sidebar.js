/*jshint esversion: 6 */
import React from "react";
import "./Sidebar.css";
import SidebarChat from "./Sidebar/SidebarChat";
import SidebarHeader from "./Sidebar/SidebarHeader";
import SidebarSearch from "./Sidebar/SidebarSearch";

function Sidebar() { 
    return (<div className="sidebar">
        <SidebarHeader />
        <SidebarSearch />
        <SidebarChat />
    </div>)
 }
 export default Sidebar;