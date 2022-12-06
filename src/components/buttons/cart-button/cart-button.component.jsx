import "./cart-button.styles.scss";
import { CartContext } from "../../../contexts/cart.context";
import { useContext } from "react";

const CartButton = ({ product, quantity, color }) => {
  const { addItemToCart, cartItems } = useContext(CartContext);

  // Adds the item to our CartItems array within our Cart Context
  const handleClick = (product, quantity, color) => {
    // ...product = id, description, imageUrl, price
    const itemToAdd = { ...product, quantity, color };
    console.log("button clicked! ", itemToAdd);
    addItemToCart(itemToAdd);
  };

  return (
    <button className="cart-button" onClick={() => handleClick(product, quantity, color)}>
      Add to Cart
    </button>
  );
};

export default CartButton;
