import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectAutoWidth() {
  const [state, setState] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  return (
    // <div>
    <FormControl sx={{ m: 1, minWidth: 150, margin: 0 }} size="small">
      <InputLabel id="demo-simple-select-autowidth-label">state</InputLabel>
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
            // backgroundColor: "red", // set the desired background color when focused
          },
        }}
      >
        <MenuItem value="">
          <em></em>
        </MenuItem>
        {/* <MenuItem value="SelectState">Select State</MenuItem> */}
        <MenuItem value="AL">Alabama</MenuItem>
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
        <MenuItem value="WY">Wyoming</MenuItem>
      </Select>
    </FormControl>
    // </div>
  );
}

// const SelectState: React.FC = () => {
//   return (
//     <select className="select-box">
//       <option value="SelectState">Select State</option>
//       <option value="AL">Alabama</option>
//       <option value="AK">Alaska</option>
//       <option value="AZ">Arizona</option>
//       <option value="AR">Arkansas</option>
//       <option value="CA">California</option>
//       <option value="CO">Colorado</option>
//       <option value="CT">Connecticut</option>
//       <option value="DE">Delaware</option>
//       <option value="DC">District Of Columbia</option>
//       <option value="FL">Florida</option>
//       <option value="GA">Georgia</option>
//       <option value="HI">Hawaii</option>
//       <option value="ID">Idaho</option>
//       <option value="IL">Illinois</option>
//       <option value="IN">Indiana</option>
//       <option value="IA">Iowa</option>
//       <option value="KS">Kansas</option>
//       <option value="KY">Kentucky</option>
//       <option value="LA">Louisiana</option>
//       <option value="ME">Maine</option>
//       <option value="MD">Maryland</option>
//       <option value="MA">Massachusetts</option>
//       <option value="MI">Michigan</option>
//       <option value="MN">Minnesota</option>
//       <option value="MS">Mississippi</option>
//       <option value="MO">Missouri</option>
//       <option value="MT">Montana</option>
//       <option value="NE">Nebraska</option>
//       <option value="NV">Nevada</option>
//       <option value="NH">New Hampshire</option>
//       <option value="NJ">New Jersey</option>
//       <option value="NM">New Mexico</option>
//       <option value="NY">New York</option>
//       <option value="NC">North Carolina</option>
//       <option value="ND">North Dakota</option>
//       <option value="OH">Ohio</option>
//       <option value="OK">Oklahoma</option>
//       <option value="OR">Oregon</option>
//       <option value="PA">Pennsylvania</option>
//       <option value="RI">Rhode Island</option>
//       <option value="SC">South Carolina</option>
//       <option value="SD">South Dakota</option>
//       <option value="TN">Tennessee</option>
//       <option value="TX">Texas</option>
//       <option value="UT">Utah</option>
//       <option value="VT">Vermont</option>
//       <option value="VA">Virginia</option>
//       <option value="WA">Washington</option>
//       <option value="WV">West Virginia</option>
//       <option value="WI">Wisconsin</option>
//       <option value="WY">Wyoming</option>
//     </select>
//   );
// };

// export default SelectState;
