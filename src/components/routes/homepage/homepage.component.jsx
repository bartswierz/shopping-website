import Navigation from "../navigation/navigation.component";
import Directory from "../../directory/directory.component";
import { Outlet } from "react-router-dom";

// Our homepage displayed at '/'
const Homepage = () => {
  //TODO - change image icons with shoes - use the previous images before removing the background
  // Holds our directory categories for routes
  const categories = [
    {
      id: 1,
      // title: "Basketball",
      title: "Basketball",
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
    },
    {
      id: 2,
      // title: "Soccer",
      title: "Shoes",
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
    },
    {
      id: 3,
      // title: "Outdoor",
      title: "Shoes",
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
    },
    {
      id: 4,
      // title: "Iconic",
      title: "Shoes",
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
    },
    {
      id: 5,
      // title: "Casual",
      title: "Shoes",
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
    },
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
