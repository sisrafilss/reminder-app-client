import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import initializeAuthentication from "@/Firebase/firebase.init";
import { useState } from "react";

initializeAuthentication();

const useFirebase = () => {
  //   const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  //   const [loading, setLoading] = useState(true);

  const auth = getAuth();

  const [user, loading] = useAuthState(auth);

  // Sing In Using Google
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // navigate.push("/");
        // const user = result.user;
        // console.log(user);
        // setUser(user);
        setAuthError("");
        // setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      });
  };

  // LogOut
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setAuthError(error);
      });
  };

  return {
    user,
    authError,
    loading,
    loginWithGoogle,
    logOut,
  };
};

export default useFirebase;
