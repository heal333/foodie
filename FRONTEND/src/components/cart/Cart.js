import { useContext, useEffect } from "react";
import CartItems from "./CartItems";
import Order from "./Order";
import { CartContext } from "../utils/CartContextProvider";

const Cart = () => {
    const { setCurrentPage } = useContext(CartContext);
    // console.log("'tis nothing but a cart");
    useEffect(() => {
        setCurrentPage("/cart");
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="cart">
            <Order />
            <CartItems />
        </div>
    );
};

export default Cart;
