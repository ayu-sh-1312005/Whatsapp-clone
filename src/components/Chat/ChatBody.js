/*jshint esversion: 6 */
import "./ChatBody.css";
import Receiver from "./Receiver";
import Sender from "./Sender";

function ChatBody() { 
    return (<div className="chat-body">
            <Receiver />
            <Sender />
            <Receiver />
            <Sender />
            <Receiver />
            <Sender />
            <Receiver />
            <Sender />
            <Receiver />
            <Sender />
            <Receiver />
            <Sender />
    </div>)
 }
 export default ChatBody;