import { useEffect, useContext } from "react";
import { CartContext } from "../utils/CartContextProvider";
import OffsetDiv from "../utils/offsetDiv";

const SignupPage = () => {
    const { setCurrentPage } = useContext(CartContext);
    useEffect(() => {
        setCurrentPage("/sign up");
    });
    return (
        <div className="loginPage">
            <label>Sign up</label>
            <input placeholder="user name"></input>
            <input placeholder="email" type="email"></input>
            {/* or
            <input placeholder="phone number" type="number"></input> */}
            <input type="password" placeholder="password"></input>
            <input type="password" placeholder="confirm password"></input>
            <span>
                <input type="checkbox"></input> i accept the terms and
                conditions
            </span>
            <button>Register</button>
        </div>
    );
};

export default SignupPage;
