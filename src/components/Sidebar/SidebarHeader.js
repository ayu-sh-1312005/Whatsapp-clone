/*jshint esversion: 6 */
import React from "react";
import "./SidebarHeader.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from "@mui/material";

const profileIcon={
    width: "50px",
    height: "50px",
    color: "#D3D3D3",
};
const rightsideIcon={
    width: "25px",
    height: "25px",
    color: "#606060",
};

function SidebarHeader(props){
    console.log(props.profileUrl,"Header:::::");
    return (
        <div className="sidebar-header">
            <div className="sidebar-header-left">
                <IconButton>
                    <Avatar src={props.profileUrl} style={profileIcon} />
                </IconButton>
            </div>
            <div className="sidebar-header-right">
                <div className="sidebar-header-right-icon">
                    <IconButton>
                        <DonutLargeIcon style={rightsideIcon} />
                    </IconButton>
                </div>
                <div className="sidebar-header-right-icon">
                    <IconButton>
                        <ChatIcon style={rightsideIcon} />
                    </IconButton>
                </div>
                <div className="sidebar-header-right-icon">
                    <IconButton>
                        <MoreVertIcon style={rightsideIcon} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
export default SidebarHeader;