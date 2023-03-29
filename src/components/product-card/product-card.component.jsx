import "./product-card.styles.scss";
import CartButton from "../buttons/cart-button/cart-button.component";
import SelectColor from "../select-color/select-color.component";
import SelectSize from "../select-size/select-size.component";
import { useEffect, useState, useContext } from "react";
import { ReactComponent as DecreaseIcon } from "../../assets/remove-outline.svg";
import { ReactComponent as IncreaseIcon } from "../../assets/add-outline.svg";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ProductCard = ({ products }) => {
  const { shoesList, featuresList } = products[0];
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  // console.log("PRODUCT CARD - Products: ", products);
  // console.log("SHOELIST: ", shoesList);
  // console.log("FEATURES LIST: ", featuresList);

  //USED TO DISPLAY SHOE DETAILS ON SCREEN, SET TO FIRST PRODUCT FETCHED FROM OUR FIREBASE DB
  const [currentShoe, setCurrentShoe] = useState(shoesList[0]);
  // ARRAY LIST OF SHOE FEATURES
  const [featureList, setFeatureList] = useState(featuresList);

  //OBJECT CONTAINS: HOLDS INFORMATION FOR THE CURRENT SHOE DISPLAYED. WILL BE PASSED TO CARTBUTTON
  const [product, setProduct] = useState(shoesList[0]);
  // console.log("product: ", product);

  //USED TO RENDER PREV/NEXT SHOE
  const [index, setIndex] = useState(0);

  const maxIndex = shoesList.length - 1;
  // Will find the number of shoes we have, will be used for navigating to prev/next shoe

  const colorHandler = (event) => {
    // console.log("PRODUCT_CARD event: ", event);
    const color = event.target.value;
    // console.log("Color Changed - color:", color);
    setColor(color);
  };

  const sizeHandler = (event) => {
    // console.log("PRODUCT_CARD event: ", event);
    const size = event.target.value;
    // console.log("Size Change:", size);
    setSize(size);
  };

  //DECREMENT INDEX OR RESET TO maxIndex(LAST ITEM) TO RENDER CURRENT SHOE
  const handlePrevious = () => {
    //USER IS AT START - SET INDEX TO LAST(maxIndex)
    if (index === 0) {
      console.log("AT END OF LIST - GO BACK TO FIRST: ", index);
      setIndex(maxIndex);
      setCurrentShoe(shoeList[index]);
      console.log("shoeList[index]: ", shoeList[index]);
      setProduct(shoeList[index]);
      // setCurrentShoe(shoeList[index]);
    }
    //USER IS AT LAST ITEM - DECREMENT BY 1
    else if (index === maxIndex) {
      setIndex(index - 1);
      setCurrentShoe(shoeList[index]);
      setProduct(shoeList[index]);
    }
    //USER IS IN MIDDLE - DECREMENT INDEX BY 1
    else if (index < maxIndex) {
      setIndex(index - 1);
      setCurrentShoe(shoeList[index]);
      setProduct(shoeList[index]);
    }
  };

  //INCREMENT INDEX OR RESET TO 0(FIRST ITEM) TO RENDER CURRENT SHOE
  const handleNext = () => {
    //USER IS AT START - WORKS: 0
    if (index === 0) {
      setIndex(index + 1);
      setCurrentShoe(shoesList[index]);
      setProduct(shoesList[index]);
    }
    //USER IS IN MIDDLE - WORK: 1
    else if (index < maxIndex) {
      //TODO - works, 0, 1, 2(NO)
      setIndex(index + 1);
      setCurrentShoe(shoesList[index]);
      setProduct(shoesList[index]);
    }
    // ELSE USER IS AT END, RESET TO START
    else {
      setIndex(0);
      setCurrentShoe(shoesList[index]);
      setProduct(shoesList[index]);
    }
  };

  return (
    <>
      <div className="product-card-container">
        {/* LEFT */}
        <div className="product-card-left-container">
          {/* HEADER */}
          <div className="product-card-header-container">
            <h1 className="product-card-header">{currentShoe.brandName}</h1>
            <p className="product-card-subheader">{currentShoe.subheader}</p>
          </div>

          {/* PRODUCT NAME */}
          <div className="product-card-details-container">
            <span className="product-card-details-name">{currentShoe.productName}</span>

            {/* PRODUCT COLOR & RATING */}
            <div>
              <p>CORE BLACK / CARBON</p>
              <span>STAR RATING (249 REVIEWS)</span>
            </div>
          </div>

          {/* PRODUCT FEATURES LIST */}
          <ul className="product-card-features-list">
            {featureList.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          {/* Contains Size, Color, Cost, Cart Button */}
          <div className="product-card-options-container">
            {/* SIZE & COLOR*/}
            <div className="product-card-options-left">
              {/* SIZE */}
              <div className="product-card-size">
                <span>SIZE</span>
                <SelectSize setSize={setSize} onChange={(event) => sizeHandler(event)} />
              </div>

              {/* COLOR */}
              <div className="product-card-color">
                <span>COLOR</span>
                <SelectColor setColor={setColor} onChange={(event) => colorHandler(event)} />
              </div>
            </div>

            {/* COST & CART BTN CONTAINER */}
            <div className="product-card-options-right">
              {/* COST */}
              <div className="product-card-cost">
                <s className="product-card-cost-slash">${currentShoe.originalPrice}</s>
                <span className="product-card-cost-discount">${currentShoe.discountPrice}</span>
              </div>

              {/* OnClick, we will pass color and size as props to CartButton */}
              <CartButton product={product} color={color} size={size} />
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="product-card-right-container">
          <div className="product-card-img-container">
            {/* TODO */}
            <img src={currentShoe.imageUrl} className="product-img" alt="shoe" />
          </div>

          {/* BUTTONS */}
          <div className="product-card-button-container">
            <button className="prev-btn">
              <ArrowBackIosIcon onClick={handlePrevious} className="prev-btn-icon" />
            </button>
            <div className="product-card-image-index">
              <p>
                {index + 1} / {maxIndex + 1}
              </p>
            </div>
            <button className="next-btn">
              <ArrowForwardIosIcon onClick={handleNext} className="next-btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
