/*jshint esversion: 6 */
import React, { useEffect, useState } from "react";
import "./ChatHeader.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import db from "../../databaseFiles/firebase";
import { doc, collection, query, onSnapshot,getDoc,getDocFromCache ,where,getDocs } from "firebase/firestore";

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

function ChatHeader(props) { 

    const [id,changeId]=useState('');
    const [room,setRoomName]=useState([]);
    useEffect(() => {
        changeId(props.getIdHeader);
        return () => {
            console.log("id got");
        }
    });

    useEffect(() => {
        const q = query(collection(db, "rooms"))
        const unsub = onSnapshot(q, (querySnapshot) => {
            querySnapshot.docs.map((doc) => {
                if(doc.id==id){
                    setRoomName({
                        id: doc.id,
                        data: doc._document.data.value.mapValue.fields.name.stringValue
                    })
                }else{
                    console.log(id," => ",doc.id);
                }
        })
        });
      }, [id]);
    
   



    console.log("upupupupupupupupu");
    console.log(room);
    console.log("downdowndowndowndowndown");

    return (<div className="chat-header">
        <div className="chat-header-left">
        <IconButton>
                    <AccountCircleIcon style={profileIcon} />
        </IconButton>
        </div>
        <div className="chat-header-middle">
            <h4>{room.data}</h4>
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