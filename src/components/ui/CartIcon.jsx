import { Badge } from "@mui/material";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartIcon = () => {
  /* Make dynamic later */
  return (
    <Link to="cart">
      <Badge
        badgeContent={1} /* Make dynamic later */
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
