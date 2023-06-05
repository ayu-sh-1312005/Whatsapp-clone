/*jshint esversion: 6 */
import "./Chat.css";
import ChatBody from "./Chat/ChatBody";
import ChatFooter from "./Chat/ChatFooter";
import ChatHeader from "./Chat/ChatHeader";

function Chat() { 
    return (
    <div className="chat">
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
    </div>)
 }
 export default Chat;