import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

//TODO - Create Interface for the props Directory receives
interface DirectoryProps {
  categories: {
    id: number;
    title: string;
    imageUrl: string;
  }[];
}
// Option #2 but less info on hover
// interface DirectoryProps {
//   categories: categoryOptions[];
// }

// interface categoryOptions {
//   id: number;
//   title: string;
//   imageUrl: string;
// }

//HOMEPAGE RENDERS 5 SHOE TYPES(BASKETBALL, SOCCER, OUTDOOR, WORK, CASUAL)
// const Directory = ({ categories }) => {
// Receives the object array
const Directory: React.FC<DirectoryProps> = ({ categories }: DirectoryProps) => {
  return (
    <div className="directory-container">
      {/* Passing in individual objects to categoryItem */}
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
