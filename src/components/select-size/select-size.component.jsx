import "./select-size.styles.scss";

const SelectSize = ({ productType, onChange, setSize }) => {
  // Product Type = shirt, pants, jacket, shoes, hats / Passed in from product-card
  // console.log("productType = ", productType);

  // Color options
  const sizes = ["Size", "S", "M", "L", "XL", "XXL"];

  const pantSizes = [
    "26 X 28",
    "26 X 30",
    "28 X 28",
    "28 X 30",
    "28 X 32",
    "28 X 34",
    "29 X 30",
    "29 X 32",
    "29 X 34",
    "30 X 30",
    "30 X 32",
    "30 X 34",
    "30 X 36",
    "31 X 34",
    "32 X 30",
    "32 X 32",
    "32 X 34",
    "32 X 36",
    "33 X 30",
    "33 X 32",
    "33 X 34",
    "34 X 30",
    "34 X 32",
    "34 X 34",
    "34 X 36",
    "36 X 30",
    "36 X 32",
    "36 X 34",
    "36 X 36",
    "38 X 30",
    "38 X 32",
    "38 X 34",
    "38 X 36",
    "40 X 30",
    "40 X 32",
    "40 X 34",
    "42 X 32",
    "42 X 34",
    "44 X 32",
  ];

  const sizeHandler = (event) => {
    console.log("SELECT event: ", event);
    const size = event.target.value;
    // console.log("Color Changed! Event:", event);
    console.log("Size Changed! size:", size);
    setSize(size);
  };

  if (productType === "pants") console.log("pants");
  else console.log("not pants, productType: ", productType);

  return (
    <div>
      {productType == "pants" ? (
        <select className="select-container" onChange={(event) => sizeHandler(event)}>
          {pantSizes.map((pantSize) => {
            return <option key={pantSize}>{pantSize}</option>;
          })}
        </select>
      ) : (
        // Product is NOT pants, render Colors list
        <select className="select-container" onChange={(event) => sizeHandler(event)}>
          {sizes.map((size) => {
            return <option key={size}>{size}</option>;
          })}
        </select>
      )}
    </div>
  );
};

export default SelectSize;

// import "./select.styles.scss";

// const Select = ({ productType, onChange, setColor }) => {
//   // Product Type = shirt, pants, jacket, shoes, hats / Passed in from product-card
//   // console.log("productType = ", productType);

//   // Color options
//   const colors = ["Choose Color", "Black", "Grey", "White", "Navy", "Red", "Green", "Purple", "Yellow"];

//   const pantColors = ["Choose Color", "Dark Wash", "White", "Black", "Grey"];

//   const colorHandler = (event) => {
//     console.log("SELECT event: ", event);
//     const color = event.target.value;
//     // console.log("Color Changed! Event:", event);
//     console.log("Color Changed! color:", color);
//     setColor(color);
//   };

//   return (
//     <div>
//       {productType == "pants" ? (
//         <select className="select-container" onChange={(event) => colorHandler(event)}>
//           {pantColors.map((pantColor) => {
//             return <option key={pantColor}>{pantColor}</option>;
//           })}
//         </select>
//       ) : (
//         // Product is NOT pants, render Colors list
//         <select className="select-container" onChange={(event) => colorHandler(event)}>
//           {colors.map((color) => {
//             return <option>{color}</option>;
//           })}
//         </select>
//       )}
//     </div>
//   );
// };

// export default Select;
