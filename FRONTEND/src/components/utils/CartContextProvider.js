import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => {},
});

const CartContextProvider = (props) => {
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState("");
    const [cartItems, setCartItems] = useState({});
    const [user, setUser] = useState("Login");
    return (
        <CartContext.Provider
            value={{
                cartItems: cartItems,
                totalItems: totalItems,
                currentPage: currentPage,
                user: user,
                setUser,
                setCurrentPage,
                setTotalItems,
                setCartItems,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
