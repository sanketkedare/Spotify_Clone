// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHj_dZHQ1tFkjnrT8T5WVpT0CZCpS4lFQ",
  authDomain: "spotify-clone-57013.firebaseapp.com",
  projectId: "spotify-clone-57013",
  storageBucket: "spotify-clone-57013.appspot.com",
  messagingSenderId: "210725193401",
  appId: "1:210725193401:web:7e57bd99cb319034aa7d68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};