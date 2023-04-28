import "./cart.styles.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, ProductDetails } from "../../../contexts/cart.context";
import RemoveBtn from "../../../assets/trash-outline.svg";
import DecreaseIcon from "../../../assets/chevron-back-outline.svg";
import IncreaseIcon from "../../../assets/chevron-forward-outline.svg";

// Redux
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store/store";
import { removeItemFromCart, updateCartItem } from "../../../store/slices/cartSlice";

const Cart: React.FC = () => {
  const cartCount = useSelector((state: RootState) => state.cart.cartCount);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartTotal = useSelector((state: RootState) => state.cart.cartTotal);
  const taxTotal = useSelector((state: RootState) => state.cart.taxTotal);

  const dispatch = useDispatch();
  /* TODO - Update these to use Redux 
    cartItems - DONE
    cartCount - DONE 
    cartTotal - DONE
    taxTotal - DONE
    removeItemFromCart 
    updateCartCount 
    updateCartItem
  */
  // const { cartItems, removeItemFromCart, cartCount, cartTotal, taxTotal, updateCartCount, updateCartItem } = useContext(CartContext);

  // REMOVE AN ITEM FROM THE CART
  const removeItem = (itemToRemove: ProductDetails): void => {
    // console.log("removeItem, idToRemove: ", itemToRemove);
    // const itemToRemove = action.payload in our redux
    dispatch(removeItemFromCart(itemToRemove));
  };

  // INCREASE/DECREASE QUANTITY OF AN ITEM INSIDE THE CART
  // const updateCart = (itemToUpdate: ProductDetails, newQuantity: number): void => {
  const updateCart = (cartItemToUpdate: ProductDetails, newQuantity: number): void => {
    // updateCartItem(itemToUpdate, newQuantity);
    dispatch(updateCartItem({ cartItemToUpdate, newQuantity }));
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
          <div className="cart-header-qty">
            <strong>QTY</strong>
          </div>
          <div className="cart-header-total">
            <strong>Remove</strong>
          </div>
        </div>
        {/* Cart Items Rendered here */}
        {cartItems.map((item: ProductDetails) => {
          return (
            <div className="cart-item" key={item.id}>
              <div className="image-desc-container">
                <div className="cart-image-container">
                  <img src={item.imageUrl} alt="Shoe" className="cart-image" />
                </div>
                <div className="cart-description">
                  <span>
                    <strong>{item.brandName}</strong>
                  </span>
                  <span className="cart-description-name">
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
              <div className="cart-price">${item.discountPrice.toFixed(2)}</div>
              <div className="cart-quantity">
                {/* If qty is greater than 1, then allow user to decrease quantity on click. Else, display icon without updating quantity */}
                {item.quantity > 1 ? (
                  <img src={DecreaseIcon} className="decrease-icon" onClick={() => updateCart(item, item.quantity - 1)} />
                ) : (
                  // <DecreaseIcon className="decrease-icon" onClick={() => updateCart(item, item.quantity - 1)} />
                  // <DecreaseIcon className="decrease-icon" />
                  <img src={DecreaseIcon} className="decrease-icon" />
                )}
                {item.quantity}
                <img src={IncreaseIcon} className="increase-icon" onClick={() => updateCart(item, item.quantity + 1)} />
                {/* <IncreaseIcon className="increase-icon" onClick={() => updateCart(item, item.quantity + 1)} /> */}
              </div>
              <div className="cart-total-remove">
                <img src={RemoveBtn} className="cart-remove" onClick={() => removeItem(item)} />
              </div>
            </div>
          );
        })}

        {/* Footer */}
        <div className="cart-footer-container">
          <div className="cart-footer">
            <div className="footer-item">
              <span>Subtotal: </span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="footer-item">
              <span>Sales Tax: </span>
              <span>${taxTotal.toFixed(2)}</span>
            </div>
            <div className="footer-item">
              <span>Order Total: </span>
              <span className="order-total-value">${(cartTotal + taxTotal).toFixed(2)}</span>
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
