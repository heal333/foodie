import { Link } from "react-router-dom";
import CartButton from "../cart/CartButton";
import { useContext } from "react";
import { CartContext } from "../utils/CartContextProvider";
import ThemeButton from "./ThemeButton";

const Header = () => {
    const { currentPage, user, setCurrentPage } = useContext(CartContext);

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
                <Link to={user === "Login" ? "/foodie/login" : ""}>{user}</Link>
                <CartButton />
            </ul>
        </div>
    );
};

export default Header;
