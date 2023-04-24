import { useState } from "react";
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

export const PaymentForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  // TODO - Check that all 5 Fields were filled !== ""
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // const handleSubmit = async (event) => {

    event.preventDefault();

    console.log("event2: ", event);

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
          >
            {expiryYearOptions.map((option: string) => (
              <MenuItem key={option} value={option} selected={option === expiryYear}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          {/* CVC NUMBER */}
          <TextField id="filled-textarea" label="CVC" placeholder="333" multiline variant="filled" className="billing-flex-item" />
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

// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// import { Button } from "@mui/material";
// import { Form } from "react-router-dom";

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   // Form submission
//   const paymentHandler = async (e) => {
//     e.preventDefault();

//     // GUARD: IF NO stripe instance or NO element instance
//     if (!stripe || !elements) {
//       return;
//     }

//     // Route to app URL
//     const response = await fetch("/.netlify/functions/create-payment-intent", {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ amount: 10000 }),
//     }).then((res) => res.json());

//     console.log(response);
//   };

//   return (
//     <form onSubmit={paymentHandler}>
//       <p>Credit Card Payment: </p>
//       <CardElement />
//       <Button>Confirm Payment</Button>
//     </form>
//   );
// };

// export default PaymentForm;
