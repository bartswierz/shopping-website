import "./checkout.styles.scss";
import ShippingForm from "../../shipping-form/shipping-form.component";
import CostSummary from "../../checkout-summary/checkout-summary.component";
import CheckoutCart from "../../checkout-cart/checkout-cart.component";
import CheckoutDelivery from "../../checkout-delivery/checkout-delivery.component";
import { useEffect, useState } from "react";

// Contains all Information for the checkout page
const Checkout: React.FC = () => {
  const [shippingChoice, setShippingChoice] = useState<number>(0);

  // TODO - CALLBACK - RETURNS USER CHOICE FROM "RADIOBUTTON"
  const shippingChoiceHandler = (shippingChoice: string): void => {
    // console.log("shippingChoice: ", shippingChoice);

    if (shippingChoice === "overnight") setShippingChoice(23);
    else if (shippingChoice === "twoday") setShippingChoice(14);
    else setShippingChoice(0); //shippingChoice === "FREE"
  };

  return (
    <div className="checkout-container">
      <ShippingForm shippingChoiceCallback={shippingChoiceHandler} />
      {/* <div>BILLING/STRIPE PAYMENT GOES HERE</div> */}
      <div className="checkout-side-container">
        <CostSummary shippingChoice={shippingChoice} />
        <CheckoutCart />
        <CheckoutDelivery />
      </div>
    </div>
  );
};

export default Checkout;
