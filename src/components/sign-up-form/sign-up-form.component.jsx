import "./sign-up-form.styles.scss";

import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

//Bundling the four form items together instead of four separate states because form has these grouped together
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  //passing in the default form OBJECT
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // console.log("formFields: ", formFields);

  //Clears the form input fields from the page
  const resetFromFields = () => {
    console.log("Resetting form fields");
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Checking that both passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(email, password);
      const { user } = response;

      console.log(response);

      const data = await createUserDocumentFromAuth(user, { displayName });

      //Calls function to reset user input text from page
      resetFromFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use. Please use a different email.");
      }
      console.error("user creation encountered an error", error);
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
    <div className="sign-up-form-container">
      <h1 className="sign-up-form-header">Don't have an account?</h1>
      <h2 className="sign-up-form-subheader">Sign up with your Email and Password</h2>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <label>Display Name</label>
        <input type="text" onChange={handleChange} name="displayName" value={displayName} required />

        <label>Email</label>
        <input type="email" onChange={handleChange} name="email" value={email} required />

        <label>Password</label>
        <input type="password" onChange={handleChange} value={password} name="password" required />

        <label>Confirm Password</label>
        <input type="password" onChange={handleChange} value={confirmPassword} name="confirmPassword" required />

        {/* Once button is clicked, form's onSubmit callback will be ran */}
        <button type="submit" className="sign-up-form-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
