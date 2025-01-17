// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEjw9fZh6kZHJCygbQDBNwyBC2S0jLOR0",
  authDomain: "filmosi.firebaseapp.com",
  projectId: "filmosi",
  storageBucket: "filmosi.firebasestorage.app",
  messagingSenderId: "1094598105754",
  appId: "1:1094598105754:web:b3868726e5fa0dcb611d23",
  measurementId: "G-C72HGDWYFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);