import "./category-item.styles.scss";
import { Link } from "react-router-dom";

// TODO - need to TYPE the parameters coming in. What is category prop?
interface ICategoryItemProps {
  // category: { id: number; title: string; imageUrl: string };
  category: { id: number; title: string; imageUrl: string };
}
//Builds each of the five directory components (Basketball, Soccer, ...) on the homepage

// const CategoryItem = ({ category }) => {
// const CategoryItem: React.FC<ICategoryItemProps> = (props) => {
// const CategoryItem = ({category}) => {
const CategoryItem = ({ category }: ICategoryItemProps) => {
  // const { id, title, imageUrl } = item;
  const { id, title, imageUrl } = category;
  // const lowercaseTitle = title.toLowercase();
  // console.log("lowercaseTitle: ", lowercaseTitle);

  console.log("id: ", typeof id);
  console.log("title: ", typeof title);
  console.log("imageUrl: ", typeof imageUrl);

  const idVal = (id: number) => {
    console.log("id is: ", id);
  };

  idVal(id);

  return (
    // to={`${title}`} takes us to specific route depending on category title(i.e. "/Shirts")
    <Link to={`${title}`} className="category-item-container" key={id}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="category-text-container">
        <div className="category-text">{title}</div>
        <div className="shop-text">SHOP NOW</div>
      </div>
    </Link>
  );
};

export default CategoryItem;

/*
return (
    <div className="category-item-container" key={id}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} alt="dress-shirt"></div>
      <div className="category-text-container">
        <div className="category-text">{title}</div>
        <div className="shop-text">SHOP NOW</div>
      </div>
    </div>
  );
*/
