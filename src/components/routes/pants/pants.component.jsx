import "./pants.styles.scss";
import ProductList from "../../product-list/product-list.component";

const Pants = () => {
  const pantsList = [
    {
      id: 1,
      description: "Pants 1",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 2,
      description: "Pants 2",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 3,
      description: "Pants 3",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 4,
      description: "Pants 4",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 5,
      description: "Pants 5",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 6,
      description: "Pants 6",
      price: 15,
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    // {
    //   id: 7,
    //   description: "Tanks",
    //   price: 15,
    //   imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    // },
  ];

  return <ProductList products={pantsList} />;
};

export default Pants;
