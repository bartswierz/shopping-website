import "./select-color.styles.scss";

const SelectColor = () => {
  return (
    <select className="select-container">
      <option value="Black">Black</option>
      <option value="Grey">Grey</option>
      <option value="White">White</option>
      <option value="Navy">Navy</option>
      <option value="Red">Red</option>
      <option value="Green">Green</option>
      <option value="Purple">Purple</option>
      <option value="Yellow">Yellow</option>
    </select>
  );
};

export default SelectColor;
