import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from 'dotenv';

dotenv.config({ path: './.env' }); 


const firebaseConfig = {

  apiKey: "AIzaSyAeum9QrymFNfs8SCCXRygLXYo_Vd2ZS_Y",

  authDomain: "tritoneats-ce4d9.firebaseapp.com",

  projectId: "tritoneats-ce4d9",

  storageBucket: "tritoneats-ce4d9.firebasestorage.app",

  messagingSenderId: "534166052068",

  appId: "1:534166052068:web:9bc417bd54a98971ec20f1"

};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log("Firebase app initialized:", app.name);
