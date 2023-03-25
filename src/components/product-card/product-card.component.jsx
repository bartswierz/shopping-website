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
// import { CategoriesContext } from "../../contexts/categories.context";
// import { CategoriesContext } from "./../contexts/categories.context";

const ProductCard = ({ products }) => {
  // const { categoriesMap } = useContext(CategoriesContext);
  // Shoe Description
  const [featuresList, setFeaturesList] = useState([]);

  //Will use this to
  const [currentShoe, setCurrentShoe] = useState();

  // List of Shoes
  const [shoeList, setShoeList] = useState({});

  // Will find the number of shoes we have, will be used for navigating to prev/next shoe
  const [listLength, setListLength] = useState(0);

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

  return (
    <>
      <div className="product-card-container">
        {/* LEFT */}
        <div className="product-card-left-container">
          {/* HEADER */}
          <div className="product-card-header-container">
            {/* <h1 className="product-card-header">AIR JORDAN</h1>
            <p className="product-card-subheader">ICONIC SHOES FOR LESS</p> */}
            <h1 className="product-card-header">AIR JORDAN</h1>
            <p className="product-card-subheader">ICONIC SHOES FOR LESS</p>
          </div>

          {/* PRODUCT NAME */}
          <div className="product-card-details-container">
            <span className="product-card-details-name">AIR JORDAN 1 RETRO HIGH</span>

            {/* PRODUCT COLOR & RATING */}
            <div>
              <p>CORE BLACK / CARBON</p>
              <span>STAR RATING (249 REVIEWS)</span>
            </div>
          </div>

          {/* PRODUCT FEATURES LIST */}
          <ul className="product-card-features-list">
            <li>PREMIUM LIGHTWEIGHT MATERIALS</li>
            <li>PREMIUM INSOLES FOR SHOCK ABSORPTION & COMFORT</li>
            <li>RUBBER OUTSOLE FOR ADDED TRACTION</li>
            <li>STRUCTURED FIT & ICONIC LOOK</li>
            <li>PERCISE FIT TO PREVENT SLIPPING</li>
            <li>ANKLE SUPPORT</li>
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
                {/* <p> */}
                <s className="product-card-cost-slash">$220</s>
                <span className="product-card-cost-discount">$179</span>
                {/* </p> */}
              </div>

              <CartButton />
            </div>
          </div>

          {/* Temp buttons for testing  */}
          <div>
            <button>Previous</button>
            <button>Next</button>
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
