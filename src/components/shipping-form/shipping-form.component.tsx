import "./shipping-form.styles.scss";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import SelectState from "../select-state/select-state.component";
import RadioButtons from "../radio-buttons/radio-buttons.component";
import { FormEvent, useEffect, useRef, useState } from "react";

const buttonSX = {
  backgroundColor: "#1de5fd",
  fontWeight: 900,
  fontSize: "1.2rem",
  fontFamily: "Bebas Neue, sans-serif",
  ":hover": {
    backgroundColor: "#1bd1e5",
  },
  ":active": {
    backgroundColor: "#1ccbde",
    color: "#fff",
  },
  padding: "6px 12px",
  color: "#444",
};

interface ShippingFormProps {
  shippingChoiceCallback: (choice: string) => void;
  shippingFormCallback: () => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ shippingChoiceCallback, shippingFormCallback }: ShippingFormProps) => {
  // TODO - add a variable to hold state chosen back from state component
  const [state, setState] = useState<string>("");

  const stateHandler = (state: string) => {
    console.log("State Picked: ", state);

    setState(state);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!state) {
      alert("Please enter all required fields.");
      return;
    }

    // Call function in checkout to display billing section
    shippingFormCallback();
    console.log("Shipping Form Completed: ", event.target);
  };

  return (
    <div className="checkout-shipping-container">
      {/* Header */}
      <h1 className="checkout-header">1. Shipping</h1>

      {/* Shipping Form */}
      <form className="checkout-form-container" onSubmit={handleSubmit}>
        <div className="form-item-container">
          <label className="form-label">
            First Name<span className="highlight">*</span>
          </label>
          <input type="text" id="firstName" className="form-input" required />
        </div>
        <br />

        <div className="form-item-container">
          <label className="form-label">
            Last Name<span className="highlight">*</span>
          </label>
          <input type="text" id="lastName" className="form-input" required />
        </div>
        <br />

        <div className="form-item-container">
          <label className="form-label">
            Postal Code<span className="highlight">*</span>
          </label>
          <input type="text" id="postalCode" className="form-input" required />
        </div>
        <br />

        <div className="form-item-container">
          <label className="form-label">
            Address Line 1<span className="highlight">*</span>
          </label>
          <input type="text" id="address1" className="form-input" required />
        </div>
        <br />

        <div className="form-item-container">
          <label className="form-label">Address Line 2:</label>
          <input type="text" id="address2" className="form-input" />
        </div>
        <br />

        {/* TODO - Pass in a callback to return back a state */}
        <div className="form-item-container">
          <label className="form-label">
            State<span className="highlight">*</span>
          </label>
          <SelectState stateCallback={stateHandler} />
        </div>
        <br />

        <div className="form-radio-container">
          <RadioButtons shippingChoiceCallback={shippingChoiceCallback} />
        </div>

        <div className="form-item-container">
          <label className="form-label">Phone</label>
          <input type="text" id="phone" className="form-input" />
        </div>
        <br />

        <div className="form-item-container">
          <label className="form-label">
            Email<span className="highlight">*</span>
          </label>
          <input type="text" id="email" className="form-input" required />
        </div>
        <br />

        <div>
          <span className="checkout-member-text">
            Already a member?
            <Link to="/authentication">
              <span className="checkout-sign-in-link checkout-member-link">Sign In</span>
            </Link>
          </span>
        </div>

        <div className="form-footer">
          {/* <label>
            <span className="highlight">*</span>
            <span className="required-text"> Required Fields</span>
          </label> */}

          {/* Submit - Go to Billing */}
          <div className="shipping-form-button-container">
            <Button type="submit" variant="contained" sx={buttonSX} className="cart-button">
              CONTINUE TO BILLING
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;
