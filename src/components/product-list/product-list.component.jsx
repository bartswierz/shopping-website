import "./product-list.styles.scss";
import ProductItem from "../product-item/product-item.component";
// Pass in product list from shirt component
const ProductList = ({ products }) => {
  console.log("products: ", products);
  // Return image, description, price
  return (
    <div className="product-list-container">
      {products.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductList;
