import "./quantity.styles.scss";
import { ReactComponent as Decrease } from "../../assets/remove-outline.svg";
import { ReactComponent as Increase } from "../../assets/add-outline.svg";
import { useState } from "react";

const Quantity = () => {
  const [counter, setCounter] = useState(1);

  // Prevents counter from being set to 0
  const decrementCounter = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  return (
    <div className="quantity-container">
      <Decrease className="decrement-button" onClick={() => decrementCounter()} />
      <div className="quantity-value">{counter}</div>
      <Increase className="increment-button" onClick={() => setCounter(counter + 1)} />
    </div>
  );
};

export default Quantity;
