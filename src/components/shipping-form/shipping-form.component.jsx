import "./shipping-form.styles.scss";
import { Link } from "react-router-dom";

const ShippingForm = () => {
  return (
    <div className="checkout-shipping-container">
      {/* Header */}
      <h1 className="checkout-header">1. Shipping</h1>

      {/* Shipping Form */}
      <form className="checkout-form-container">
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

        {/* Change to a select/option with US states */}
        {/* <div className="form-item-container">
            <label className="form-label">State</label>
            <input type="text" id="state" className="form-input" />
          </div>
          <br /> */}
        <div className="form-item-container">
          <label className="form-label">State</label>
          <select className="select-box">
            <option value="SelectState">Select State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <br />

        {/* Delivery Method */}
        <div className="form-radio-container">
          <h3 className="form-radio-header">Select Delivery Method</h3>
          <div className="form-radio-item">
            <input type="radio" value="FREE" name="FREE" />
            <label className="form-label">
              <span className="shipping-type">Standard</span> <span className="shipping-price">FREE</span>
            </label>
          </div>
          <div className="form-radio-item">
            <input type="radio" value="Express" name="Express" />
            <label className="form-label">
              <span className="shipping-type">Express</span> <span className="shipping-price">$20</span>
            </label>
          </div>
        </div>

        <div className="form-item-container">
          <label className="form-label">
            Phone<span className="highlight">*</span>
          </label>
          <input type="text" id="phone" className="form-input" required />
        </div>
        <br />

        <div className="form-item-container">
          <label className="form-label">
            Email<span className="highlight">*</span>
          </label>
          <input type="text" id="email" className="form-input" required />
        </div>
        <br />

        <div className="checkout-member-text">
          <span>
            Already a member?
            <Link to="/checkout">
              <span className="checkout-sign-in-link">Sign In</span>
            </Link>
          </span>
        </div>

        <div className="form-footer">
          <label>
            <span className="highlight">*</span>
            <span className="required-text"> Required Fields</span>
          </label>

          {/* Submit - Go to Billing */}
          <input type="submit" value="CONTINUE TO BILLING" className="checkout-submit-btn" />
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;
