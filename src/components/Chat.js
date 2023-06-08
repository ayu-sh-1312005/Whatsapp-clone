/*jshint esversion: 6 */
import React, { useState } from "react";
import "./Chat.css";
import ChatBody from "./Chat/ChatBody";
import ChatFooter from "./Chat/ChatFooter";
import ChatHeader from "./Chat/ChatHeader";

function Chat(props) { 
    useState(() => {
    console.log(props.passId,"chats")
})
    return (
    <div className="chat">
        <ChatHeader getIdHeader={props.passId} />
        <ChatBody />
        <ChatFooter />
    </div>)
 }
 export default Chat;