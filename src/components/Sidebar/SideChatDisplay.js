/*jshint esversion: 6 */
import "./SideChatDisplay.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const profileIcon={
    width: "50px",
    height: "50px",
    color: "#D3D3D3",
};

const chatIcon={
    height:"40px",
    width: "40px"
};

function SideChatDisplay(){
    return (
        <div className="side-chat-display">
            <div className="people-side-icon">
                <IconButton>
                        <AccountCircleIcon style={chatIcon} />
                </IconButton>
            </div>
            <div className="people-side-chat">
                <div className="people-name">
                    <h4>Ayush Gupta</h4>
                </div>
                <div className="people-last-message">
                    <p>It's been a long time</p>
                </div>
            </div>
        </div>
    )
}
export default SideChatDisplay;