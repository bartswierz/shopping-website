import "./pants.styles.scss";
import ProductList from "../../product-list/product-list.component";

const Pants = () => {
  const pantsList = [
    {
      id: 11,
      description: "Pants 1",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 12,
      description: "Pants 2",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 13,
      description: "Pants 3",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 14,
      description: "Pants 4",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 15,
      description: "Pants 5",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 16,
      description: "Pants 6",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    // {
    //   id: 17,
    //   description: "Tanks",
    //   price: 15,
    //   imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    // },
  ];

  return <ProductList products={pantsList} />;
};

export default Pants;
