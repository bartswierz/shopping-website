import Navigation from "../../navigation/navigation.component";
import Directory from "../../directory/directory.component";

// Our homepage displayed at '/'
const Homepage = () => {
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
    <>
      <Navigation />
      <Directory categories={categories} />
    </>
  );
};

export default Homepage;
