import "./select.styles.scss";

const Select = ({ productType }) => {
  // Product Type = shirt, pants, jacket, shoes, hats / Passed in from product-card
  console.log("productType = ", productType);

  // Color options
  const colors = ["Black", "Grey", "White", "Navy", "Red", "Green", "Purple", "Yellow"];

  const pantColors = ["dark wash", "white", "black"];

  return (
    <div>
      {productType == "pants" ? (
        <select className="select-container">
          {pantColors.map((pantColor) => {
            return <option>{pantColor}</option>;
          })}
        </select>
      ) : (
        <select className="select-container">
          {colors.map((color) => {
            return <option>{color}</option>;
          })}
        </select>
      )}
    </div>
  );
};

export default Select;

/*
const Select = () => {

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
*/

/*
return (
    <div>
      {productType == "pants" ? (
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
      ) : (
        "wrongInput"
      )}
    </div>
  );
*/
