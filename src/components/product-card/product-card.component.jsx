import "./product-card.styles.scss";
import CartButton from "../buttons/cart-button/cart-button.component";
import Select from "../select/select.component";
import SelectSize from "../select-size/select-size.component";
import { useState } from "react";
import { ReactComponent as DecreaseIcon } from "../../assets/remove-outline.svg";
import { ReactComponent as IncreaseIcon } from "../../assets/add-outline.svg";
import NikeShoeRed from "./../../assets/nike-shoe-red.png";
import NikeShoeWhite from "./../../assets/nike-shoe-white.png";
import NikeShoeGreen from "./../../assets/nike-shoe-green.png";

import NikeShoe from "./../../assets/nike-shoe.png";
import NikeShoe2 from "./../../assets/nike-shoe2.png";

const ProductCard = ({ products }) => {
  // Return image, description, url
  // const { description, price, imageUrl } = products;
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  return (
    <>
      <div className="product-card-container">
        {/* LEFT */}
        <div className="product-card-left-container">
          {/* HEADER */}
          <div className="product-card-header-container">
            <p className="product-card-header">ADIDAS</p>
            <p className="product-card-subheader">IMPOSSIBLE IS NOTHING</p>
          </div>

          {/* PRODUCT NAME */}
          <div className="product-card-details-container">
            <span className="product-card-details-name">ULTRA ADIDAS 4D RUNNING</span>

            {/* PRODUCT COLOR & RATING */}
            <div>
              <p>CORE BLACK / CARBON</p>
              <span>STAR RATING (249 REVIEWS)</span>
            </div>
          </div>

          {/* PRODUCT FEATURES LIST */}
          <ul className="product-card-features-list">
            <li>LACE CLOSURE</li>
            <li>ADIDAS PRIMEKNIT TEXTILE UPPER</li>
            <li>TEXTITLE LINING</li>
            <li>3D-PRINTED 4D MIDSOLE</li>
            <li>RUBBER OUTSOLE</li>
          </ul>

          {/* Contains Size, Color, Cost, Cart Button */}
          <div className="product-card-options-container">
            {/* SIZE & COLOR*/}
            <div className="product-card-options-left">
              {/* SIZE */}
              <div className="product-card-size">
                <span>SIZE</span>
                <SelectSize />
              </div>

              {/* COLOR */}
              <div className="product-card-color">
                <span>COLOR</span>
                <Select />
              </div>
            </div>

            {/* COST & CART BTN CONTAINER */}
            <div className="product-card-options-right">
              {/* COST */}
              <div className="product-card-cost">
                <p>
                  <s className="product-card-cost-slash">$220</s>
                  <span className="product-card-cost-discount">$119</span>
                </p>
              </div>

              <CartButton />
            </div>
          </div>
        </div>
        {/* RIGHT */}
        {/* <div className="product-card-right-container"> */}
        <div className="product-card-img-container">
          {/* <img src={NikeShoeRed} className="product-img" alt="shoe" /> */}
          {/* <img src={NikeShoeGreen} className="product-img" alt="shoe" /> */}
          <img src={NikeShoeWhite} className="product-img" alt="shoe" />
        </div>
      </div>
    </>
  );
};
export default ProductCard;

// const quantityHandler = () => {
//   console.log("Quantity Changed! ");
// };

// const colorHandler = (event) => {
//   console.log("PRODUCT_CARD event: ", event);
//   const color = event.target.value;
//   // console.log("Color Changed! Event:", event);
//   console.log("Color Changed! color:", color);
//   setColor(color);
// };

// const sizeHandler = (event) => {
//   console.log("PRODUCT_CARD event: ", event);
//   const size = event.target.value;
//   // console.log("Color Changed! Event:", event);
//   console.log("Size Changed! size:", size);
//   setSize(size);
// };
