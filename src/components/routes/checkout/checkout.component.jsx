import "./checkout.styles.scss";
import ShippingForm from "../../shipping-form/shipping-form.component";
import CostSummary from "../../checkout-summary/checkout-summary.component";
import CheckoutCart from "../../checkout-cart/checkout-cart.component";
import CheckoutDelivery from "../../checkout-delivery/checkout-delivery.component";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <ShippingForm />
      <div className="checkout-side-container">
        <CostSummary />
        <CheckoutCart />
        <CheckoutDelivery />
      </div>
    </div>
  );
};

export default Checkout;
