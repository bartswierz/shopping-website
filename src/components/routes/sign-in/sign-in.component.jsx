import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    // With this response we can see we get back UserCredentialImpl object, inside it we look inside user -> accessToken. This is what we are looking for, this access token was from the flow from our app to firebase and google checking to see that we are who we say we are and giving us back the acessToken.
    const response = await signInWithGooglePopup();

    //Destructuring off user from response, see inside console for UserCredentialImpl Obj upon using Google Popup
    const { user } = response;
    const userDocRef = createUserDocumentFromAuth(user);

    console.log("response: ", response);
  };

  // const logGoogleRedirectUser = async () => {
  //   // With this response we can see we get back UserCredentialImpl object, inside it we look inside user -> accessToken. This is what we are looking for, this access token was from the flow from our app to firebase and google checking to see that we are who we say we are and giving us back the acessToken.
  //   const response = await signInWithGoogleRedirect();
  //   // const { user } = await signInWithGooglePopup();

  //   //Destructuring off user from response, see inside console for UserCredentialImpl Obj upon using Google Redirect
  //   const { user } = response;
  //   // const userDocRef = createUserDocumentFromAuth(user);

  //   console.log("response.user: ", user);
  // };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
    </div>
  );
};

export default SignIn;
