import { ChangeEvent } from "react";

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
  // const [color, setColor] = useState("");

  // Color options
  const colors = ["Color", "Black", "Grey", "White", "Navy", "Red", "Green", "Purple", "Yellow"];

  const colorHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    // console.log("SELECT event: ", event.target.value);
    const color = event.target.value;
    // console.log("Color Picked:", color);

    // Checking if user chose color before updating state of color
    if (color !== "Color" && color !== "") {
      console.log("Color Picked: ", color);
      setColor(color);

      // onChange(event.target.value);
      onChange(color);
    }
  };

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
