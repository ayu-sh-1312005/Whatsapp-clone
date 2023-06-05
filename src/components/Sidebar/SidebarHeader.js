/*jshint esversion: 6 */
import "./SidebarHeader.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton } from "@mui/material";

const profileIcon={
    width: "50px",
    height: "50px",
    color: "#D3D3D3",
};
const leftsideIcon={
    width: "25px",
    height: "25px",
    color: "#606060",
};

function SidebarHeader(){
    return (
        <div className="sidebar-header">
            <div className="sidebar-header-left">
                <IconButton>
                    <AccountCircleIcon style={profileIcon} />
                </IconButton>
            </div>
            <div className="sidebar-header-right">
                <div className="sidebar-header-right-icon">
                    <IconButton>
                        <DonutLargeIcon style={leftsideIcon} />
                    </IconButton>
                </div>
                <div className="sidebar-header-right-icon">
                    <IconButton>
                        <ChatIcon style={leftsideIcon} />
                    </IconButton>
                </div>
                <div className="sidebar-header-right-icon">
                    <IconButton>
                        <MoreVertIcon style={leftsideIcon} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
export default SidebarHeader;