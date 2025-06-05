import { Badge } from "@mui/material";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart } from "./UseCart";

const CartIcon = () => {
  const { state } = useCart();

  const cartItemsCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link to="/cart">
      <Badge
        badgeContent={cartItemsCount || 0}
        color="primary"
        overlap="circular"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <IoCartOutline className="text-white text-2xl hover:text-gray-400" />
      </Badge>
    </Link>
  );
};

export default CartIcon;
