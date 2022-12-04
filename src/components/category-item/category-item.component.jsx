import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  // const { id, title, imageUrl } = item;
  const { id, title, imageUrl } = category;

  return (
    <div className="category-item-container" key={id}>
      {/* <img src={imageUrl} alt="dress-shirt" /> */}
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} alt="dress-shirt"></div>
      <div className="category-text-container">
        <div className="category-text">{title}</div>
        <div className="shop-text">Shop Now</div>
      </div>
    </div>
  );
};

export default CategoryItem;
