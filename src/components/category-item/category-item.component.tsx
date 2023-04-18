import "./category-item.styles.scss";
import { Link } from "react-router-dom";

// TODO - need to TYPE the parameters coming in. What is category prop?
interface CategoryItemProps {
  // category: { id: number; title: string; imageUrl: string };
  category: { id: number; title: string; imageUrl: string };
}
//Builds each of the five directory components (Basketball, Soccer, ...) on the homepage

// const CategoryItem = ({ category }) => {
const CategoryItem: React.FC<CategoryItemProps> = ({ category }: CategoryItemProps) => {
  const { id, title, imageUrl } = category;

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
