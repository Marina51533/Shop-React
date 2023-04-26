import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/signUpForm.component";
import SignInForm from "../../components/sign-in/signInForm.component";
import './authentication.styles.scss'

function Authentication() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      if(response){
        const userDocRef = await createUserDocumentFromAuth(response.user)
      }
    };
    fetchData();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleUser}>Sign in with Google popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google redirect
      </button> */}
      <SignUpForm/>
      <SignInForm/>
    </div>
  );
}

export default Authentication;
