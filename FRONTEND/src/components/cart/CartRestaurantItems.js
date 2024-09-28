import { useContext, useEffect } from "react";
import { CartContext } from "../utils/CartContextProvider";

const CartRestaurantItems = ({ res }) => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const increaseAmount = (item) => {
        setCartItems((prev) => {
            prev[res].menu[item].amount += 1;
            return { ...prev };
        });
    };
    const decreaseAmount = (item) => {
        if (cartItems[res].menu[item].amount == 1) {
            setCartItems((prev) => {
                delete prev[res].menu[item];
                if (Object.keys(prev[res].menu).length === 0) {
                    delete prev[res];
                    return { ...prev };
                }
                return { ...prev };
            });
        } else {
            setCartItems((prev) => {
                prev[res].menu[item].amount -= 1;
                return { ...prev };
            });
        }
    };
    return (
        <div>
            {Object.keys(cartItems[res].menu).map((item) => {
                return (
                    <div className="cartItemFood" key={item}>
                        <div className="cartPageItemName">
                            {cartItems[res].menu[item].name}
                        </div>
                        <div className="cartPageItemAmount">
                            <button
                                className="remove"
                                onClick={() => decreaseAmount(item)}
                            >
                                -
                            </button>
                            {cartItems[res].menu[item].amount}
                            <button
                                className="add"
                                onClick={() => increaseAmount(item)}
                            >
                                +
                            </button>
                        </div>
                        <div className="cartPageItemPrice">
                            ₹{cartItems[res].menu[item].price} x{" "}
                            {cartItems[res].menu[item].amount}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CartRestaurantItems;
