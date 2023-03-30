import "./checkout-cart.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";

const CheckoutCart = () => {
  const { cartCount, cartItems } = useContext(CartContext);

  const current = new Date();
  const startDate = `${current.getMonth() + 1}/${current.getDate() + 3}`;
  const endDate = `${current.getMonth() + 1}/${current.getDate() + 8}`;

  return (
    <div className="checkout-cart-container">
      {cartCount > 0 ? (
        <div className="checkout-cart-header">IN YOUR CART ({cartCount})</div>
      ) : (
        <div className="checkout-cart-header">Empty Cart</div>
      )}

      {cartCount > 0 ? (
        <div className="checkout-cart-arrival">
          ARRIVES {startDate} - {endDate}
        </div>
      ) : null}
      {/* {cartCount > 0 ? (
            <div className="checkout-cart-arrival">
              ARRIVES <DatePicker onChange={DatePickerProps} />
              /1 - 2/9
            </div>
          ) : null} */}

      {/* Cart Items go here */}
      <div className="checkout-cart-item-container">
        {cartItems.map((item) => {
          return (
            <div className="checkout-item" key={item.id}>
              <div>
                <div className="checkout-cart-image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
              </div>
              <div className="checkout-cart-text">
                <div>{item.brandName}</div>
                <div>{item.productName}</div>
                <div>Color: {item.color}</div>
                <div>Size: {item.size}</div>
                <div>Qty: {item.quantity}</div>
                <div>${parseFloat(item.discountPrice).toFixed(2)}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Link back to Cart Page */}
      {cartCount > 0 ? (
        <div className="checkout-cart-link">
          <Link to="/cart">Edit Cart</Link>
        </div>
      ) : null}
    </div>
  );
};

export default CheckoutCart;
