import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB,
  projectId: process.env.REACT_APP_PRO,
  storageBucket: process.env.REACT_APP_STORE,
  messagingSenderId: process.env.REACT_APP_MSG,
  appId: process.env.REACT_APP_APP,
  measurementId: process.env.REACT_APP_MSR,
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export { auth, provider };
