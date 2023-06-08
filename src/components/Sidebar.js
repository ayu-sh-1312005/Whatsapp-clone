/*jshint esversion: 6 */
import React, { useState } from "react";
import "./Sidebar.css";
import SidebarChat from "./Sidebar/SidebarChat";
import SidebarHeader from "./Sidebar/SidebarHeader";
import SidebarSearch from "./Sidebar/SidebarSearch";
import AddNewChat from "./Sidebar/AddNewChat";


function Sidebar(props) { 
    const [sbId,setSbId]=useState('');
    props.sb(sbId);
    return (<div className="sidebar">
        <SidebarHeader />
        <SidebarSearch />
        <AddNewChat />
        <SidebarChat sbc={setSbId} />
    </div>)
 }
 export default Sidebar;