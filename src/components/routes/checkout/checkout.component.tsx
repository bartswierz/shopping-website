import "./checkout.styles.scss";
import ShippingForm from "../../shipping-form/shipping-form.component";
import CostSummary from "../../checkout-summary/checkout-summary.component";
import CheckoutCart from "../../checkout-cart/checkout-cart.component";
import CheckoutDelivery from "../../checkout-delivery/checkout-delivery.component";
import { useEffect, useState } from "react";
import PaymentForm from "../../payment-form/payment-form.component";

// Contains all Information for the checkout page
const Checkout: React.FC = () => {
  const [shippingChoice, setShippingChoice] = useState<number>(0);
  const [isShippingFormDone, setIsShippingFormDone] = useState<boolean>(false);

  // TODO - CALLBACK - RETURNS USER CHOICE FROM "RADIOBUTTON"
  const shippingChoiceHandler = (shippingChoice: string): void => {
    // console.log("shippingChoice: ", shippingChoice);

    if (shippingChoice === "overnight") setShippingChoice(23);
    else if (shippingChoice === "twoday") setShippingChoice(14);
    else setShippingChoice(0); //shippingChoice === "FREE"
  };

  // TODO - will call this as a callback inside shipping form WHEN USER COMPLETES THE FORM - Put this in the form submit
  const shippingFormHandler = (): void => {
    console.log("Shipping form complete!");
    setIsShippingFormDone(true);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-shipping-payment-container">
        <ShippingForm shippingChoiceCallback={shippingChoiceHandler} shippingFormCallback={shippingFormHandler} />

        {isShippingFormDone ? (
          <PaymentForm />
        ) : (
          <div style={{ opacity: "0.45", pointerEvents: "none" }}>
            <PaymentForm />
          </div>
        )}
      </div>
      <div className="checkout-side-container">
        <CostSummary shippingChoice={shippingChoice} />
        <CheckoutCart />
        <CheckoutDelivery />
      </div>
    </div>
  );
};

export default Checkout;
