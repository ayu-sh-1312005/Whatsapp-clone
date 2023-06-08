/*jshint esversion: 6 */
import React, { useState } from "react";
import './App.css';
import AppBody from './components/AppBody';
import Login from "./Login";

function App() {
  const [user,setUser]=useState(null);
  return (
    <div className="app">
      {!user ? (<Login />):(<AppBody />)}
   </div>
  );
}

export default App;
