import "./jackets.styles.scss";
import ProductList from "../../product-list/product-list.component";

const Jackets = () => {
  const jacketList = [
    {
      id: 1,
      description: "Jacket 1",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 2,
      description: "Jacket 2",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 3,
      description: "Jacket 3",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 4,
      description: "Jacket 4",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 5,
      description: "Jacket 5",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 6,
      description: "Jacket 6",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 7,
      description: "Jacket 7",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 8,
      description: "Jacket 8",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
  ];

  return <ProductList products={jacketList} />;
};

export default Jackets;
