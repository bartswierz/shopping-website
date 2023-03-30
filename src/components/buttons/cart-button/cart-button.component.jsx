import Button from "@mui/material/Button";
import "./cart-button.styles.scss";
import { CartContext } from "../../../contexts/cart.context";
import { useContext } from "react";

// $primaryColor: #1de5fd;
// $hoverColor: #1bd1e5;
// $activeColor: #1ccbde;

const buttonSX = {
  backgroundColor: "#1de5fd",
  fontWeight: 900,
  fontSize: "1.2rem",
  fontFamily: "Bebas Neue, sans-serif",
  ":hover": {
    backgroundColor: "#1bd1e5",
  },
  ":active": {
    backgroundColor: "#1ccbde",
    color: "#fff",
  },
  padding: "12px 24px",
  color: "#444",
};

const CartButton = ({ product, quantity, color, size }) => {
  const { addItemToCart, cartItems, cartCount, updateCartCount } = useContext(CartContext);

  // Adds the item to our CartItems array within our Cart Context
  const handleClick = (product, quantity, color, size) => {
    // ...product = id, description, imageUrl, price
    console.log("in handleClick, color: ", color, "& size: ", size);
    if (color !== "" && color !== "Color" && size !== "" && size !== "Size") {
      const itemToAdd = { ...product, quantity, color, size };
      // console.log("button clicked! ", itemToAdd);
      addItemToCart(itemToAdd);

      //Passing the quantity value of our item to update our current cart count inside cart context using a reducer
      updateCartCount(quantity);
    } else {
      alert("Cart BTN: Please select a size and color.");
      console.log("WRONG");
    }
  };

  return (
    <div className="cart-button-container">
      <Button
        variant="contained"
        sx={buttonSX}
        className="cart-button"
        onClick={() => handleClick(product, (quantity = 1), color, size)}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default CartButton;
{
  /* <button className="cart-button" onClick={() => handleClick(product, quantity, color, size)}>
        ADD TO CART
      </button> */
}
