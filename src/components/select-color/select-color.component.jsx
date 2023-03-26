import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//Passing this into our select option
const selectSX = {
  // border: "1px solid red",
};

const SelectColor = ({ productType, onChange, setColor }) => {
  // Product Type = shirt, pants, jacket, shoes, hats / Passed in from product-card
  // console.log("productType = ", productType);

  // Color options
  const colors = ["Color", "Black", "Grey", "White", "Navy", "Red", "Green", "Purple", "Yellow"];

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
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Color</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={""}
        label="Color"
        className="select-color-options"
        onChange={(e) => colorHandler()}
        sx={selectSX}
      >
        <MenuItem value={"Black"}>Black</MenuItem>
        <MenuItem value={"Grey"}>Grey</MenuItem>
        <MenuItem value={"White"}>White</MenuItem>
        <MenuItem value={"Red"}>Red</MenuItem>
        <MenuItem value={"Green"}>Green</MenuItem>
        <MenuItem value={"Yellow"}>Yellow</MenuItem>
      </Select>
    </FormControl>

    // <div>
    //   {/* // Product is NOT pants, render Colors list */}
    //   <select onChange={(event) => colorHandler(event)}>
    //     {colors.map((color) => {
    //       return (
    //         <option key={color} className="option">
    //           {color}
    //         </option>
    //       );
    //     })}
    //   </select>
    // </div>
  );
};

export default SelectColor;

// return (
//   <div>
//     {/* // Product is NOT pants, render Colors list */}
//     <select onChange={(event) => colorHandler(event)}>
//       {colors.map((color) => {
//         return (
//           <option key={color} className="option">
//             {color}
//           </option>
//         );
//       })}
//     </select>
//   </div>
// );

// return (
//   <div>
//     {productType === "pants" ? (
//       <div>
//         <select onChange={(event) => colorHandler(event)}>
//           {pantColors.map((pantColor) => {
//             return <option key={pantColor}>{pantColor}</option>;
//           })}
//         </select>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           class="w-6 h-6"
//         >
//           <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//         </svg>
//       </div>
//     ) : (
//       // Product is NOT pants, render Colors list
//       <select onChange={(event) => colorHandler(event)}>
//         {colors.map((color) => {
//           return (
//             <option key={color} className="option">
//               {color}
//             </option>
//           );
//         })}
//       </select>
//     )}
//   </div>
// );
