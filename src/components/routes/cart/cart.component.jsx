import "./cart.styles.scss";

const Cart = () => {
  return (
    <div>
      <h1 className="cart-header">Cart Summary</h1>
      <div className="cart-container">
        {/* Header */}
        <div className="cart-header">
          <div>Product</div>
          <div>Description</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Remove</div>
        </div>

        {/* Cart Items Rendered here */}
        <div className="cart-item">
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
