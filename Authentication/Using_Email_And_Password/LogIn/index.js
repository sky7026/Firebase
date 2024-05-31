// import firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyAMakMcHyAt58UZl-3t6GioHian7443kyE",
  authDomain: "fir-test-72256.firebaseapp.com",
  projectId: "fir-test-72256",
  storageBucket: "fir-test-72256.appspot.com",
  messagingSenderId: "1044814205284",
  appId: "1:1044814205284:web:7b6305d8fe95b7a2f7ea71",
  measurementId: "G-QHDK84633W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


// Get element in html page
let emailInput = document.getElementById('email-input');
let passwordInput = document.getElementById('password-input');
let signUpButton = document.getElementById('submit-button');

signUpButton.addEventListener('click', function(){
     // Sign up with email and password.
     signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value).then((userCredential) => {
        //Logged In
        const user = userCredential;
        console.log(user)
        alert('Login Successfully......!')
        
     }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert error
        alert(errorCode + ': {' + errorMessage + '}')
      });
})