import * as React from "react";
import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import "./radio-buttons.styles.scss";
// $primaryColor: #1de5fd;
// $primaryColor: #13737d;

//Passing this into our select option
const radioSX = {
  color: "#13737d",
  // color: pink[800],
  "&.Mui-checked": {
    color: "#13737d",
  },
  "& .MuiSvgIcon-root": {
    fontSize: 16,
  },
};

// Passing callback prop, value will be sent to "Checkout"
interface RadioButtonsProps {
  shippingChoiceCallback: (shippingChoice: string) => void;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ shippingChoiceCallback }: RadioButtonsProps) => {
  const [selectedValue, setSelectedValue] = React.useState("standard");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);

    // CALLBACK - SENDING VALUE BACK TO "CHECKOUT" COMPONENT
    shippingChoiceCallback(event.target.value);
  };

  // const controlProps = (item: string) => ({
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="radio-button-container">
      <span className="form-radio-header">Select Delivery Method</span>
      <div>
        <Radio {...controlProps("standard")} sx={radioSX} />
        <span className="radio-text">
          Standard <span className="radio-text-highlight">FREE</span>
        </span>
      </div>
      <div>
        <Radio {...controlProps("twoday")} sx={radioSX} />
        <span className="radio-text">
          2-Day <span className="radio-text-highlight">$14</span>
        </span>
      </div>
      <div>
        <Radio {...controlProps("overnight")} sx={radioSX} />
        <span className="radio-text">
          Overnight <span className="radio-text-highlight">$23</span>
        </span>
      </div>
    </div>
  );
};

export default RadioButtons;
