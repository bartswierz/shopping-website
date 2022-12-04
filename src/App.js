import "./App.css";
import Navigation from "./components/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Directory from "./components/directory/directory.component";

const App = () => {
  // Holds our directory categories for routes
  const categories = [
    {
      id: 1,
      title: "Shirts",
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 2,
      title: "Pants",
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 3,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 4,
      title: "Hats",
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 5,
      title: "Shoes",
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    // {
    //   id: 6,
    //   title: "Ties",
    //   imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    // },
  ];

  return (
    <div>
      <Navigation />
      {/* Grid layout - Each container will be a link/route */}
      <Directory categories={categories} />
    </div>
  );
};

export default App;
