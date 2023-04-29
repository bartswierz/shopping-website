import Button from "@mui/material/Button";
import "./cart-button.styles.scss";
import { Product } from "../../product-card-desktop/product-card-desktop.component";
import { useDispatch } from "react-redux";
import { addItemToCart, updateCartCount, updateTotal } from "../../../store/slices/cartSlice";

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

//CREATES UNIQUE ID BY COMBINING "PRODUCT NAME, COLOR & SIZE"
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
  const dispatch = useDispatch();

  const handleClick = (product: Product, color: string, size: string): void => {
    if (color !== "" && color !== "Color" && size !== "" && size !== "Size") {
      const cartItemId = createUniqueId(product.productName, color, size);

      //USING NEW UNIQUE ID TO ENSURE PRODUCTS RENDER CORRECTLY
      const itemToAdd: ItemToAdd = { ...product, id: cartItemId, quantity: 1, color, size };

      // ADD ITEM TO CARTITEMS[] AND UPDATING CART COUNT
      dispatch(addItemToCart(itemToAdd));

      //UPDATING CART COUNT BY 1
      dispatch(updateCartCount(1));

      // UPDATING TOTAL COST & TAX
      dispatch(updateTotal());
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
