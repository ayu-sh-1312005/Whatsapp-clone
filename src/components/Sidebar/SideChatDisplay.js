/*jshint esversion: 6 */
import React from "react";
import "./SideChatDisplay.css";
import { Avatar, IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const profileIcon={
    width: "50px",
    height: "50px",
    color: "#D3D3D3",
};

const chatIcon={
    height:"40px",
    width: "40px",
    color: "#D3D3D3",
};


function SideChatDisplay(props){
    return (
        <div className="side-chat-display">
            <div className="people-side-icon">
                <IconButton>
                        <AccountCircleIcon src="" style={chatIcon} />
                </IconButton>
            </div>
            <div className="people-side-chat">
                <div className="people-name">
                    <h4>{props.name}</h4>
                </div>
                <div className="people-last-message">
                    <p>Last messages...</p>
                </div>
            </div>
        </div>
    )
}
export default SideChatDisplay;