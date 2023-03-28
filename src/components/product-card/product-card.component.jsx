import "./product-card.styles.scss";
import CartButton from "../buttons/cart-button/cart-button.component";
import Select from "../select-color/select-color.component";
import SelectSize from "../select-size/select-size.component";
import { useEffect, useState, useContext } from "react";
import { ReactComponent as DecreaseIcon } from "../../assets/remove-outline.svg";
import { ReactComponent as IncreaseIcon } from "../../assets/add-outline.svg";
import NikeShoeRed from "./../../assets/nike-shoe-red.png";
import NikeShoeWhite from "./../../assets/nike-shoe-white.png";
import NikeShoeGreen from "./../../assets/nike-shoe-green.png";

import NikeShoe from "./../../assets/nike-shoe.png";
import NikeShoe2 from "./../../assets/nike-shoe2.png";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ProductCard = ({ products }) => {
  const { shoeList, featuresList } = products[0];

  //USED TO DISPLAY SHOE DETAILS ON SCREEN, SET TO FIRST PRODUCT FETCHED FROM OUR FIREBASE DB
  const [currentShoe, setCurrentShoe] = useState(shoeList[0]);
  // ARRAY LIST OF SHOE FEATURES
  const [featureList, setFeatureList] = useState(featuresList);
  //USED TO RENDER PREV/NEXT SHOE
  const [index, setIndex] = useState(0);

  const maxIndex = shoeList.length - 1;
  // Will find the number of shoes we have, will be used for navigating to prev/next shoe
  // const [maxIndex, setMaxIndex] = useState(shoeList.length - 1);
  console.log("products: ", products);

  //DECREMENT INDEX OR RESET TO maxIndex(LAST ITEM) TO RENDER CURRENT SHOE
  const handlePrevious = () => {
    //USER IS AT START - SET INDEX TO LAST(maxIndex)
    if (index === 0) {
      console.log("AT END OF LIST - GO BACK TO FIRST: ", index);
      setIndex(maxIndex);
      setCurrentShoe(shoeList[index]);
      // setCurrentShoe(shoeList[index]);
    }
    //USER IS AT LAST ITEM - DECREMENT BY 1
    else if (index === maxIndex) {
      setIndex(index - 1);
      setCurrentShoe(shoeList[index]);
    }
    //USER IS IN MIDDLE - DECREMENT INDEX BY 1
    else if (index < maxIndex) {
      setIndex(index - 1);
      setCurrentShoe(shoeList[index]);
    }
  };

  //INCREMENT INDEX OR RESET TO 0(FIRST ITEM) TO RENDER CURRENT SHOE
  const handleNext = () => {
    //USER IS AT START - WORKS: 0
    if (index === 0) {
      setIndex(index + 1);
      setCurrentShoe(shoeList[index]);
      // setCurrentShoe(shoeList[index]);
    }
    //USER IS IN MIDDLE - WORK: 1
    else if (index < maxIndex) {
      //TODO - works, 0, 1, 2(NO)
      setIndex(index + 1);
      setCurrentShoe(shoeList[index]);
    }
    // ELSE USER IS AT END, RESET TO START
    else {
      setIndex(0);
      setCurrentShoe(shoeList[index]);
    }
  };

  // if (index === shoeList.length - 1) {
  //   console.log("AT END OF LIST - GO BACK TO FIRST: ", index);
  //   setIndex(0);
  //   setCurrentShoe(shoeList[index]);
  //   // setCurrentShoe(shoeList[index]);
  // } else {
  //   console.log("NOT AT END INCREASE INDEX BY 1: ", index);
  //   // setIndex(index + 1);
  //   setIndex(index + 1);
  //   setCurrentShoe(shoeList[index]);
  // }

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
                <s className="product-card-cost-slash">${currentShoe.originalPrice}</s>
                <span className="product-card-cost-discount">${currentShoe.discountPrice}</span>
              </div>

              <CartButton />
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="product-card-right-container">
          <div className="product-card-img-container">
            <img src={currentShoe.imageUrl} className="product-img" alt="shoe" />
          </div>

          {/* BUTTONS */}
          {/* Temp buttons for testing  */}
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
              {/* <ArrowBackIosIcon onClick={handlePrevious} className="prev-btn-icon" /> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;

// return (
//   <>
//     <div className="product-card-container">
//       {/* LEFT */}
//       <div className="product-card-left-container">
//         {/* HEADER */}
//         <div className="product-card-header-container">
//           <h1 className="product-card-header">AIR JORDAN</h1>
//           <p className="product-card-subheader">ICONIC SHOES FOR LESS</p>
//         </div>

//         {/* PRODUCT NAME */}
//         <div className="product-card-details-container">
//           <span className="product-card-details-name">AIR JORDAN 1 RETRO HIGH</span>

//           {/* PRODUCT COLOR & RATING */}
//           <div>
//             <p>CORE BLACK / CARBON</p>
//             <span>STAR RATING (249 REVIEWS)</span>
//           </div>
//         </div>

//         {/* PRODUCT FEATURES LIST */}
//         <ul className="product-card-features-list">
//           <li>PREMIUM LIGHTWEIGHT MATERIALS</li>
//           <li>PREMIUM INSOLES FOR SHOCK ABSORPTION & COMFORT</li>
//           <li>RUBBER OUTSOLE FOR ADDED TRACTION</li>
//           <li>STRUCTURED FIT & ICONIC LOOK</li>
//           <li>PERCISE FIT TO PREVENT SLIPPING</li>
//           <li>ANKLE SUPPORT</li>
//         </ul>

//         {/* Contains Size, Color, Cost, Cart Button */}
//         <div className="product-card-options-container">
//           {/* SIZE & COLOR*/}
//           <div className="product-card-options-left">
//             {/* SIZE */}
//             <div className="product-card-size">
//               <span>SIZE</span>
//               <SelectSize />
//             </div>

//             {/* COLOR */}
//             <div className="product-card-color">
//               <span>COLOR</span>
//               <Select />
//             </div>
//           </div>

//           {/* COST & CART BTN CONTAINER */}
//           <div className="product-card-options-right">
//             {/* COST */}
//             <div className="product-card-cost">
//               {/* <p> */}
//               <s className="product-card-cost-slash">$220</s>
//               <span className="product-card-cost-discount">$179</span>
//               {/* </p> */}
//             </div>

//             <CartButton />
//           </div>
//         </div>
//       </div>
//       {/* RIGHT */}
//       {/* <div className="product-card-right-container"> */}
//       <div className="product-card-img-container">
//         {/* <img src={NikeShoeRed} className="product-img" alt="shoe" /> */}
//         {/* <img src={NikeShoeGreen} className="product-img" alt="shoe" /> */}
//         <img src={NikeShoeWhite} className="product-img" alt="shoe" />
//       </div>
//     </div>
//   </>
// );
