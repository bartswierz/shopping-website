import "./checkout-summary.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export const formatNumber = (numToParse: number | string): string => {
  if (typeof numToParse === "string") return parseFloat(numToParse).toFixed(2);
  else if (typeof numToParse === "number") return numToParse.toFixed(2);
  //Not a String or Number so return default 0.00
  else return "0.00";
};

const CostSummary = () => {
  const { cartTotal, taxTotal } = useContext(CartContext);

  //  const formatNumber = (numToParse: number | string): string => {
  //   if (typeof numToParse === "string") return parseFloat(numToParse).toFixed(2);
  //   else if (typeof numToParse === "number") return numToParse.toFixed(2);
  //   //Not a String or Number so return default 0.00
  //   else return "0.00";
  // };

  const formattedCartTotal = formatNumber(cartTotal);
  const formattedTaxTotal = formatNumber(taxTotal);
  const formattedTotalCost = formatNumber(cartTotal + taxTotal);

  return (
    <div className="checkout-summary-container">
      <div className="checkout-summary-header">SUMMARY</div>
      <div>
        <div className="checkout-summary-item">
          <span>Subtotal</span>
          <span>${formattedCartTotal}</span>
        </div>
        <div className="checkout-summary-item">
          <span>Shipping & Handling</span>
          <span className="highlight">FREE</span>
        </div>
        <div className="checkout-summary-item">
          <span>Taxes</span>
          <span>${formattedTaxTotal}</span>
        </div>
        <div className="checkout-summary-item">
          <span>Total</span>
          <span className="highlight">${formattedTotalCost}</span>
        </div>
      </div>
    </div>
  );
};

export default CostSummary;
