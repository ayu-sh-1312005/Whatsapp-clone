/*jshint esversion: 6 */
import React, { useEffect, useState } from "react";
import "./AppBody.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import db from "../databaseFiles/firebase";
import {
    BrowserRouter as 
    Router,
    Routes,
    Route,
    useParams,
  } from "react-router-dom";

function AppBody(props){
    const {roomId}=useParams();
    const [roomName,setRoomName]=useState("");
    const [id,changeId]=useState('');
    
    useEffect(() => {
        if(roomId){
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot((snapshot) => {
                setRoomName(snapshot.data().name);
            })
        }
    })
    console.log(id,"id----");

    return (<div className="app-body">
        <Sidebar profileUrl={props.profileUrl} sb={changeId} />
        {id!="" ? (<Chat  passId={id} />):(<div></div>)}
    </div>)
}
export default AppBody;