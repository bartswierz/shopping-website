import "./category-item.styles.scss";
import { Link } from "react-router-dom";
const CategoryItem = ({ category }) => {
  // const { id, title, imageUrl } = item;
  const { id, title, imageUrl } = category;

  return (
    // to={`${title}`} takes us to specific route depending on category title(i.e. "/shirts")
    <Link to={`${title}`} className="category-item-container" key={id}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} alt="dress-shirt"></div>
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
