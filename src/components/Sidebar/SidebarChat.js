/*jshint esversion: 6 */
import React,{useState,useEffect} from "react";
import SideChatDisplay from "./SideChatDisplay";
import "./SidebarChat.css";
import db from "../../databaseFiles/firebase";
import { doc, collection, query, onSnapshot } from "firebase/firestore";

function SidebarChat(){
    const [rooms,setRooms]=useState([]);

    useEffect(() => {
        const q = query(collection(db, "rooms"))
        const unsub = onSnapshot(q, (querySnapshot) => {
          setRooms(
            querySnapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc._document.data.value.mapValue.fields.senderName.stringValue,
            }))
          )
        });
      }, []);
      
    console.log(rooms,"::");
    return (
        <div className="sidebar-chat">
            {rooms.map((room) => (
                <SideChatDisplay key={room.id} id={room.id} name={room.data} />
            ))}
             <SideChatDisplay />
            <SideChatDisplay />
        </div>
    )
}
export default SidebarChat;