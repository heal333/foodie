import { Link } from "react-router-dom";
import CartButton from "../cart/CartButton";
import { useContext } from "react";
import { CartContext } from "../utils/CartContextProvider";

const Header = () => {
    const { currentPage, setCurrentPage } = useContext(CartContext);
    return (
        <div className="header">
            <div style={{ display: "flex" }}>
                <div className="logo">foodie</div>
                <div className="currentPage">{currentPage}</div>
            </div>
            <ul className="navItems">
                <Link to="/foodie">Home</Link>
                <Link
                    to="/foodie/aboutus"
                    onClick={() => setCurrentPage("/about us")}
                >
                    About us
                </Link>
                <Link to="/foodie/login">Login</Link>
                <CartButton />
            </ul>
        </div>
    );
};

export default Header;
