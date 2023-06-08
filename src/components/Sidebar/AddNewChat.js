/*jshint esversion: 6 */
import React from 'react';
import "./AddNewChat.css";
import db from "../../databaseFiles/firebase";
import { doc, setDoc,collection, addDoc } from "firebase/firestore";
function AddNewChat() {
    async function createNewChat(){
        var roomName=prompt("Please enter the name for new room");
        console.log(roomName);
        if(roomName){
            const docRef =await addDoc(collection(db, "rooms"), {
                name: roomName,
              });
        }
    }
  return (
    <div onClick={createNewChat} className='addNewChat'>
       <h4>Add new chat</h4>
    </div>
  )
}

export default AddNewChat