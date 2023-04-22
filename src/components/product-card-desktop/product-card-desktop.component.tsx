import "./product-card-desktop.styles.scss";
import CartButton from "../buttons/cart-button/cart-button.component";
import SelectColor from "../select-color/select-color.component";
import SelectSize from "../select-size/select-size.component";
import { useEffect, useState, Key } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { CategoryData } from "../../contexts/categories.context";

interface ProductCardProps {
  products: CategoryData[];
}

export interface Product {
  id: string;
  brandName: string;
  productName: string;
  subheader: string;
  discountPrice: number;
  originalPrice: number;
  imageUrl: string;
  color: string;
  starRating: number;
  totalReviews: number;
}

interface DisplayShoe {
  id: string;
  brandName: string;
  productName: string;
  subheader: string;
  discountPrice: number;
  originalPrice: number;
  imageUrl: string;
  color: string;
  starRating: number;
  totalReviews: number;
}

export const shoeButtonSX = {
  // backgroundColor: "#1de5fd",
  backgroundColor: "#272727",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%23807f83' fill-opacity='0.05'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  fontWeight: 900,
  fontSize: "1.2rem",
  fontFamily: "Bebas Neue, sans-serif",
  ":hover": {
    backgroundColor: "#333",
  },
  ":active": {
    backgroundColor: "#1ccbde",
  },
  padding: "6px 12px",
  margin: "0px 12px",
  color: "#1de5fd",
};

const ProductCardDesktop: React.FC<ProductCardProps> = ({ products }: ProductCardProps) => {
  const { shoesList, featuresList } = products[0];
  const [color, setColor] = useState<string>("Color");
  const [size, setSize] = useState<string>("Size");
  const [index, setIndex] = useState<number>(0);
  const maxIndex: number = shoesList.length - 1;
  const [displayShoe, setDisplayShoe] = useState<DisplayShoe>(shoesList[index]);
  // const [featureList, setFeatureList] = useState<string[]>(featuresList);
  const featureList: string[] = featuresList;
  //CONTAINS ALL INFORMATION ON THE CURRENT SHOE TO BE PASSED TO OUR CART BUTTON COMPONENT
  const [product, setProduct] = useState<Product>(shoesList[index]);

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
  const handlePrevious = (): void => {
    let newIndex;
    if (index === 0) {
      newIndex = maxIndex;
    } else {
      newIndex = index - 1;
    }
    setIndex(newIndex);
  };

  //INCREMENT INDEX OR RESET TO 0(FIRST ITEM) TO RENDER CURRENT SHOE
  const handleNext = (): void => {
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
          <Button onClick={handlePrevious} sx={shoeButtonSX}>
            Prev Shoe
          </Button>
          <div className="product-card-image-index">
            <p>
              {index + 1} / {maxIndex + 1}
            </p>
          </div>
          <Button onClick={handleNext} sx={shoeButtonSX}>
            Next Shoe
          </Button>
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
                <SelectSize setSize={setSize} onChange={sizeHandler} />
              </div>

              {/* COLOR */}
              <div className="product-card-color">
                <span>COLOR</span>
                <SelectColor setColor={setColor} onChange={colorHandler} />
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
