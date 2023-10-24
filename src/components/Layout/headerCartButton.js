import React from "react";
import { useContext } from "react";
import CartIcon from "../../plugs/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCarItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onPress}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>cart</span>
      <span className={classes.badge}>{numberOfCarItems}</span>
    </button>
  );
};

export default HeaderCartButton;
