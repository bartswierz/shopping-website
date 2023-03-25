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
      title: "Casual",
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
    },
    {
      id: 2,
      // title: "Soccer",
      title: "Work",
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
    },
    {
      id: 3,
      // title: "Outdoor",
      title: "Outdoor",
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
    },
    {
      id: 4,
      // title: "Iconic",
      title: "Basketball",
      imageUrl: "https://i.ibb.co/txNp8Gr/shoes.jpg",
    },
    {
      id: 5,
      // title: "Casual",
      title: "Soccer",
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
