import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => {},
});

const CartContextProvider = (props) => {
    const [totalItems, setTotalItems] = useState(0);
    const [cartItems, setCartItems] = useState({});
    return (
        <CartContext.Provider
            value={{
                cartItems: cartItems,
                totalItems: totalItems,
                setTotalItems,
                setCartItems,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
