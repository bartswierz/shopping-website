import { ChangeEvent } from "react";

interface SelectSizeProps {
  onChange: (event: string) => void;
  setSize: (size: string) => void;
}
// const SelectSize = ({ productType, onChange, setSize }) => {
const SelectSize: React.FC<SelectSizeProps> = ({ onChange, setSize }: SelectSizeProps) => {
  const shoeSizes = ["Size", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13"];

  const sizeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    const size = event.target.value;
    // console.log("Size Picked:", size);
    if (size !== "Size" && size !== "") {
      setSize(size);
      // onChange Callback
      onChange(size);
    }
  };

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
