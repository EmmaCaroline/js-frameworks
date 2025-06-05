import { Badge } from "@mui/material";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart } from "./useCart";

/**
 * Displays a shopping cart icon with a badge showing the total number of items in the cart.
 *
 * The badge updates dynamically based on the quantity of items in the cart state.
 *
 * @component
 * @returns {JSX.Element} A link wrapping the cart icon with an item count badge.
 *
 * @example
 * ```jsx
 * <CartIcon />
 * ```
 */
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
