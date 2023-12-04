import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// config
const firebaseConfig = {
  apiKey: "AIzaSyAJTxERLBx3Ff6IoTjqXk1TvjQmDe6AxSs",
  authDomain: "hrm-application-6aa96.firebaseapp.com",
  databaseURL:
    "https://hrm-application-6aa96-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hrm-application-6aa96",
  storageBucket: "hrm-application-6aa96.appspot.com",
  messagingSenderId: "979079887399",
  appId: "1:979079887399:web:486ac4e7e37b5acefaac02",
};

//initializing firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
