import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCn2I-oEzDmPnChcvQ4CfT7XszDigU9fG0",
  authDomain: "tic-tok-clone-45978.firebaseapp.com",
  projectId: "tic-tok-clone-45978",
  storageBucket: "tic-tok-clone-45978.appspot.com",
  messagingSenderId: "339615796465",
  appId: "1:339615796465:web:f5f44c15b6e65fd0c52d50",
  measurementId: "G-F4J7JMEW5E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // to configure or intialize the firebase

const db = firebaseApp.firestore(); // helps in accessing the database 


export default db;