import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBuPrmxOZWwMfFR6klhrodz5fVvHgRw5J0",
    authDomain: "react-movie-app-typescript.firebaseapp.com",
    projectId: "react-movie-app-typescript",
    storageBucket: "react-movie-app-typescript.appspot.com",
    messagingSenderId: "47753007296",
    appId: "1:47753007296:web:2d256705e00eba92b15d25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Sign up new users
export const createUser = async (email, password, displayName, navigate) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      navigate("/");
      console.log(userCredential);
    } catch (err) {
      alert(err.message);
    }
  };

// Sign in existing users
  export const signIn = async (email, password, navigate) => {
    try {
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      console.log(userCredential);
    } catch (err) {
      alert(err.message);
    }
  };

// Sign out users
  export const logOut = () => {
    signOut(auth);
    alert("logged out successfully");
  };