import "./product-card-desktop.styles.scss";
import CartButton from "../buttons/cart-button/cart-button.component";
import SelectColor from "../select-color/select-color.component";
import SelectSize from "../select-size/select-size.component";
import { useEffect, useState, useContext, ChangeEvent, Key } from "react";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Rating from "@mui/material/Rating";

//TODO - add interface for products
// interface ProductCardDesktopProps {}

export interface ProductCardProps {
  products: [
    {
      featuresList: string[];
      shoesList: {
        brandName: string;
        color: string;
        discountPrice: number;
        id: number;
        imageUrl: string;
        originalPrice: number;
        productName: string;
        starRating: number;
        subheader: string;
        totalReviews: number;
      }[];
    }
  ];
}

export interface Product {
  brandName: string;
  color: string;
  discountPrice: number;
  id: number;
  imageUrl: string;
  originalPrice: number;
  productName: string;
  starRating: number;
  subheader: string;
  totalReviews: number;
}

// Products = AN Array containing an object, containing two arrays, (featuresList, and shoesList)
// Shoe List holds 5 objects
const ProductCardDesktop: React.FC<ProductCardProps> = ({ products }: ProductCardProps) => {
  const { shoesList, featuresList } = products[0];
  const [color, setColor] = useState<string>("Color");
  const [size, setSize] = useState<string>("Size");
  const [index, setIndex] = useState<number>(0);
  const maxIndex: number = shoesList.length - 1;
  const [displayShoe, setDisplayShoe] = useState(shoesList[index]);
  const [featureList, setFeatureList] = useState<string[]>(featuresList);
  //CONTAINS ALL INFORMATION ON THE CURRENT SHOE TO BE PASSED TO OUR CART BUTTON COMPONENT
  const [product, setProduct] = useState<Product>(shoesList[index]);
  // console.log("product: ", product);

  //Update new shoe & receive product details
  useEffect(() => {
    setDisplayShoe(shoesList[index]);
    setProduct(shoesList[index]);
  }, [index, shoesList]);

  // Callback Function - Passed colorHandler as prop
  const colorHandler = (colorPicked: string): void => {
    // console.log("colorPicked: ", colorPicked);
    setColor(colorPicked);
  };

  // Callback Function - Passed sizeHandler as prop
  const sizeHandler = (sizePicked: string): void => {
    // console.log("sizePicked: ", sizePicked);
    setSize(sizePicked);
  };

  //DECREMENT INDEX OR RESET TO maxIndex(LAST ITEM) TO RENDER CURRENT SHOE
  const handlePrevious = () => {
    let newIndex;
    if (index === 0) {
      newIndex = maxIndex;
    } else {
      newIndex = index - 1;
    }
    setIndex(newIndex);
  };

  //INCREMENT INDEX OR RESET TO 0(FIRST ITEM) TO RENDER CURRENT SHOE
  const handleNext = () => {
    let newIndex;
    if (index === maxIndex) {
      //GO BACK THE TO FIRST SHOE
      newIndex = 0;
    } else {
      //INDEX IS 0 TO (maxIndex - 1)
      setIndex(index + 1);
      newIndex = index + 1;
    }
    setIndex(newIndex);
  };

  return (
    <>
      <div className="product-card-container">
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

        {/* LEFT */}
        <div className="product-card-left-container">
          {/* HEADER */}
          <div className="product-card-header-container">
            <h1 className="product-card-header">{displayShoe.brandName}</h1>
            <p className="product-card-subheader">{displayShoe.subheader}</p>
          </div>

          {/* PRODUCT NAME */}
          <div className="product-card-details-container">
            <p className="product-card-details-name">{displayShoe.productName}</p>

            {/* PRODUCT COLOR & RATING */}
            <div className="product-card-color-rating">
              <p>{displayShoe.color}</p>
              <p className="product-card-star-rating-container">
                <Rating value={displayShoe.starRating} precision={0.5} readOnly className="product-card-star" /> (
                <a href="#" className="product-card-rating">
                  {displayShoe.totalReviews} REVIEWS
                </a>
                )
              </p>
            </div>
          </div>

          {/* PRODUCT FEATURES LIST */}
          <ul className="product-card-features-list">
            {featureList.map((feature: string, idx: Key) => (
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
                {/* <SelectSize setSize={setSize} onChange={(event) => sizeHandler(event)} /> */}
                <SelectSize setSize={setSize} onChange={sizeHandler} />
              </div>

              {/* COLOR */}
              <div className="product-card-color">
                <span>COLOR</span>
                <SelectColor setColor={setColor} onChange={colorHandler} />
                {/* <SelectColor setColor={setColor} onChange={(event) => colorHandler(event)} /> */}
              </div>
            </div>

            {/* COST & CART BTN CONTAINER */}
            <div className="product-card-options-right">
              {/* COST */}
              <div className="product-card-cost">
                <s className="product-card-cost-slash">${displayShoe.originalPrice}</s>
                <span className="product-card-cost-discount">${displayShoe.discountPrice}</span>
              </div>

              {/* OnClick, we will pass color and size as props to CartButton */}
              <CartButton product={product} color={color} size={size} />

              {/* <CartButton product={product} color={color} size={size} resetOptionsHandler={resetOptionsHandler} /> */}
              {/* <CartButton product={product} color={color} size={size} onClick={() => resetOptions()} /> */}
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="product-card-right-container">
          <div className="product-card-img-container">
            <img src={displayShoe.imageUrl} className="product-img" alt="shoe" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCardDesktop;
