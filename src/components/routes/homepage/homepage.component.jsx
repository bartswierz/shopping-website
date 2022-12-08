import Navigation from "../navigation/navigation.component";
import Directory from "../../directory/directory.component";
import { Outlet } from "react-router-dom";

// Our homepage displayed at '/'
const Homepage = () => {
  // Holds our directory categories for routes
  const categories = [
    {
      id: 1,
      title: "SHIRTS",
      imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    },
    {
      id: 2,
      title: "PANTS",
      imageUrl: "https://i.ibb.co/qkV6Szh/pants.jpg",
    },
    {
      id: 3,
      title: "JACKETS",
      imageUrl: "https://i.ibb.co/bFXrZWV/jacket.jpg",
    },
    {
      id: 4,
      title: "HATS",
      imageUrl: "https://i.ibb.co/SmyzmXM/hat.jpg",
    },
    {
      id: 5,
      title: "SHOES",
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
    },
    // {
    //   id: 6,
    //   title: "Ties",
    //   imageUrl: "https://i.ibb.co/W5qcqjk/dress-shirt.jpg",
    // },
  ];

  return (
    <>
      {/* <Navigation /> */}
      <Directory categories={categories} />
      {/* Displays the test route content */}
      <Outlet />
    </>
  );
};

export default Homepage;
