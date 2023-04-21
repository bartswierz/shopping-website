import { ChangeEvent } from "react";

interface SelectSizeProps {
  onChange: (event: string) => void;
  setSize: (size: string) => void;
}
// const SelectSize = ({ productType, onChange, setSize }) => {
const SelectSize: React.FC<SelectSizeProps> = ({ onChange, setSize }: SelectSizeProps) => {
  // Product Type = shirt, pants, jacket, shoes, hats / Passed in from product-card
  // console.log("productType = ", productType);

  // Color options
  // const sizes = ["Size", "S", "M", "L", "XL", "XXL"];

  const shoeSizes = ["Size", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13"];

  const sizeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    // console.log("SELECT event: ", event);
    const size = event.target.value;
    // console.log("Color Changed! Event:", event);
    console.log("Size Picked:", size);
    if (size !== "Size" && size !== "") {
      setSize(size);
      // onChange Callback
      onChange(size);
    }
  };

  // if (productType === "pants") console.log("pants");
  // else console.log("not pants, productType: ", productType);

  return (
    <div>
      {/* //Product is Shoes, display Shoes selection options */}
      {/* <select className="select-container" onChange={(event) => sizeHandler(event)}> */}
      <select className="select-container" onChange={sizeHandler}>
        {shoeSizes.map((shoeSize: string) => {
          return <option key={shoeSize}>{shoeSize}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectSize;
