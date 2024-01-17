import React, { useState, useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const cartItems = (
    <ul className={classes["cart-items"]} id="cartItems">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  
  //to enable checkout form after clicking submiting
  const orderHandler = () => {
    setIsCheckout(true);
  };

  //tonsend the ordetails to the backend
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://foodie-53936-default-rtdb.asia-southeast1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          ordredItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  // //uncomment this to wipe the ordered database in the backend
  // const clearOrderDatabase = () => {
  //   fetch(
  //     "https://foodie-53936-default-rtdb.asia-southeast1.firebasedatabase.app/order.json",
  //     {
  //       method: "PUT",
  //       body: JSON.stringify(""),
  //     }
  //   );
  // };
  // //clearOrderDatabase();


  //to render order and close button in the cart modal
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          order
        </button>
      )}
    </div>
  );
  

  //to render meal items on the cart modal
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{`₹${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>sending order data.....</p>;
  const didSubmitModalContent = <p style={{"color":"green"}}>ordered confirmed</p>

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};
export default Cart;
