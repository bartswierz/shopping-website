import "./product-card.styles.scss";
import CartButton from "../buttons/cart-button/cart-button.component";
import Select from "../select/select.component";
import SelectSize from "../select-size/select-size.component";
import { useEffect, useState, useContext } from "react";
import { ReactComponent as DecreaseIcon } from "../../assets/remove-outline.svg";
import { ReactComponent as IncreaseIcon } from "../../assets/add-outline.svg";
import NikeShoeRed from "./../../assets/nike-shoe-red.png";
import NikeShoeWhite from "./../../assets/nike-shoe-white.png";
import NikeShoeGreen from "./../../assets/nike-shoe-green.png";

import NikeShoe from "./../../assets/nike-shoe.png";
import NikeShoe2 from "./../../assets/nike-shoe2.png";

const ProductCard = ({ products }) => {
  const { shoeList, featuresList } = products[0];
  // console.log("shoeList passed: ", shoeList);
  // console.log("featuresList passed: ", featuresList);

  // Object containing each shoe
  const [shoesList, setShoesList] = useState(shoeList);

  // ARRAY list of shoe features
  const [featureList, setFeatureList] = useState(featuresList);

  //Will use this to - Set to first shoe on initial render
  const [currentShoe, setCurrentShoe] = useState(shoesList[0]);

  //will use this to update our current shoe & increment/decrement as needed
  const [index, setIndex] = useState(0);
  // console.log("index: ", index);

  // console.log("currentShoe: ", currentShoe);

  /*
  TODO
  -need shoe position to be increment in 
  */

  // Will find the number of shoes we have, will be used for navigating to prev/next shoe
  // const [listLength, setListLength] = useState(shoeList.length());
  const [listLength, setListLength] = useState(shoeList.length);
  console.log("listLength: ", listLength);

  // Return image, description, url
  // const { description, price, imageUrl } = products;
  // const [quantity, setQuantity] = useState(1);
  // const [color, setColor] = useState("");
  // const [size, setSize] = useState("");

  // console.log("categoriesMap: ", categoriesMap);

  console.log("products: ", products);
  // // console.log("products.basketball: ", products.basketball);
  // const { shoeList, featuresList } = products;
  // console.log("shoeList: ", shoeList);
  // console.log("featuresList: ", featuresList);
  // // console.log("products.featuresList: ", products[0]);

  //Go to previous shoe
  const handlePrevious = () => {
    //TODO: IF user is first shoe, SET TO shoe`${numberOfShoes}`
    console.log("handlePrevious Clicked");
  };

  //Go to next shoe
  const handleNext = () => {
    //TODO: if user is at last shoe, SET TO shoe1
    //THREE SHOES shoesList[0] = white, [1] = red, [2] = green
    console.log("handleNext Clicked");
    console.log("Current Shoe: ", currentShoe);

    console.log("INDEX: ", index, "AND listLength: ", listLength);
    //TODO - IF USER IS AT last index, set it to 0 to go back to first shoe option
    if (index === listLength) {
      console.log("AT END OF LIST - GO BACK TO FIRST: ", index);
      setIndex(0);
      // setCurrentShoe(shoeList[index]);
      // setCurrentShoe(shoeList[index]);
    } else {
      console.log("NOT AT END INCREASE INDEX BY 1: ", index);
      setIndex(index + 1);
      setCurrentShoe(shoeList[index]);
    }
  };

  return (
    <>
      <div className="product-card-container">
        {/* LEFT */}
        <div className="product-card-left-container">
          {/* HEADER */}
          <div className="product-card-header-container">
            {/* <h1 className="product-card-header">AIR JORDAN</h1>
            <p className="product-card-subheader">ICONIC SHOES FOR LESS</p> */}
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

          {/* Temp buttons for testing  */}
          <div>
            <button className="prev-btn" onClick={handlePrevious}>
              Previous
            </button>
            <button className="next-btn" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
        {/* RIGHT */}
        {/* <div className="product-card-right-container"> */}
        <div className="product-card-img-container">
          {/* <img src={NikeShoeRed} className="product-img" alt="shoe" /> */}
          {/* <img src={NikeShoeGreen} className="product-img" alt="shoe" /> */}
          {/* <img src={NikeShoeWhite} className="product-img" alt="shoe" /> */}
          <img src={currentShoe.imageUrl} className="product-img" alt="shoe" />
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
