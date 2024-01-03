import { useState,useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const [isCheckout,setIsCheckout]=useState(false)

  const cartItemRemoveHandler = (id)=>{
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item)=>{
    cartCtx.addItem(item)
  };
  const cartItems = (
    <ul className={classes["cart-items"]} id="cartItems">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  const orderHandler=()=>{
    setIsCheckout(true);
  }

  const modalActions=      <div className={classes.actions}>
  <button className={classes["button--alt"]} onClick={props.onClose}>
    close
  </button>
  {hasItems && <button className={classes.button} onClick={orderHandler}>order</button>}
</div>
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{`₹${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onClose}/>}
      {!isCheckout && modalActions }

    </Modal>
  );
};
export default Cart;
