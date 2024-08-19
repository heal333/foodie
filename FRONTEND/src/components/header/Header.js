import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">foodie</div>
            <ul className="navItems">
                <Link to="/">Home</Link>
                <Link to="/aboutus">About us</Link>
                <Link to="/contactus">Contact us</Link>
                <Link className="cart" to="/cart">
                    cart
                </Link>
            </ul>
        </div>
    );
};

export default Header;
