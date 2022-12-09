import "./product-card.styles.scss";
import CartButton from "../buttons/cart-button/cart-button.component";
import Select from "../select/select.component";
// import Quantity from "../quantity/quantity.component";
import { useContext, useState } from "react";
import { ReactComponent as Decrease } from "../../assets/remove-outline.svg";
import { ReactComponent as Increase } from "../../assets/add-outline.svg";

const ProductCard = ({ product }) => {
  // Return image, description, url
  const { description, price, imageUrl } = product;
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("Black");

  // const quantityHandler = () => {
  //   console.log("Quantity Changed! ");
  // };

  const colorHandler = (event) => {
    console.log("PRODUCT_CARD event: ", event);
    const color = event.target.value;
    // console.log("Color Changed! Event:", event);
    console.log("Color Changed! color:", color);
    setColor(color);
  };

  return (
    <div className="product-item-container">
      <div className="product-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="product-text-container">
        <div className="product-item-description">{description}</div>
        <div className="product-item-price">${price}</div>
      </div>
      <div className="quantity-color-container">
        {/* Quantity */}
        <div className="quantity-container">
          <Decrease className="decrement-button" onClick={() => setQuantity(quantity - 1)}></Decrease>
          <div className="quantity-value">{quantity}</div>
          <Increase className="increment-button" onClick={() => setQuantity(quantity + 1)}></Increase>
        </div>

        {/* Pass in type, shirt-pants-jacket-jeans-shoes, depending which one we pass in, will determine which of the 2-4 select options we render */}
        <Select productType={product.productType} onChange={(event) => colorHandler(event)} setColor={setColor} />
      </div>
      {/* Pass product details to button */}
      <CartButton product={product} quantity={quantity} color={color} />
      {/* <CartButton product={product} quantity={quantity} color={color} onClick={() => colorHandler(color)} /> */}
    </div>
  );
};
export default ProductCard;
