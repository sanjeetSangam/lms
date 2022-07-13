import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjUyIFPuolvGMjKrj2INaL4_FrMIO3mZY",
  authDomain: "facebook-c202d.firebaseapp.com",
  databaseURL: "https://facebook-c202d-default-rtdb.firebaseio.com",
  projectId: "facebook-c202d",
  storageBucket: "facebook-c202d.appspot.com",
  messagingSenderId: "355449936079",
  appId: "1:355449936079:web:c23dd141d4d92b18537fba",
  measurementId: "G-YHMQXBWHHM",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export { auth, provider };
