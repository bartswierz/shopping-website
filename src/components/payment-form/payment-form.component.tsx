import React, { ChangeEvent, useState } from "react";
import { Button, Menu } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./payment-form.styles.scss";

const expiryMonthOptions = ["", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

const expiryYearOptions = [
  "",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031",
  "2032",
  "2033",
  "2034",
  "2035",
  "2036",
  "2037",
  "2038",
  "2039",
  "2040",
];

// TODO - Add buttonSX for payment button
const buttonSX = {
  backgroundColor: "#1de5fd",
  fontWeight: 900,
  fontSize: "1.2rem",
  fontFamily: "Bebas Neue, sans-serif",
  margin: "20px auto 5px auto",
  width: "280px",

  ":hover": {
    backgroundColor: "#1bd1e5",
    color: "#fff",
  },
  ":active": {
    backgroundColor: "#1ccbde",
    color: "#fff",
  },
  padding: "6px 12px",
  color: "#444",
};

const PaymentForm: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryMonth, setExpiryMonth] = useState<string>("");
  const [expiryYear, setExpiryYear] = useState<string>("");
  const [cvcNumber, setCvcNumber] = useState<string>("");

  // HANDLE CARD NUMBER INPUT
  const cardNumberHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputCardNumber = event.target.value;
    console.log(inputCardNumber);
    // Remove any non-digit characters from the input
    const formattedCardNumber = inputCardNumber.replace(/\D/g, "");

    // Check if the input has a length of 16 or less
    if (formattedCardNumber.length <= 16) {
      //ADDS A SPACE EVERY 4 DIGITS - "4444 4444 4444 4444"
      const formattedWithSpaces = formattedCardNumber.replace(/(\d{1,4})/g, "$1 ").trim();

      setCardNumber(formattedWithSpaces);
    }
  };

  const expiryMonthHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log("expiry month: ", event.target.value);
    setExpiryMonth(event.target.value);
  };

  const expiryYearHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log("expiry year: ", event.target.value);
    setExpiryYear(event.target.value);
  };

  const cvcNumberHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log("cvc number: ", event.target.value);

    const inputCvcNumber = event.target.value;

    // LIMIT CVC NUMBER TO 3-DIGITS
    if (inputCvcNumber.length <= 3) setCvcNumber(event.target.value);
  };

  // TODO - Check that all 5 Fields were filled !== ""
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // const handleSubmit = async (event) => {

    event.preventDefault();

    console.log("event2: ", event);

    //TODO - check if Card Number is 16 digits, CVC number is 3 digits, user chose expiry month AND year, user input cardholder name
    // if (result.error) {
    //   setErrorMessage(result.error.message);
    // } else {
    //   setSuccessMessage("Payment succeeded!");
    // }
  };

  return (
    <div className="stripe-payment-container">
      <h1 className="stripe-header">2. Billing</h1>
      {/* <form onSubmit={handleSubmit} className="stripe-payment-form-container"> */}

      <Box
        component="form"
        sx={{
          // "& .MuiTextField-root": { m: 1, width: "30ch" },
          "& .MuiTextField-root": { m: 1, maxWidth: "97%" },
          border: "10px solid #e1e1e1",
          padding: "10px",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {/* CARD NUMBER */}
        <TextField
          id="filled-textarea"
          label="CARD NUMBER"
          placeholder="4242 4242 4242 4242"
          multiline
          variant="filled"
          sx={{ width: "100%" }}
          onChange={cardNumberHandler}
          value={cardNumber}
          inputProps={{ maxLength: 20 }}
        />

        <div className="billing-textfields">
          {/* EXPIRATION MONTH */}
          <TextField
            id="filled-textarea"
            label="EXP. MONTH"
            select
            multiline
            variant="filled"
            className="billing-flex-item"
            value={expiryMonth}
            onChange={expiryMonthHandler}
          >
            {expiryMonthOptions.map((option: string) => (
              <MenuItem key={option} value={option} selected={option === expiryYear}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          {/* EXPIRATION YEAR */}
          <TextField
            id="filled-textarea"
            label="EXP. YEAR"
            select
            multiline
            variant="filled"
            className="billing-flex-item"
            value={expiryYear}
            onChange={expiryYearHandler}
          >
            {expiryYearOptions.map((option: string) => (
              <MenuItem key={option} value={option} selected={option === expiryYear}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          {/* CVC NUMBER */}
          <TextField
            id="filled-textarea"
            label="CVC"
            placeholder="333"
            multiline
            variant="filled"
            className="billing-flex-item"
            onChange={cvcNumberHandler}
            value={cvcNumber}
          />
        </div>

        {/* CARDHOLDER NAME */}
        <TextField
          id="filled-textarea"
          label="CARDHOLDER NAME"
          placeholder="JOHN DOE"
          multiline
          variant="filled"
          sx={{ width: "100%" }}
        />

        <div className="strip-button-container">
          <Button type="submit" variant="contained" sx={buttonSX}>
            Confirm Payment
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default PaymentForm;
