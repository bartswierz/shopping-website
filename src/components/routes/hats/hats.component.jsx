import "./hats.styles.scss";
import ProductList from "../../product-list/product-list.component";

const Hats = () => {
  const hatList = [
    {
      id: 31,
      description: "Baseball Cap",
      price: 15,
      imageUrl: "https://i.ibb.co/SmyzmXM/hat.jpg",
      productType: "hat",
    },
    {
      id: 32,
      description: "Beanie",
      price: 15,
      imageUrl: "https://i.ibb.co/SmyzmXM/hat.jpg",
      productType: "hat",
    },
    {
      id: 33,
      description: "Snapback Cap",
      price: 15,
      imageUrl: "https://i.ibb.co/SmyzmXM/hat.jpg",
      productType: "hat",
    },
    {
      id: 34,
      description: "Mesh Cap",
      price: 15,
      imageUrl: "https://i.ibb.co/SmyzmXM/hat.jpg",
      productType: "hat",
    },
    {
      id: 35,
      description: "Visor Hat",
      price: 15,
      imageUrl: "https://i.ibb.co/SmyzmXM/hat.jpg",
      productType: "hat",
    },
    {
      id: 36,
      description: "Cowboy Hat",
      price: 15,
      imageUrl: "https://i.ibb.co/SmyzmXM/hat.jpg",
      productType: "hat",
    },
  ];

  return <ProductList products={hatList} />;
};

export default Hats;
