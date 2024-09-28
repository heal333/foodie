import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => {},
});

const CartContextProvider = (props) => {
    const [currentPage, setCurrentPage] = useState("");
    const [cartItems, setCartItems] = useState({});
    const [user, setUser] = useState("Login");
    return (
        <CartContext.Provider
            value={{
                cartItems: cartItems,
                currentPage: currentPage,
                user: user,
                setUser,
                setCurrentPage,
                setCartItems,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
