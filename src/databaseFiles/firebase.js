// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*jshint esversion: 6 */
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALqqloXfMoata-PVg4Dkc5IB7Rqw2Nzyo",
  authDomain: "whatsapp-clone-73471.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-73471-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-73471",
  storageBucket: "whatsapp-clone-73471.appspot.com",
  messagingSenderId: "186053042738",
  appId: "1:186053042738:web:687d123c94ea44714d922b",
  measurementId: "G-3933MSJKDN"
};

  const firebaseApp=initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider=new GoogleAuthProvider();
  export {auth,provider};
  export default db;