import "./product-card.styles.scss";
import CartButton from "../buttons/cart-button/cart-button.component";
import SelectColor from "../select-color/select-color.component";
import Quantity from "../quantity/quantity.component";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  // Return image, description, url
  const { description, price, imageUrl } = product;

  // Push card information to Cart Context in here onClick
  // i.e. onClick => add description, price, imageUrl, color(from SelectColor Component), Quantity(from Quantity Component)
  const addItemHandler = () => {};

  const quantityHandler = () => {
    console.log("Quantity Changed! ");
  };
  return (
    <div className="product-item-container">
      <div className="product-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="product-text-container">
        <div className="product-item-description">{description}</div>
        <div className="product-item-price">${price}</div>
      </div>
      <div className="quantity-color-container">
        <Quantity onChange={() => quantityHandler()} />
        <SelectColor />
      </div>
      {/* Pass product details to button */}
      <CartButton product={product} />
    </div>
  );
};
export default ProductCard;
