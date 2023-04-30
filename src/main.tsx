import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { CartProvider } from "./contexts/cart.context";
// import { CategoriesProvider } from "./contexts/categories.context";
import { UserProvider } from "./contexts/user.context";
import { Provider } from "react-redux";
import { store } from "./store/store";
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <CategoriesProvider> */}
        {/* <CartProvider> */}
        <UserProvider>
          <App />
        </UserProvider>
        {/* </CartProvider> */}
        {/* </CategoriesProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
