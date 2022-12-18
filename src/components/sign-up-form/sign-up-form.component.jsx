import "./sign-up-form.styles.scss";

import { useState } from "react";

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

  console.log("formFields: ", formFields);

  //Function takes 'event' whenever text changes we will update our formFields state. We will use the 'name' attribute inside our form to identify which of the four input fields is being updated
  const handleChange = (event) => {
    // console.log("event: ", event);
    //This will tell us WHICH state to update(i.e. displayName, email, password, or confirmPassword)
    const fieldName = event.target.name;
    // console.log("fieldName: ", fieldName);

    //Value input from user
    const fieldValue = event.target.value;
    // console.log("Value: ", fieldValue);

    /* This spreads our current fields inputs along with our new values typed in onChange. 
    (i.e. ({ ...formFields, [displayName]: 'bart' }); -> updates displayName with value 'bart' by matching one of the four fields using brackets ). 
    */
    setFormFields({ ...formFields, [fieldName]: fieldValue });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" onChange={handleChange} name="displayName" value={displayName} required />

        <label>Email</label>
        <input type="email" onChange={handleChange} name="email" value={email} required />

        <label>Password</label>
        <input type="password" onChange={handleChange} value={password} name="password" required />

        <label>Confirm Password</label>
        <input type="password" onChange={handleChange} value={confirmPassword} name="confirmPassword" required />

        {/* Once button is clicked, form's onSubmit callback will be ran */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
