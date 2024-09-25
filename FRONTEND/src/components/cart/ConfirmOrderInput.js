import { useContext, useState } from "react";
import { CartContext } from "../utils/CartContextProvider";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useStore } from "react-redux";
import { API } from "../utils/const";
import OrderCompleteModal from "./OrderCompleteModal";

const ConfirmOrderInput = (props) => {
    const [orderCompleteModal, setOrderCompleteModal] = useState(false);
    const { user, cartItems, setCartItems, setTotalItems } =
        useContext(CartContext);
    console.log("rerendered");
    let isDisabled = props.validAddress && props.validPayment;
    const token = localStorage.getItem("token");

    const postOrder = async (order, address, user, token) => {
        response = await fetch(`${API}/order`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ordered: order,
                address: address,
                user: user,
                token: token,
            }),
        });
        if (response.status === 201) {
            // console.log("done");
            setOrderCompleteModal(true);
            setCartItems({});
            setTotalItems(0);
            // setTotalPrice(0);
        }
        const result = await response.json();
        // console.log(result);
    };
    const address = useSelector((store) => store.user.address);
    const orderConfirmHandler = () => {
        // console.log(cartItems);
        // console.log(address);
        postOrder(cartItems, address, user, token);
    };

    return (
        <>
            <div className="confirmOrder orderModal">
                <div style={{ color: "red" }}>
                    {!props.validAddress && "invalid address "}
                    {!props.validAddress && !props.validPayment && "and"}
                    {!props.validPayment && " invalid payment"}
                </div>
                {user === "Login" ? (
                    <Link to="/foodie/login">
                        <button>Login</button>
                    </Link>
                ) : (
                    <button
                        disabled={!isDisabled}
                        onClick={() => orderConfirmHandler()}
                    >
                        confirm your order!
                    </button>
                )}
            </div>
            {orderCompleteModal && (
                <span
                    className="overlay"
                    onClick={() => setOrderCompleteModal(false)}
                >
                    <OrderCompleteModal />
                </span>
            )}
        </>
    );
};

export default ConfirmOrderInput;
