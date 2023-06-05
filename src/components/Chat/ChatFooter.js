/*jshint esversion: 6 */
import "./ChatFooter.css";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { Margin } from "@mui/icons-material";
import { IconButton } from "@mui/material";

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
    return (<div className="chat-footer">
        <div className="chat-footer-left">
            <IconButton>
                <InsertEmoticonIcon style={emojiIcon} />
            </IconButton>
            <IconButton>
                <AttachFileIcon style={attachIcon} />
            </IconButton>
        </div>
        <div className="chat-footer-input">
            <input className="sendInput" placeholder="Type a message"></input>
        </div>
        <div className="chat-footer-right">
            <IconButton>
                <SendIcon style={sendIcon} />
            </IconButton>
        </div>
    </div>)
 }
 export default ChatFooter;