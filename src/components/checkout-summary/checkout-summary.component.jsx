import "./checkout-summary.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CostSummary = () => {
  const { cartTotal, taxTotal } = useContext(CartContext);

  return (
    <div className="checkout-summary-container">
      <div className="checkout-summary-header">SUMMARY</div>
      <div>
        <div className="checkout-summary-item">
          <span>Subtotal</span>
          <span>${cartTotal}</span>
        </div>
        <div className="checkout-summary-item">
          <span>Shipping & Handling</span>
          <span className="highlight">FREE</span>
        </div>
        <div className="checkout-summary-item">
          <span>Taxes</span>
          <span>${taxTotal}</span>
        </div>
        <div className="checkout-summary-item">
          <span>Total</span>
          <span className="highlight">${cartTotal + taxTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default CostSummary;
