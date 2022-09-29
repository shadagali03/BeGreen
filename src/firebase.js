import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDD0bgREDhMdQNN7vOSjWaPP5FdrU0Sans",
    authDomain: "hack4earth-17030.firebaseapp.com",
    projectId: "hack4earth-17030",
    storageBucket: "hack4earth-17030.appspot.com",
    messagingSenderId: "119408707755",
    appId: "1:119408707755:web:847c4149802d12b4f68fee"
  };

  firebase.initiliazeApp(firebaseConfig);
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export default db;