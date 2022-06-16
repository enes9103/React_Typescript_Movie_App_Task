import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// In case the firebase config information is kept in the .env file;

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
//   };

const firebaseConfig = {
    apiKey: "AIzaSyBuPrmxOZWwMfFR6klhrodz5fVvHgRw5J0",
    authDomain: "react-movie-app-typescript.firebaseapp.com",
    projectId: "react-movie-app-typescript",
    storageBucket: "react-movie-app-typescript.appspot.com",
    messagingSenderId: "47753007296",
    appId: "1:47753007296:web:2d256705e00eba92b15d25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Sign up new users
export const createUser = async (email:string, password:any, displayName:string, navigate:any) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser as any, {
        displayName: displayName,
      });
      navigate("/");
      console.log(userCredential);
    } catch (err:any) {
      alert(err.message);
    }
  };

// Sign in existing users
  export const signIn = async (email:string, password:any, navigate:any) => {
    try {
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      console.log(userCredential);
    } catch (err:any) {
      alert(err.message);
    }
  };

// Sign out users
  export const logOut = () => {
    signOut(auth);
    alert("logged out successfully");
  };

// Get the current user (observer)
  export const userObserver = (setCurrentUser:any) => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in.
        setCurrentUser(currentUser);
      } else {
        // User is signed out
        setCurrentUser(false);
      }
    });
  };

// Google Auth Provider
  export const signUpProvider = (navigate:any) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        // ...
      });
  };