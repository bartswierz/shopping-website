import "./hats.styles.scss";
import ProductList from "../../product-list/product-list.component";

const Hats = () => {
  const hatList = [
    {
      id: 31,
      description: "Baseball Cap",
      price: 15,
      imageUrl: "https://i.ibb.co/SmyzmXM/hat.jpg",
    },
    {
      id: 32,
      description: "Beanie",
      price: 15,
      imageUrl: "https://i.ibb.co/SmyzmXM/hat.jpg",
    },
    {
      id: 33,
      description: "Snapback Cap",
      price: 15,
      imageUrl: "https://i.ibb.co/SmyzmXM/hat.jpg",
    },
    {
      id: 34,
      description: "Mesh Cap",
      price: 15,
      imageUrl: "https://i.ibb.co/SmyzmXM/hat.jpg",
    },
    {
      id: 35,
      description: "Visor Hat",
      price: 15,
      imageUrl: "https://i.ibb.co/SmyzmXM/hat.jpg",
    },
    {
      id: 36,
      description: "Cowboy Hat",
      price: 15,
      imageUrl: "https://i.ibb.co/SmyzmXM/hat.jpg",
    },
  ];

  return <ProductList products={hatList} />;
};

export default Hats;
