/*jshint esversion: 6 */
import React, { useState } from "react";
import './App.css';
import AppBody from './components/AppBody';
import Login from "./Login";

function App() {
  const [user,setUser]=useState(null);
  const [getUrl,setUrl]=useState("");
  return (
    <div className="app">
      {!user ? (<Login setUrl={setUrl} valid={setUser} />):(<AppBody profileUrl={getUrl} />)}
   </div>
  );
}

export default App;
