import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAMakMcHyAt58UZl-3t6GioHian7443kyE",
    authDomain: "fir-test-72256.firebaseapp.com",
    projectId: "fir-test-72256",
    storageBucket: "fir-test-72256.appspot.com",
    messagingSenderId: "1044814205284",
    appId: "1:1044814205284:web:7b6305d8fe95b7a2f7ea71",
    measurementId: "G-QHDK84633W"
  }
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//Get html button and input field
var emailInput = document.getElementById('emailInput').value;
var passwordInput = document.getElementById('passwordInput').value;
var signUpButton = document.getElementById('signUpButton');
var loginEmail = document.getElementById('loginEmailInput').value;
var loginPassword = document.getElementById('loginpasswordInput').value;
var loginButton = document.getElementById('loginButton');


//Sign Up function
signUpButton.addEventListener('click', function(){ 
       createUserWithEmailAndPassword(auth, emailInput, passwordInput).then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        alert('Create account succsessfully')
       }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode +' ' +errorMessage)
        alert(errorCode)
      });
})

// //Log In function
// loginButton.addEventListener('click', function() {
//       signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((userCredentialLogin) => {
//     const user = userCredentialLogin.user;
//     console.log(user);
//       }).catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode +' ' +errorMessage)
//       });
// })






