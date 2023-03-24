import "./product-list.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import { useContext, useEffect, useState } from "react";

//THIS ONE IS THE CONTAINER FOR EACH INDIVIDUAL COMPONENT
// Pass in product list from shirt component
const ProductList = ({ products }) => {
  // The ? ensures we DO NOT RENDER COMPONENT UNTIL WE GET DATA FROM OUR ASYNC FUNCTION. "Does product exist? if it does then map through and render product cards"
  return (
    <div className="product-list-container">
      {products?.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
