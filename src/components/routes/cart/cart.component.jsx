import "./cart.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import { ReactComponent as RemoveBtn } from "../../../assets/trash-outline.svg";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

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
            <div className="cart-item">
              <div className="cart-image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
              <div className="cart-description">{item.description}</div>
              <div className="cart-color">Color</div>
              <div className="cart-quantity">Quantity</div>
              <div className="cart-price">${item.price}</div>
              {/* <div className="cart-remove">X</div> */}
              <RemoveBtn className="cart-remove" />
            </div>
          );
        })}

        <div className="cart-footer">
          <div>Items (#): $0</div>
          <div>Tax: $0</div>
          <div className="order-total">
            Order Total: <span className="order-total-value">$0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
