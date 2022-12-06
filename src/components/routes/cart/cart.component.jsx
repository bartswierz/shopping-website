import "./cart.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import { ReactComponent as RemoveBtn } from "../../../assets/trash-outline.svg";

const Cart = () => {
  const { cartItems, removeItemFromCart, cartCount, cartTotal, taxTotal, updateCartCount } = useContext(CartContext);
  console.log("cartItems in cart: ", cartItems);

  // const tax = cartTotal * 0.08;

  const removeItem = (itemToRemove) => {
    console.log("removeItem, idToRemove: ", itemToRemove);
    removeItemFromCart(itemToRemove);
  };

  return (
    <div>
      <h1 className="cart-header">Cart Summary</h1>
      <div className="cart-container">
        {/* Header */}
        <div className="cart-header">
          <div>Product</div>
          <div>Description</div>
          <div>Color</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Remove</div>
        </div>

        {/* Cart Items Rendered here */}
        {cartItems.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <div className="cart-image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
              <div className="cart-description">{item.description}</div>
              <div className="cart-color">{item.color}</div>
              <div className="cart-quantity">{item.quantity}</div>
              <div className="cart-price">${item.price}</div>
              {/* <div className="cart-remove">X</div> */}
              <RemoveBtn className="cart-remove" onClick={() => removeItem(item)} />
            </div>
          );
        })}

        {/* Footer */}
        <div className="cart-footer">
          <div>
            Items ({cartCount}): ${cartTotal}
          </div>
          <div>Tax(10%): ${taxTotal}</div>
          <div className="order-total">
            Order Total: <span className="order-total-value">${cartTotal + taxTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
