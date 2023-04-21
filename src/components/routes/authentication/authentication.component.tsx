import "./authentication.styles.scss";

import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";

const Authentication: React.FC = () => {
  return (
    <div>
      <h1 className="authentication-header">Sign In Page</h1>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
