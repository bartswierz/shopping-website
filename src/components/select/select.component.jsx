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
    // console.log("Color Changed! Event:", event);
    console.log("Color Changed! color:", color);
    setColor(color);
  };

  if (productType === "pants") console.log("pants");
  else console.log("not pants, productType: ", productType);

  return (
    <div>
      {productType == "pants" ? (
        <select className="select-container" onChange={(event) => colorHandler(event)}>
          {pantColors.map((pantColor) => {
            return <option key={pantColor}>{pantColor}</option>;
          })}
        </select>
      ) : (
        // Product is NOT pants, render Colors list
        <select className="select-container" onChange={(event) => colorHandler(event)}>
          {colors.map((color) => {
            return <option key={color}>{color}</option>;
          })}
        </select>
      )}
    </div>
  );
};

export default Select;

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
