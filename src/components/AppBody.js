/*jshint esversion: 6 */
import React from "react";
import "./AppBody.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function AppBody(){
    return (<div className="app-body">
        <Sidebar />
        <Chat />
    </div>)
}
export default AppBody;