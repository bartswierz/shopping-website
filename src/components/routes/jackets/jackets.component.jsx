import "./jackets.styles.scss";
import ProductList from "../../product-list/product-list.component";

const Jackets = () => {
  const jacketList = [
    {
      id: 21,
      description: "Bomber Jacket",
      price: 15,
      imageUrl: "https://i.ibb.co/bFXrZWV/jacket.jpg",
    },
    {
      id: 22,
      description: "Denim Jacket",
      price: 15,
      imageUrl: "https://i.ibb.co/bFXrZWV/jacket.jpg",
    },
    {
      id: 23,
      description: "Leather Jacket",
      price: 15,
      imageUrl: "https://i.ibb.co/bFXrZWV/jacket.jpg",
    },
    {
      id: 24,
      description: "Blazer",
      price: 15,
      imageUrl: "https://i.ibb.co/bFXrZWV/jacket.jpg",
    },
    {
      id: 25,
      description: "Puffer Jacket",
      price: 15,
      imageUrl: "https://i.ibb.co/bFXrZWV/jacket.jpg",
    },
    {
      id: 26,
      description: "Overcoat",
      price: 15,
      imageUrl: "https://i.ibb.co/bFXrZWV/jacket.jpg",
    },
    {
      id: 27,
      description: "Varsity Jacket",
      price: 15,
      imageUrl: "https://i.ibb.co/bFXrZWV/jacket.jpg",
    },
    {
      id: 28,
      description: "Raincoat",
      price: 15,
      imageUrl: "https://i.ibb.co/bFXrZWV/jacket.jpg",
    },
  ];

  return <ProductList products={jacketList} />;
};

export default Jackets;
