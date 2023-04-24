import React, { ChangeEvent, useState, useEffect } from "react";
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
  const [cardHolderName, setCardHolderName] = useState<string>("");

  // Will use these with Material UI to display error textfield if any of these fail validation check
  const [isCardNumberInvalid, setIsCardNumberInvalid] = useState<boolean>(true);
  const [isCvcNumberInvalid, setIsCvcNumberInvalid] = useState<boolean>(true);
  const [isCardHolderNameInvalid, setIsCardHolderNameInvalid] = useState<boolean>(true);
  const [isExpiryMonthInvalid, setIsExpiryMonthInvalid] = useState<boolean>(true);
  const [isExpiryYearInvalid, setIsExpiryYearInvalid] = useState<boolean>(true);

  // CARDHOLDER NAME: REMOVE ERROR COLOR FROM TEXTFIELD IF INPUT IS CORRECT
  useEffect(() => {
    console.log("Validating Cardholder Name...");
    validateInputFields(cardHolderName);
  }, [cardHolderName]);

  // CVC NUMBER: REMOVE ERROR COLOR FROM TEXTFIELD IF INPUT IS CORRECT
  useEffect(() => {
    console.log("Validating CVC Number...");
    validateInputFields(cvcNumber);
  }, [cvcNumber]);

  // CARD NUMBER: REMOVE ERROR COLOR FROM TEXTFIELD IF INPUT IS CORRECT
  useEffect(() => {
    console.log("Validating Card Number...");
    validateInputFields(cardNumber);
  }, [cardNumber]);

  // EXPIRY MONTH: REMOVE ERROR COLOR FROM TEXTFIELD IF INPUT IS CORRECT
  useEffect(() => {
    console.log("Validating Expiry Month...");
    validateInputFields(expiryMonth);
  }, [expiryMonth]);

  // EXPIRY YEAR: REMOVE ERROR COLOR FROM TEXTFIELD IF INPUT IS CORRECT
  useEffect(() => {
    console.log("Validating Expiry Year...");
    validateInputFields(expiryYear);
  }, [expiryYear]);

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

  // TODO - check to make sure user only inputs integers
  const cvcNumberHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log("cvc number: ", event.target.value);

    const inputCvcNumber = event.target.value;

    // LIMIT CVC NUMBER TO 3-DIGITS
    if (inputCvcNumber.length <= 3) setCvcNumber(event.target.value);

    // validateInputFields(cvcNumber);
  };

  // TODO - check to ensure user only inputs strings
  const cardHolderNameHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    // console.log("cardholdername: ", event.target.value);
    const inputName: string = event.target.value;

    // REMOVE ALL INPUTS THAT ARE NOT CHARACTERS(NO #'S, !, /, *, ...)
    const inputNameOnlyLetters: string = inputName.replace(/[^a-zA-Z ]/g, "");

    // Split on the spaces in string, split() turns string into a string array
    const inputNameSplit: string[] = inputNameOnlyLetters.split(" ");
    console.log("inputNameSplit: ", inputNameSplit);

    const formattedName: string = inputNameSplit.join(" ");
    console.log("formattedName: ", formattedName);
    setCardHolderName(formattedName);
  };

  // PASS IN STRING WHEN ONE OF THE FIVE INPUT FIELDS CHANGES, useEffect will invoke this function to check if input is valid, if it is, then we remove the error from the text field
  const validateInputFields = (inputValue: string): void => {
    switch (inputValue) {
      case cardHolderName: {
        // Split to check if user gave at least 2 names
        const inputNameSplit: string[] = inputValue.split(" ");
        // DID USER GIVE AT LEAST TWO STRINGS AND IS THE SECOND INDEX NOT ''? (PREVENTS 'John ' from passing) i.e. "John Doe ==== TRUE, John === false"
        inputNameSplit.length >= 2 && inputNameSplit[1] !== "" ? setIsCardHolderNameInvalid(false) : setIsCardHolderNameInvalid(true);
        break;
      }
      case cvcNumber: {
        cvcNumber.length === 3 ? setIsCvcNumberInvalid(false) : setIsCvcNumberInvalid(true);
        break;
      }
      case cardNumber: {
        // 19 Because we are counting the three spaces between the 4 digits. i.e. '4444 4444 4444 4444'
        cardNumber.length === 19 ? setIsCardNumberInvalid(false) : setIsCardNumberInvalid(true);
        break;
      }
      case expiryMonth: {
        expiryMonth !== "" ? setIsExpiryMonthInvalid(false) : setIsExpiryMonthInvalid(true);
        break;
      }
      case expiryYear: {
        expiryYear !== "" ? setIsExpiryYearInvalid(false) : setIsExpiryYearInvalid(true);
        break;
      }
    }

    // const inputNameSplit: string[] = inputValue.split(" ");
    // if (inputNameSplit.length >= 2) return setIsCardHolderNameInvalid(false);
    // return setIsCardHolderNameInvalid(true);
  };

  // TODO - Check that all 5 Fields were filled !== ""
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // const handleSubmit = async (event) => {

    event.preventDefault();

    // TODO - add a check to see if all is___Invalid ALL FALSE? if they are all false then we know all text fields are correct
    // validateCardHolderName();
    console.log("event: ", event);

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
          error={isCardNumberInvalid}
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
            error={isExpiryMonthInvalid}
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
            error={isExpiryYearInvalid}
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
            error={isCvcNumberInvalid}
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
          onChange={cardHolderNameHandler}
          value={cardHolderName}
          error={isCardHolderNameInvalid}
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
