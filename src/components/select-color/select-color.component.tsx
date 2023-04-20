import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ChangeEvent, useState } from "react";

//Passing this into our select option
const selectSX = {
  // border: "1px solid #7c00f9",
  color: "#FFF",
  // backgroundColor: "#333",
  ":active": {
    // border: "2px solid #7c00f9",
  },
  ":hover": {
    // border: "1px solid red",
    // color: "orange",
  },
};

interface SelectColorProps {
  // onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChange: (event: string) => void;
  setColor: (color: string) => void;
}

// const SelectColor = ({ productType, onChange, setColor }) => {
const SelectColor: React.FC<SelectColorProps> = ({ onChange, setColor }: SelectColorProps) => {
  // Product Type = shirt, pants, jacket, shoes, hats / Passed in from product-card
  // console.log("productType = ", productType);
  const [selectValue, setSelectValue] = useState<string>("Black");
  // const [color, setColor] = useState("");

  // Color options
  const colors = ["Color", "Black", "Grey", "White", "Navy", "Red", "Green", "Purple", "Yellow"];

  const colorHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    // console.log("SELECT event: ", event.target.value);
    const color = event.target.value;
    setSelectValue(color);
    // console.log("Color Picked:", color);

    // Checking if user chose color before updating state of color
    if (color !== "Color" && color !== "") {
      // console.log("Color set, color: ", color);
      setColor(color);
      console.log("event.target.value: ", event.target.value);

      // onChange(event.target.value);
      onChange(color);
    }
  };

  // if (productType === "pants") console.log("pants");
  // else console.log("not pants, productType: ", productType);

  // return (
  //   <Box sx={{ minWidth: 75 }}>
  //     <FormControl fullWidth size="large" sx={{ border: "2px" }}>
  //       {/* <InputLabel id="demo-simple-select-label" sx={{ color: "#7c00f9" }}> */}
  //       <InputLabel id="demo-simple-select-label" sx={{ color: "#fff" }}>
  //         Color
  //       </InputLabel>
  //       <Select
  //         value={selectValue}
  //         label="Black"
  //         className="select-color-options"
  //         // onChange={(e) => colorHandler(e)}
  //         onChange={colorHandler}
  //         sx={selectSX}
  //       >
  //         <MenuItem value={"Black"}>Black</MenuItem>
  //         <MenuItem value={"Grey"}>Grey</MenuItem>
  //         <MenuItem value={"White"}>White</MenuItem>
  //         <MenuItem value={"Red"}>Red</MenuItem>
  //         <MenuItem value={"Green"}>Green</MenuItem>
  //         <MenuItem value={"Yellow"}>Yellow</MenuItem>
  //       </Select>
  //     </FormControl>
  //   </Box>
  // );
  return (
    <div>
      {/* // Product is NOT pants, render Colors list */}
      {/* <select onChange={(event) => colorHandler(event)}> */}
      <select onChange={colorHandler}>
        {colors.map((color: string) => {
          return (
            <option key={color} className="option">
              {color}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectColor;
