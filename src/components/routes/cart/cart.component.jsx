import "./cart.styles.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/cart.context";
// import { RemoveBtn } from "../../../assets/trash-outline.svg";
// import { DecreaseIcon } from "../../../assets/chevron-back-outline.svg";
// import { IncreaseIcon } from "../../../assets/chevron-forward-outline.svg";
import { ReactComponent as RemoveBtn } from "../../../assets/trash-outline.svg";
import { ReactComponent as DecreaseIcon } from "../../../assets/chevron-back-outline.svg";
import { ReactComponent as IncreaseIcon } from "../../../assets/chevron-forward-outline.svg";

const Cart = () => {
  const { cartItems, removeItemFromCart, cartCount, cartTotal, taxTotal, updateCartCount, updateCartItem } = useContext(CartContext);
  console.log("cartItems in cart: ", cartItems);

  const subtotalFixed = parseFloat(cartTotal).toFixed(2);
  const taxTotalFixed = parseFloat(taxTotal).toFixed(2);
  const cartTotalFixed = parseFloat(cartTotal + taxTotal).toFixed(2);
  // const tax = cartTotal * 0.08;

  const removeItem = (itemToRemove) => {
    console.log("removeItem, idToRemove: ", itemToRemove);
    removeItemFromCart(itemToRemove);
  };

  const updateCart = (itemToUpdate, newQuantity) => {
    updateCartItem(itemToUpdate, newQuantity);
  };

  return (
    <div>
      <h1 className="cart-heading">Your Cart ({cartCount} items)</h1>
      <div className="cart-container">
        {/* Header */}
        <div className="cart-header">
          <div>
            <strong>Item</strong>
          </div>
          <div>
            <strong>Price</strong>
          </div>
          <div>
            <strong>Quantity</strong>
          </div>
          <div className="cart-header-total">
            <strong>Remove</strong>
          </div>
        </div>
        {/* Cart Items Rendered here */}
        {cartItems.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <div className="image-desc-container">
                <div className="cart-image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                <div className="cart-description">
                  <span>
                    <strong>{item.brandName}</strong>
                  </span>
                  <span>
                    <strong>{item.productName}</strong>
                  </span>
                  <span>
                    Color: <strong>{item.color}</strong>
                  </span>
                  <span>
                    Size: <strong>{item.size}</strong>
                  </span>
                </div>
              </div>
              <div className="cart-price">${parseFloat(item.discountPrice).toFixed(2)}</div>
              <div className="cart-quantity">
                {/* If qty is greater than 1, then allow user to decrease quantity on click. Else, display icon without updating quantity */}
                {item.quantity > 1 ? (
                  <DecreaseIcon className="decrease-icon" onClick={() => updateCart(item, item.quantity - 1)} />
                ) : (
                  <DecreaseIcon className="decrease-icon" />
                )}
                {item.quantity}
                <IncreaseIcon className="increase-icon" onClick={() => updateCart(item, item.quantity + 1)} />
              </div>
              <div className="cart-total-remove">
                <RemoveBtn className="cart-remove" onClick={() => removeItem(item)} />
              </div>
            </div>
          );
        })}

        {/* Footer */}
        <div className="cart-footer-container">
          <div className="cart-footer">
            <div className="footer-item">
              <span>Subtotal: </span>
              <span>${parseFloat(cartTotal).toFixed(2)}</span>
            </div>
            <div className="footer-item">
              <span>Sales Tax: </span>
              <span>${parseFloat(taxTotal).toFixed(2)}</span>
            </div>
            <div className="footer-item">
              <span>Order Total: </span>
              <span className="order-total-value">${parseFloat(cartTotal + taxTotal).toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="cart-checkout-button">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
