import Button from "@mui/material/Button";
import "./cart-button.styles.scss";
import { CartContext } from "../../../contexts/cart.context";
import { useContext } from "react";
import { Product } from "../../product-card-desktop/product-card-desktop.component";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store/store";
import { addItemToCart, updateCartCount } from "../../../store/slices/cartSlice";

// $primaryColor: #1de5fd;
// $hoverColor: #1bd1e5;
// $activeColor: #1ccbde;

interface ItemToAdd {
  id: string;
  quantity: number;
  color: string;
  size: string;
  brandName: string;
  productName: string;
  subheader: string;
  discountPrice: number;
  originalPrice: number;
  imageUrl: string;
  starRating: number;
  totalReviews: number;
}

const buttonSX = {
  backgroundColor: "#1de5fd",
  fontWeight: 900,
  // fontSize: "1.2rem",
  fontSize: "1.6rem",
  fontFamily: "Bebas Neue, sans-serif",
  ":hover": {
    backgroundColor: "#1bd1e5",
  },
  ":active": {
    backgroundColor: "#1ccbde",
    color: "#fff",
  },
  // padding: "12px 24px",
  padding: "10px 20px",
  color: "#444",
};

//Uses product name,
const createUniqueId = (productName: string, color: string, size: string): string => {
  //i.e. "Vans Old Skool ShoesRed10.5"
  const cartIdContent = productName + color + size;

  //STRIPS ALL EMPTY SPACES & PERIODS -> "VansOldSkoolShoesRed105"
  return cartIdContent.replace(/[ .]/g, "");
};

interface CartButtonProps {
  product: Product;
  color: string;
  size: string;
}

const CartButton: React.FC<CartButtonProps> = ({ product, color, size }: CartButtonProps) => {
  /* TODO - replace this with our REDUX cartSlice - COMPLETE
  -to get cartItems, cartCount -> use useSelector to access
  -addItemToCart, updateCartCount -> reducer methods
  */
  // const { addItemToCart, cartItems, cartCount, updateCartCount } = useContext(CartContext);

  const cartCount = useSelector((state: RootState) => state.cart.cartCount);
  console.log("REDUX - cartCount: ", cartCount);

  const dispatch = useDispatch();
  // Adds the item to our CartItems array within our Cart Context
  // const handleClick = (product, quantity = 1, color, size, resetOptionsHandler) => {
  //resetOptionsHandler will change color/size back to default
  // const handleClick = (product, color, size, resetOptionsHandler) => {
  const handleClick = (product: Product, color: string, size: string): void => {
    // console.log("cart btn - inside handleClick - resetOptions: ", resetOptionsHandler);
    console.log("in handleClick, color: ", color, "& size: ", size);
    if (color !== "" && color !== "Color" && size !== "" && size !== "Size") {
      const cartItemId = createUniqueId(product.productName, color, size);

      /*Passing custom id to prevent incorrect behavior with add/remove buttons within cart
       */
      const itemToAdd: ItemToAdd = { ...product, id: cartItemId, quantity: 1, color, size };
      // TODO - previous send to context
      // addItemToCart(itemToAdd);
      dispatch(addItemToCart(itemToAdd));

      //TODO - previous - modify this to dispatch to redux
      //Passing the quantity value of our item to update our current cart count inside cart context using a reducer
      // updateCartCount(1);

      dispatch(updateCartCount(1));
    } else {
      alert("Please select a size and color.");
    }
  };

  return (
    <div className="cart-button-container">
      <Button
        variant="contained"
        sx={buttonSX}
        className="cart-button"
        onClick={() => {
          handleClick(product, color, size);
        }}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default CartButton;
