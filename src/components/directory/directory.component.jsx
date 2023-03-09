import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container ">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;

// return (
//   <div className="directory-container">
//     {categories.map((categoryItem) => (
//       <div className="category-item" key={categoryItem.id}>
//         <div>{categoryItem.title}</div>
//         <div>Shop Now</div>
//       </div>
//     ))}
//   </div>
// );
