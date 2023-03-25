import "./select.styles.scss";

const Select = ({ productType, onChange, setColor }) => {
  // Product Type = shirt, pants, jacket, shoes, hats / Passed in from product-card
  // console.log("productType = ", productType);

  // Color options
  const colors = ["Color", "Black", "Grey", "White", "Navy", "Red", "Green", "Purple", "Yellow"];

  const pantColors = ["Color", "Dark Wash", "White", "Black", "Grey"];

  const colorHandler = (event) => {
    console.log("SELECT event: ", event);
    const color = event.target.value;
    // console.log("Color Picked:", color);

    // Checking if user chose color before updating state of color
    if (color !== "Color" && color !== "") {
      console.log("Color set, color: ", color);
      setColor(color);
    }
  };

  // if (productType === "pants") console.log("pants");
  // else console.log("not pants, productType: ", productType);

  return (
    <div>
      {productType === "pants" ? (
        <div>
          <select onChange={(event) => colorHandler(event)}>
            {pantColors.map((pantColor) => {
              return <option key={pantColor}>{pantColor}</option>;
            })}
          </select>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg> */}
        </div>
      ) : (
        // Product is NOT pants, render Colors list
        <select onChange={(event) => colorHandler(event)}>
          {colors.map((color) => {
            return (
              <option key={color} className="option">
                {color}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default Select;
