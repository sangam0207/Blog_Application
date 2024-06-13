// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCucUUBllkr8dshzUF17SiYaVgRV5xr6ac",
  authDomain: "sangam-blog.firebaseapp.com",
  projectId: "sangam-blog",
  storageBucket: "sangam-blog.appspot.com",
  messagingSenderId: "840694673983",
  appId: "1:840694673983:web:4bc80dc49761fca0db3e8a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);