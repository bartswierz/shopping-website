import "./shirts.styles.scss";
import ProductList from "../../product-list/product-list.component";

const Shirts = () => {
  const shirtList = [
    {
      id: 1,
      description: "Crew Necks",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 2,
      description: "Polos",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 3,
      description: "V-Necks",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 4,
      description: "Tall Tees",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 5,
      description: "Henleys",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 6,
      description: "Pocket Tees",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 7,
      description: "Tanks",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
  ];

  return <ProductList products={shirtList} />;
};

export default Shirts;
