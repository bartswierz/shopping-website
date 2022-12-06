import "./hats.styles.scss";
import ProductList from "../../product-list/product-list.component";

const Hats = () => {
  const hatList = [
    {
      id: 31,
      description: "Hat 1",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 32,
      description: "Hat 2",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 33,
      description: "Hat 3",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 34,
      description: "Hat 4",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 35,
      description: "Hat 5",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 36,
      description: "Hat 6",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 37,
      description: "Hat 7",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 38,
      description: "Hat 8",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
  ];

  return <ProductList products={hatList} />;
};

export default Hats;
