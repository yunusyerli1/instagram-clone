// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "utils";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO25hiKRR9VHQE5m5rPX6kwoJv3EyFJzI",
  authDomain: "instagram-project-53f1f.firebaseapp.com",
  projectId: "instagram-project-53f1f",
  storageBucket: "instagram-project-53f1f.appspot.com",
  messagingSenderId: "19024768491",
  appId: "1:19024768491:web:e9649c58652e5cdbd6bdae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, user => {
        userHandle(user || false)
  });
  

export const login = async (email, password) => {
    try{
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response.user)
    } catch(err) {
        toast.error(err.code)
    }
}
