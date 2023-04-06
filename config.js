const { initializeApp } =  require("firebase/app");
const { getAuth } =  require("firebase/auth");
const { getDatabase } =  require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyA9GyxBO7Go_e5iagskVWRkpttQMduw9cw",
  authDomain: "adityaariot.firebaseapp.com",
  databaseURL: "https://adityaariot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "adityaariot",
  storageBucket: "adityaariot.appspot.com",
  messagingSenderId: "810000755126",
  appId: "1:810000755126:web:5486e8695e2c480d0cf917"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getDatabase(app)
module.exports={auth, db}