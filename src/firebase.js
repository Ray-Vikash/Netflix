import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAGbUCHmQO7t2-_JOuikpqtEBnMaXUZAA0",
  authDomain: "movflix-5ccb7.firebaseapp.com",
  projectId: "movflix-5ccb7",
  storageBucket: "movflix-5ccb7.firebasestorage.app",
  messagingSenderId: "360320592842",
  appId: "1:360320592842:web:3d651b3f701066b0a1fd33",
  measurementId: "G-89YB7HDVJL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const userCrendentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCrendentials.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name: name,
      authProvider: "local",
      email: email,
    });
  } catch (error) {
    console.log(error.code);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signup, login, logout };
