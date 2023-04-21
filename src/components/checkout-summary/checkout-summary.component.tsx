import "./checkout-summary.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export const formatNumber = (numToParse: number | string): string => {
  if (typeof numToParse === "string") return parseFloat(numToParse).toFixed(2);
  else if (typeof numToParse === "number") return numToParse.toFixed(2);
  //Not a String or Number so return default 0.00
  else return "0.00";
};

interface CostSummaryProps {
  shippingChoice: number;
}

const CostSummary = ({ shippingChoice }: CostSummaryProps) => {
  const { cartTotal, taxTotal } = useContext(CartContext);

  // FORMAT USER'S CHOICE TO UPDATE SHIPPING & HANDLING COST(FREE, $14.00, $23.00)
  const shippingCost = (shippingChoice: number): string => {
    if (shippingChoice === 14) {
      return `$${shippingChoice.toFixed(2)}`; //Return $14.00
    }
    if (shippingChoice === 23) {
      return `$${shippingChoice.toFixed(2)}`; //Return $23.00
    }

    return "FREE";
  };

  const formattedShippingCost: string = shippingCost(shippingChoice);

  const formattedCartTotal = formatNumber(cartTotal);
  const formattedTaxTotal = formatNumber(taxTotal);
  const formattedTotalCost = formatNumber(cartTotal + taxTotal + shippingChoice);

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
          {/* TODO - add price change here */}
          <span className="highlight">{formattedShippingCost}</span>
          {/* <span className="highlight">{shippingChoice.toFixed(2)}</span> */}
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
