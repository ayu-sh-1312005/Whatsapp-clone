/*jshint esversion: 6 */
import "./ChatHeader.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const profileIcon={
    width: "50px",
    height: "50px",
    color: "#D3D3D3",
};
const chatHeadRightIcon={
    width: "25px",
    height: "25px",
    color: "#606060",
};

function ChatHeader() { 
    return (<div className="chat-header">
        <div className="chat-header-left">
        <IconButton>
                    <AccountCircleIcon style={profileIcon} />
        </IconButton>
        </div>
        <div className="chat-header-middle">
            <h4>Ayush Gupta</h4>
        </div>
        <div className="chat-header-right">
            <IconButton>
                <SearchIcon style={chatHeadRightIcon} />
            </IconButton>
            <IconButton>
                <MoreVertIcon style={chatHeadRightIcon} />
            </IconButton>
        </div>
    </div>)
 }
 export default ChatHeader;