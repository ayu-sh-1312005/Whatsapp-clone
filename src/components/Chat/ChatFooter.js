/*jshint esversion: 6 */
import React from "react";
import "./ChatFooter.css";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { Margin } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const emojiIcon={
    height: "35px",
    width: "35px",
    color: "#606060",
};
const attachIcon={
    height: "35px",
    width: "35px",
    color: "#606060",
};
const sendIcon={
    height: "35px",
    width: "35px",
    color: "#606060",
};


function ChatFooter() {
    const [initalIcon,changeIcon]=useState(<KeyboardVoiceIcon style={sendIcon} />); 
    const [message, setMessage] = useState('');
    function changeToSendIcon(event){
        console.log(event.target);
        setMessage(event.target.value);
        if (event.target.value==""){
        changeIcon(<KeyboardVoiceIcon style={sendIcon} />);
        }else{
            changeIcon(<SendIcon style={sendIcon} />);
        }
    }
    function handleClick(event){
        console.log("form submitted");
        event.preventDefault();
        setMessage("");
    }
    return (<form className="chat-footer">
        <div className="chat-footer-left">
            <IconButton>
                <InsertEmoticonIcon style={emojiIcon} />
            </IconButton>
            <IconButton>
                <AttachFileIcon style={attachIcon} />
            </IconButton>
        </div>
        <div className="chat-footer-input">
            <input onChange={changeToSendIcon} className="sendInput" placeholder="Type a message" value={message}></input>
        </div>
        <div className="chat-footer-right">
            <IconButton type="submit" onClick={handleClick}>
                {initalIcon}
            </IconButton>
        </div>
    </form>)
 }
 export default ChatFooter;