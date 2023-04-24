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

  // Register new user using email and password
  const registration = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setAuthError("");

        // // Set user to user state
        // const newUser = { email, displayName: name };
        // setUser(newUser);

        // Set user to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // navigate("/");
          })
          .catch((error) => {
            setAuthError(error);
          });
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  // Login user using email and password
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // const user = result.user;
        // setUser(user);
        setAuthError("");

        // Redirect user where he/she wanted to go
        // navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => {});
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
    loginUser,
    registration,
  };
};

export default useFirebase;
