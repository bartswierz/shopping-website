import ProductList from "../../product-list/product-list.component";

const Shirts = () => {
  const shirtList = [
    {
      id: 1,
      description: "Crew Neck Shirt",
      price: 15,
      imageUrl: "https://i.ibb.co/c6drzmJ/shirt.jpg",
      productType: "shirt",
    },
    {
      id: 2,
      description: "Polo Shirt",
      price: 15,
      imageUrl: "https://i.ibb.co/c6drzmJ/shirt.jpg",
      productType: "shirt",
    },
    {
      id: 3,
      description: "V-Neck Shirt",
      price: 15,
      imageUrl: "https://i.ibb.co/c6drzmJ/shirt.jpg",
      productType: "shirt",
    },
    {
      id: 4,
      description: "Tall Tee Shirt",
      price: 15,
      imageUrl: "https://i.ibb.co/c6drzmJ/shirt.jpg",
      productType: "shirt",
    },
    {
      id: 5,
      description: "Henley Shirt",
      price: 15,
      imageUrl: "https://i.ibb.co/c6drzmJ/shirt.jpg",
      productType: "shirt",
    },
    {
      id: 6,
      description: "Pocket Tee Shirt",
      price: 15,
      imageUrl: "https://i.ibb.co/c6drzmJ/shirt.jpg",
      productType: "shirt",
    },
    {
      id: 7,
      description: "Tank Top Shirt",
      price: 15,
      imageUrl: "https://i.ibb.co/c6drzmJ/shirt.jpg",
      productproductType: "shirt",
    },
  ];

  return <ProductList products={shirtList} />;
};

export default Shirts;
