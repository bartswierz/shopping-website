import "./shoes.styles.scss";
import ProductList from "../../product-list/product-list.component";

const Shoes = () => {
  const shoeList = [
    {
      id: 41,
      description: "Basketball Shoes",
      price: 15,
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
      productType: "shoes",
    },
    {
      id: 42,
      description: "Running Shoes",
      price: 15,
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
      productType: "shoes",
    },
    {
      id: 43,
      description: "Soccer Shoes",
      price: 15,
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
      productType: "shoes",
    },
    {
      id: 44,
      description: "Hiking Boots",
      price: 15,
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
      productType: "shoes",
    },
    {
      id: 45,
      description: "Work Boots",
      price: 15,
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
      productType: "shoes",
    },
    {
      id: 46,
      description: "Dress Shoes",
      price: 15,
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
      productType: "shoes",
    },
    {
      id: 47,
      description: "Converse",
      price: 15,
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
      productType: "shoes",
    },
    {
      id: 48,
      description: "Climbing Shoes",
      price: 15,
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
      productType: "shoes",
    },
  ];

  return <ProductList products={shoeList} />;
};

export default Shoes;
