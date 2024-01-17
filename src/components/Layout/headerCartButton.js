import { React, useContext, useEffect, useState } from "react";
import CartIcon from "../../plugs/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  //sate to display bump animation on the cart button
  const [btnIsHighLighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCarItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    //to set the btnIsHighLighted state to true for 300ms
    //setting timeout for 300 ms because the bump animation lasts for 300ms
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onPress}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>cart</span>
      <span className={classes.badge}>{numberOfCarItems}</span>
    </button>
  );
};

export default HeaderCartButton;
