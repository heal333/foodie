import { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils/CartContextProvider";
import { Link } from "react-router-dom";
import CartRestaurantItems from "./CartRestaurantItems";
import OffsetDiv from "../utils/offsetDiv";

const CartItems = () => {
    const { cartItems, setCartItems, setTotalItems } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    let total = 0;

    const calcTotalPrice = (price) => {
        total += price;
    };
    const increaseAmount = (id, item) => {
        setCartItems((prev) => {
            // console.log(prev);
            prev[id]["menu"][item]["amount"] += 1;

            setTotalItems((prev) => prev + 1);
            setTotalPrice(totalPrice + prev[id]["menu"][item]["price"]);
            return prev;
        });
    };
    const decreaseAmount = (id, item) => {
        if (cartItems[id]["menu"][item]["amount"] === 1) {
            setTotalPrice(totalPrice - cartItems[id]["menu"][item]["price"]);
            setTotalItems((prev) => prev - 1);

            // console.log(Object.keys(cartItems));
            if (Object.keys(cartItems[id]["menu"]).length === 1) {
                setCartItems((prev) => {
                    delete prev[id];
                    return prev;
                });
            } else {
                setCartItems((prev) => {
                    delete prev[id]["menu"][item];
                    return prev;
                });
            }

            return;
        }
        setCartItems((prev) => {
            // console.log(prev);
            prev[id]["menu"][item]["amount"] -= 1;

            setTotalItems((prev) => prev - 1);
            setTotalPrice(totalPrice - prev[id]["menu"][item]["price"]);
            return prev;
        });
    };
    useEffect(() => {
        setTotalPrice(total);
    }, []);

    return (
        <div className="cartItems">
            <div className="cartItemsLabel">cart Items:</div>
            {Object.keys(cartItems).map((res, i) => {
                return (
                    <div key={i}>
                        <Link
                            to={`/foodie/restaurant/${res}`}
                            className="cartItemsRestaurant"
                        >
                            {cartItems[res]["Restaurant Name"]}
                        </Link>
                        <CartRestaurantItems
                            menu={cartItems[res].menu}
                            calcTotalPrice={calcTotalPrice}
                            increaseAmount={increaseAmount}
                            decreaseAmount={decreaseAmount}
                            id={res}
                        />
                        <br></br>
                    </div>
                );
            })}
            <hr></hr>
            <div style={{ textAlign: "end", paddingRight: "1rem" }}>
                Total price: ₹{totalPrice}
            </div>
        </div>
    );
};

export default CartItems;
