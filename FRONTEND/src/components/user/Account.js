import { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils/CartContextProvider";
import { useNavigate } from "react-router-dom";
import getAutoLogin from "../utils/getAutoLogin";
import OrderHistory from "./OrderHistory";
import UserDetails from "./UserDetails";

const Account = (props) => {
    const { setUser, setCurrentPage } = useContext(CartContext);
    const [accountData, setAccountData] = useState();
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    const getAccountData = async () => {
        setAccountData(await getAutoLogin(user, token));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        getAccountData();
        setCurrentPage("/user");
    }, []);
    const logoutHandler = () => {
        localStorage.clear();
        setUser("Login");
        navigate("/foodie");
    };
    if (accountData) {
        return (
            <div className="account">
                <UserDetails accountData={accountData} />
                <div className="logoutButton">
                    <button className="smallRedButton" onClick={logoutHandler}>
                        logout
                    </button>
                </div>

                <OrderHistory orderHistory={accountData.orderHistory} />
            </div>
        );
    }
    return <div className="account"></div>;
};

export default Account;
