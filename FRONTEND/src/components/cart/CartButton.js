import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../utils/CartContextProvider";
const CartButton = () => {
    const [cartAnimation, setCartAnimation] = useState({});

    const { totalItems } = useContext(CartContext);
    useEffect(() => {
        totalItems > 0 && setCartAnimation({ scale: "1.2" });
        // console.log("wat");

        timer = setTimeout(() => {
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
