import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();

    // With this response we can see we get back UserCredentialImpl object, inside it we look inside user -> accessToken. This is what we are looking for, this access token was from the flow from our app to firebase and google checking to see that we are who we say we are and giving us back the acessToken.
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
