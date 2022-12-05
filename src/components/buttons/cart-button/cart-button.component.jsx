import "./cart-button.styles.scss";
import { CartContext } from "../../../contexts/cart.context";
import { useContext } from "react";

const CartButton = ({ product }) => {
  const { addItemToCart, cartItems } = useContext(CartContext);

  const handleClick = (product) => {
    console.log("button clicked! ", product);
    addItemToCart(product);
    console.log("CartItems AFTER: ", cartItems);
  };

  return (
    <button className="cart-button" onClick={() => handleClick(product)}>
      Add to Cart
    </button>
  );
};

export default CartButton;
