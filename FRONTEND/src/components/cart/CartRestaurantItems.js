import { useEffect } from "react";

const CartRestaurantItems = (props) => {
    let total = 0;
    useEffect(() => {
        props.calcTotalPrice(total);
    }, []);
    return (
        <div>
            {Object.keys(props.menu).map((item, i) => {
                total += props.menu[item].price * props.menu[item].amount;
                return (
                    <div className="cartItemFood" key={i}>
                        <div className="cartPageItemName">
                            {props.menu[item].name}
                        </div>

                        <div className="cartPageItemAmount">
                            <button
                                className="remove"
                                onClick={() =>
                                    props.decreaseAmount(props.id, item)
                                }
                            >
                                -
                            </button>
                            {props.menu[item].amount}
                            <button
                                className="add"
                                onClick={() =>
                                    props.increaseAmount(props.id, item)
                                }
                            >
                                +
                            </button>
                        </div>
                        <div className="cartPageItemPrice">
                            ₹{props.menu[item].price} x{" "}
                            {props.menu[item].amount}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CartRestaurantItems;
