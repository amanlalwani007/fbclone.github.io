import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 apiKey: "AIzaSyAdAFde6Mb2bjK8c1lZC8D5U9GjAHKD47U",
  authDomain: "facebook-clone-61274.firebaseapp.com",
  databaseURL: "https://facebook-clone-61274-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-61274",
  storageBucket: "facebook-clone-61274.appspot.com",
  messagingSenderId: "321498900202",
  appId: "1:321498900202:web:c2d4eb667b13b07d375993",
  measurementId: "G-C8DR7JYNSP"
  
})

const db= firebaseApp.firestore();
export default db;

