// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {getAuth ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb-R3Rwt12qQGzzl86v-wnBMcQ15Esvsg",
  authDomain: "mr-abdellah.firebaseapp.com",
  databaseURL: "https://mr-abdellah-default-rtdb.firebaseio.com",
  projectId: "mr-abdellah",
  storageBucket: "mr-abdellah.appspot.com",
  messagingSenderId: "666367389295",
  appId: "1:666367389295:web:82496674d602943d0a679a",
  measurementId: "G-978TZDRXJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btn = document.getElementById("btn")
btn.addEventListener('click', ()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
alert.log(user);
window.location.href='./login.html'
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage);
  });
})