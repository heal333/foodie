import { useContext, useEffect } from "react";
import { CartContext } from "../utils/CartContextProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const { setCurrentPage } = useContext(CartContext);
    useEffect(() => {
        setCurrentPage("/login");
    });
    return (
        <div className="loginPage">
            <label>Login</label>
            <input placeholder="user name"></input>
            <input type="password" placeholder="password"></input>
            <button>login</button>
            <div>
                dont have an account? go to{" "}
                <Link to={"/foodie/signup"}>sign up</Link> page.
            </div>
        </div>
    );
};

export default Login;
