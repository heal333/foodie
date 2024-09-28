import { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils/CartContextProvider";
import { Link } from "react-router-dom";
import CartRestaurantItems from "./CartRestaurantItems";
import OffsetDiv from "../utils/offsetDiv";
import useGetTotalPrice from "../utils/customHooks/useGetTotalPrice";

const CartItems = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const totalPrice = useGetTotalPrice(cartItems);

    const clearCartHandler = () => {
        setCartItems({});
    };

    return (
        <div className="cartItems">
            <div className="cartItemsLabel">cart Items:</div>
            {Object.keys(cartItems).map((res) => {
                return (
                    <div key={res}>
                        <Link
                            to={`/foodie/restaurant/${res}`}
                            className="cartItemsRestaurant"
                        >
                            {cartItems[res]["Restaurant Name"]}
                        </Link>
                        <CartRestaurantItems res={res} />
                        <br></br>
                    </div>
                );
            })}
            <hr></hr>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                }}
            >
                <button className="smallRedButton" onClick={clearCartHandler}>
                    clear cart
                </button>
                <div style={{ paddingRight: "1rem" }}>
                    Total price: ₹{totalPrice}
                </div>
            </div>
        </div>
    );
};

export default CartItems;
