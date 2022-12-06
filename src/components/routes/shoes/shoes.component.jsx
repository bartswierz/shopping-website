import "./shoes.styles.scss";
import ProductList from "../../product-list/product-list.component";

const Shoes = () => {
  const shoeList = [
    {
      id: 41,
      description: "Shoes 1",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 42,
      description: "Shoes 2",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 43,
      description: "Shoes 3",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 44,
      description: "Shoes 4",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 45,
      description: "Shoes 5",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 46,
      description: "Shoes 6",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 47,
      description: "Shoes 7",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 48,
      description: "Shoes 8",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
  ];

  return <ProductList products={shoeList} />;
};

export default Shoes;
