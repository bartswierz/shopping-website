import "./jackets.styles.scss";
import ProductList from "../../product-list/product-list.component";

const Jackets = () => {
  const jacketList = [
    {
      id: 21,
      description: "Jacket 1",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 22,
      description: "Jacket 2",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 23,
      description: "Jacket 3",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 24,
      description: "Jacket 4",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 25,
      description: "Jacket 5",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 26,
      description: "Jacket 6",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 27,
      description: "Jacket 7",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 28,
      description: "Jacket 8",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
  ];

  return <ProductList products={jacketList} />;
};

export default Jackets;
