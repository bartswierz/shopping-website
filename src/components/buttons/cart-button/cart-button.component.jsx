import "./cart-button.styles.scss";
import { CartContext } from "../../../contexts/cart.context";
import { useContext } from "react";

const CartButton = ({ product, quantity, color }) => {
  const { addItemToCart, cartItems, cartCount, updateCartCount } = useContext(CartContext);

  // Adds the item to our CartItems array within our Cart Context
  const handleClick = (product, quantity, color) => {
    // ...product = id, description, imageUrl, price
    console.log("in handleClick, color: ", color);
    const itemToAdd = { ...product, quantity, color };
    // console.log("button clicked! ", itemToAdd);
    addItemToCart(itemToAdd);

    //Passing the quantity value of our item to update our current cart count inside cart context using a reducer
    updateCartCount(quantity);
  };

  return (
    <button className="cart-button" onClick={() => handleClick(product, quantity, color)}>
      Add to Cart
    </button>
  );
};

export default CartButton;
