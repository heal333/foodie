import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">foodie</div>
            <ul className="navItems">
                <Link to="/foodie">Home</Link>
                <Link to="/foodie/aboutus">About us</Link>
                <Link to="/foodie/contactus">Contact us</Link>
                <Link className="cart" to="/foodie/cart">
                    cart
                </Link>
            </ul>
        </div>
    );
};

export default Header;
