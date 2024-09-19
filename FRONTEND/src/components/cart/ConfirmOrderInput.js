import { useContext } from "react";
import { CartContext } from "../utils/CartContextProvider";
import { Link } from "react-router-dom";

const ConfirmOrderInput = (props) => {
    const { user } = useContext(CartContext);
    let isDisabled = props.validAddress && props.validPayment;

    return (
        <div>
            {user === "Login" ? (
                <Link to="/foodie/login">
                    <button>Login</button>
                </Link>
            ) : (
                <button
                    disabled={!isDisabled}
                    onClick={() => {
                        console.log("ordered");
                    }}
                >
                    confirm your order!
                </button>
            )}
        </div>
    );
};

export default ConfirmOrderInput;
