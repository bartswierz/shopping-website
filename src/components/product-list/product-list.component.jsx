import "./product-list.styles.scss";
import ProductCard from "../product-card/product-card.component";

// Pass in product list from shirt component
const ProductList = ({ products }) => {
  return (
    <div className="product-list-container">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductList;
