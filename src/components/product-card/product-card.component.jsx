import "./product-card.styles.scss";
import CartButton from "../buttons/cart-button/cart-button.component";
import Select from "../select/select.component";
import SelectSize from "../select-size/select-size.component";
import { useState } from "react";
import { ReactComponent as DecreaseIcon } from "../../assets/remove-outline.svg";
import { ReactComponent as IncreaseIcon } from "../../assets/add-outline.svg";

const ProductCard = ({ product }) => {
  // Return image, description, url
  const { description, price, imageUrl } = product;
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
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

  const sizeHandler = (event) => {
    console.log("PRODUCT_CARD event: ", event);
    const size = event.target.value;
    // console.log("Color Changed! Event:", event);
    console.log("Size Changed! size:", size);
    setSize(size);
  };

  return (
    <div className="product-item-container">
      <div className="product-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="info-container">
        <div className="product-text-container">
          <div className="product-item-description">{description}</div>
          <div className="product-item-price">${price}</div>
        </div>
        <div className="quantity-color-container">
          {/* Pass in type, shirt-pants-jacket-jeans-shoes, depending which one we pass in, will determine which of the 2-4 select options we render */}
          <SelectSize productType={product.productType} onChange={(event) => sizeHandler(event)} setSize={setSize} />
          <Select productType={product.productType} onChange={(event) => colorHandler(event)} setColor={setColor} />

          {/* Quantity */}
          <div className="quantity-container">
            {quantity > 1 ? (
              <DecreaseIcon className="decrement-button" onClick={() => setQuantity(quantity - 1)}></DecreaseIcon>
            ) : (
              <DecreaseIcon className="decrement-button"></DecreaseIcon>
            )}
            <div className="quantity-value">{quantity}</div>
            <IncreaseIcon className="increment-button" onClick={() => setQuantity(quantity + 1)}></IncreaseIcon>
          </div>
          <CartButton product={product} quantity={quantity} color={color} size={size} />
        </div>
      </div>
      {/* Pass product details to button */}
      {/* <CartButton product={product} quantity={quantity} color={color} size={size} /> */}
    </div>
  );
};
export default ProductCard;
