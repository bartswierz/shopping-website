import "./sign-in-form.styles.scss";

import { useState } from "react";
// import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  // createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

//Bundling the four form items together instead of four separate states because form has these grouped together
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  //passing in the default form OBJECT
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log("formFields: ", formFields);

  const signInWithGoogle = async () => {
    // With this response we can see we get back UserCredentialImpl object, inside it we look inside user -> accessToken. This is what we are looking for, this access token was from the flow from our app to firebase and google checking to see that we are who we say we are and giving us back the acessToken. This response is waiting on user to click on their google account inside the popup
    const response = await signInWithGooglePopup();

    //Destructuring off user from response, see inside console for UserCredentialImpl Obj upon using Google Popup
    const { user } = response;
    const userDocRef = await createUserDocumentFromAuth(user);

    console.log("userDocRef: ", userDocRef);
  };

  //Clears the form input fields from the page
  const resetFromFields = () => {
    console.log("Resetting form fields");
    //setting formFields back to default - email: "", password: ""
    setFormFields(defaultFormFields);
  };

  //Handle submit will take user's input for email and password, pass them as parameters to firebase function and reset page fields to default to clear the screen upon successful input.
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //awaiting user's input for email and password fields
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log("response: ", response);

      //Calls function to reset user input text from page
      resetFromFields();
    } catch (error) {
      //Specific error given based on Email OR Password
      switch (error.code) {
        /*if the error is password related then alert user.
        Message: user creation encountered an error FirebaseError: Firebase: Error (auth/wrong-password). */
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        //If email doesn't exist
        case "auth/user-not-found":
          alert(`no user found with this email`);
          break;
        default:
          console.log("user creation encountered an error", error);
      }
    }
  };

  //Function takes 'event' whenever text changes we will update our formFields state. We will use the 'name' attribute inside our form to identify which of the four input fields is being updated
  const handleChange = (event) => {
    // console.log("event: ", event);
    //This will tell us WHICH state to update(i.e. displayName, email, password, or confirmPassword)
    const fieldName = event.target.name;
    // console.log("fieldName: ", fieldName);

    //Value input from user
    const fieldValue = event.target.value;
    // console.log("Value: ", fieldValue);

    /* This spreads our current fields inputs along with our new value typed in onChange. 
    (i.e. ({ ...formFields, [displayName]: 'bart' }); -> spreads current user inputs AND updates displayName with value 'bart' by matching one of the four fields using brackets ). 
    */
    setFormFields({ ...formFields, [fieldName]: fieldValue });
  };

  return (
    <div className="sign-in-form-container">
      <h1 className="sign-in-form-header">Already have an account</h1>
      <h2 className="sign-in-form-subheader">Login with Email and Password</h2>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <label>Email</label>
        <input type="email" onChange={handleChange} name="email" value={email} required />

        <label>Password</label>
        <input type="password" onChange={handleChange} value={password} name="password" required />

        {/* Once button is clicked, form's onSubmit callback will be ran */}
        <div className="sign-in-form-btn-container">
          <button type="submit" className="sign-in-form-btn">
            Sign In
          </button>
          <button type="button" onClick={signInWithGoogle} className="sign-in-form-google-btn">
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
