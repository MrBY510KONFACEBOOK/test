// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11";

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

const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      if (user.emailVerified) {
        // Email is verified, show success alert
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Redirecting...',
        }).then(() => {
          window.location.href = 'index.html';
        });
      } else {
        // Email not verified, show alert
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Please verify your email!',
        });
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Display error alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${errorCode}: ${errorMessage}`,
      });
    });
});

// Check authentication state globally
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in:", user);
  } else {
    // User is signed out
    console.log("User is signed out");
  }
});
