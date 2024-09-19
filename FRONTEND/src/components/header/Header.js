import { Link } from "react-router-dom";
import CartButton from "../cart/CartButton";
import { useContext, useEffect } from "react";
import { CartContext } from "../utils/CartContextProvider";
import ThemeButton from "./ThemeButton";
import getAutoLogin from "../utils/getAutoLogin";

const Header = () => {
    const { currentPage, user, setUser, setCurrentPage } =
        useContext(CartContext);
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user");

    const autoLogin = async () => {
        const userData = await getAutoLogin(userId, token);
        // console.log(userData);
        if (userData) {
            setUser(userData.user);
        }
    };

    useEffect(() => {
        autoLogin();
    }, []);

    return (
        <div className="header">
            <div style={{ display: "flex" }}>
                <Link to="/foodie" className="logo">
                    foodie
                </Link>
                <div className="currentPage">{currentPage}</div>
            </div>
            <ul className="navItems">
                <ThemeButton />
                <Link to="/foodie">Home</Link>
                <Link
                    to="/foodie/aboutus"
                    onClick={() => setCurrentPage("/about us")}
                >
                    About us
                </Link>
                <Link
                    to={
                        user === "Login"
                            ? "/foodie/login"
                            : `/foodie/user/${user}`
                    }
                >
                    {user}
                </Link>
                <CartButton />
            </ul>
        </div>
    );
};

export default Header;
