// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import dotenv from 'dotenv';

// dotenv.config({ path: './.env' }); 


// // const firebaseConfig = {

// //   apiKey: "AIzaSyAeum9QrymFNfs8SCCXRygLXYo_Vd2ZS_Y",

// //   authDomain: "tritoneats-ce4d9.firebaseapp.com",

// //   projectId: "tritoneats-ce4d9",

// //   storageBucket: "tritoneats-ce4d9.firebasestorage.app",

// //   messagingSenderId: "534166052068",

// //   appId: "1:534166052068:web:9bc417bd54a98971ec20f1"

// // };

// const firebaseConfig = {
//   apiKey: "AIzaSyAeum9QrymFNfs8SCCXRygLXYo_Vd2ZS_Y",
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };


// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// console.log("Firebase app initialized:", app.name);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from 'dotenv';

dotenv.config({ path: './.env' }); 


const firebaseConfig = {

  apiKey: process.env.FIREBASE_API_KEY,

  authDomain: process.env.FIREBASE_AUTH_DOMAIN,

  projectId: process.env.FIREBASE_PROJECT_ID,

  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.FIREBASE_APP_ID


};




const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log("Firebase app initialized:", app.name);