import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// interface stateListProps {
//   value: string;
//   state: string;
// }
// interface stateListProps {
//   state: string[];
// }

// const stateList: { value: string; state: string }[] = [
const stateList: string[] = [
  "",
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District Of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

interface SelectStateProps {
  stateCallback: (state: string) => void;
}
const SelectState: React.FC<SelectStateProps> = ({ stateCallback }: SelectStateProps) => {
  const [state, setState] = React.useState("");

  const handleChange = (event: SelectChangeEvent): void => {
    // console.log("Select State - handleChange: ", event);
    // Sets State Display
    setState(event.target.value);

    // Callback to pass state to shipping-form
    stateCallback(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150, margin: 0 }} size="small">
      <InputLabel id="demo-simple-select-autowidth-label" sx={{ fontSize: "16px" }}>
        state
      </InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={state}
        onChange={handleChange}
        autoWidth
        label="state"
        MenuProps={{ PaperProps: { style: { maxHeight: 200, width: 150, left: 240 } } }}
        sx={{
          "& input:focus": {
            backgroundColor: "#13737d", // set the desired background color when focused
          },
          fontSize: "12px",
        }}
      >
        {stateList.map((state) => (
          <MenuItem value={state} sx={{ fontSize: "12px" }} key={state}>
            {state}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectState;
{
  /* <MenuItem value="">
          <em></em>
        </MenuItem> */
}
{
  /* <MenuItem value="AL" sx={{ fontSize: "12px" }}>
          Alabama
        </MenuItem>
        <MenuItem value="AK">Alaska</MenuItem>
        <MenuItem value="AZ">Arizona</MenuItem>
        <MenuItem value="AR">Arkansas</MenuItem>
        <MenuItem value="CA">California</MenuItem>
        <MenuItem value="CO">Colorado</MenuItem>
        <MenuItem value="CT">Connecticut</MenuItem>
        <MenuItem value="DE">Delaware</MenuItem>
        <MenuItem value="DC">District Of Columbia</MenuItem>
        <MenuItem value="FL">Florida</MenuItem>
        <MenuItem value="GA">Georgia</MenuItem>
        <MenuItem value="HI">Hawaii</MenuItem>
        <MenuItem value="ID">Idaho</MenuItem>
        <MenuItem value="IL">Illinois</MenuItem>
        <MenuItem value="IN">Indiana</MenuItem>
        <MenuItem value="IA">Iowa</MenuItem>
        <MenuItem value="KS">Kansas</MenuItem>
        <MenuItem value="KY">Kentucky</MenuItem>
        <MenuItem value="LA">Louisiana</MenuItem>
        <MenuItem value="ME">Maine</MenuItem>
        <MenuItem value="MD">Maryland</MenuItem>
        <MenuItem value="MA">Massachusetts</MenuItem>
        <MenuItem value="MI">Michigan</MenuItem>
        <MenuItem value="MN">Minnesota</MenuItem>
        <MenuItem value="MS">Mississippi</MenuItem>
        <MenuItem value="MO">Missouri</MenuItem>
        <MenuItem value="MT">Montana</MenuItem>
        <MenuItem value="NE">Nebraska</MenuItem>
        <MenuItem value="NV">Nevada</MenuItem>
        <MenuItem value="NH">New Hampshire</MenuItem>
        <MenuItem value="NJ">New Jersey</MenuItem>
        <MenuItem value="NM">New Mexico</MenuItem>
        <MenuItem value="NY">New York</MenuItem>
        <MenuItem value="NC">North Carolina</MenuItem>
        <MenuItem value="ND">North Dakota</MenuItem>
        <MenuItem value="OH">Ohio</MenuItem>
        <MenuItem value="OK">Oklahoma</MenuItem>
        <MenuItem value="OR">Oregon</MenuItem>
        <MenuItem value="PA">Pennsylvania</MenuItem>
        <MenuItem value="RI">Rhode Island</MenuItem>
        <MenuItem value="SC">South Carolina</MenuItem>
        <MenuItem value="SD">South Dakota</MenuItem>
        <MenuItem value="TN">Tennessee</MenuItem>
        <MenuItem value="TX">Texas</MenuItem>
        <MenuItem value="UT">Utah</MenuItem>
        <MenuItem value="VT">Vermont</MenuItem>
        <MenuItem value="VA">Virginia</MenuItem>
        <MenuItem value="WA">Washington</MenuItem>
        <MenuItem value="WV">West Virginia</MenuItem>
        <MenuItem value="WI">Wisconsin</MenuItem>
        <MenuItem value="WY">Wyoming</MenuItem> */
}
