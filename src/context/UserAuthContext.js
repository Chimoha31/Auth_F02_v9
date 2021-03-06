import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
 

  // userを作成(createUserWithEmailAndPasswordを用いてsignup)
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Loginを作成(signInWithEmailAndPasswordを用いてLogin)
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // googleでlogin
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  // Logout
  const logOut = () => {
    return signOut(auth);
  };

  // どのspecific userがsignupしたか/loginしたかを把握するために、useEffect()の中でonAuthStateChangedとuseState()を用いて把握させる。
  // unmountしたら、もうこのfunctionを読み込ませたくない(listenさせたくない)。なので、return unsubscribe()でclean upする
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn }}>
      {children}
    </userAuthContext.Provider>
  );
}

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
