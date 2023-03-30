import Navigation from "../navigation/navigation.component";
import Directory from "../../directory/directory.component";
import { Outlet } from "react-router-dom";

// Our homepage displayed at '/'
const Homepage = () => {
  // Holds our directory categories for routes
  const categories = [
    {
      id: 1,
      title: "Basketball",
      imageUrl: "https://i.ibb.co/Gcd43yz/basketball-homepage3.jpg",
    },
    {
      id: 2,
      title: "Soccer",
      imageUrl: "https://i.ibb.co/4F4YMRK/soccer-homepage.jpg",
    },
    {
      id: 3,
      title: "Outdoor",
      imageUrl: "https://i.ibb.co/0CM6hbf/hiking-homepage.jpg",
    },
    {
      id: 4,
      title: "Work",
      imageUrl: "https://i.ibb.co/mB9FcSj/work-homepage.jpg",
    },
    {
      id: 5,
      title: "Casual",
      imageUrl: "https://i.ibb.co/LtntH6D/colorful-shoe-directory-casual.jpg",
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
