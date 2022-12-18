import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    // With this response we can see we get back UserCredentialImpl object, inside it we look inside user -> accessToken. This is what we are looking for, this access token was from the flow from our app to firebase and google checking to see that we are who we say we are and giving us back the acessToken.
    const response = await signInWithGooglePopup();
    // const { user } = await signInWithGooglePopup();

    //Destructuring off user from response, see inside console for UserCredentialImpl Obj upon using Google Popup
    const { user } = response;
    const userDocRef = createUserDocumentFromAuth(user);

    console.log("response: ", response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
