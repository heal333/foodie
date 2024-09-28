import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../utils/CartContextProvider";
import useGetTotalPrice from "../utils/customHooks/useGetTotalPrice";
import useGetTotalAmount from "../utils/customHooks/useGetTotalAmount";
const CartButton = () => {
    const [cartAnimation, setCartAnimation] = useState({});

    const { cartItems } = useContext(CartContext);

    let totalItems = useGetTotalAmount(cartItems);
    useEffect(() => {
        totalItems > 0 && setCartAnimation({ scale: "1.2" });

        let timer = setTimeout(() => {
            setCartAnimation({});
            clearTimeout(timer);
        }, 300);
    }, [totalItems]);

    return (
        <Link className="cartButton" to="/foodie/cart" style={cartAnimation}>
            cart
            {totalItems > 0 && (
                <div className="cartButtonBadge">{totalItems}</div>
            )}
        </Link>
    );
};

export default CartButton;
