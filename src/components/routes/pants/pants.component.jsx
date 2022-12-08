import "./pants.styles.scss";
import ProductList from "../../product-list/product-list.component";

const Pants = () => {
  const pantsList = [
    {
      id: 11,
      description: "Straight Jeans",
      price: 15,
      imageUrl: "https://i.ibb.co/tQtwP9f/pants2.jpg",
      productType: "pants",
    },
    {
      id: 12,
      description: "Skinny Jeans",
      price: 15,
      imageUrl: "https://i.ibb.co/tQtwP9f/pants2.jpg",
      productType: "pants",
    },
    {
      id: 13,
      description: "Slim Jeans",
      price: 15,
      imageUrl: "https://i.ibb.co/tQtwP9f/pants2.jpg",
      productType: "pants",
    },
    {
      id: 14,
      description: "Athletic Jeans",
      price: 15,
      imageUrl: "https://i.ibb.co/tQtwP9f/pants2.jpg",
      productType: "pants",
    },
    {
      id: 15,
      description: "Bootcut Jeans",
      price: 15,
      imageUrl: "https://i.ibb.co/tQtwP9f/pants2.jpg",
      productType: "pants",
    },
    {
      id: 16,
      description: "Sweatpants",
      price: 15,
      imageUrl: "https://i.ibb.co/tQtwP9f/pants2.jpg",
      productType: "pants",
    },
  ];

  return <ProductList products={pantsList} />;
};

export default Pants;
