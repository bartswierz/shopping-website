import "./product-item.styles.scss";
import CartButton from "../buttons/cart-button/cart-button.component";
import SelectColor from "../select-color/select-color.component";
import Quantity from "../quantity/quantity.component";

const ProductItem = ({ product }) => {
  // Return image, description, url
  const { description, price, imageUrl } = product;
  console.log("productItem: ", product);
  return (
    <div className="product-item-container">
      <div className="product-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="product-text-container">
        <div className="product-item-description">{description}</div>
        <div className="product-item-price">${price}</div>
      </div>
      <div className="quantity-color-container">
        <Quantity />
        <SelectColor />
      </div>
      <CartButton />
    </div>
  );
};
export default ProductItem;
