import { Link } from "react-router-dom";
import CartButton from "../cart/CartButton";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">foodie</div>
            <ul className="navItems">
                <Link to="/foodie">Home</Link>
                <Link to="/foodie/aboutus">About us</Link>
                <Link to="/foodie/contactus">Contact us</Link>
                <CartButton />
            </ul>
        </div>
    );
};

export default Header;
