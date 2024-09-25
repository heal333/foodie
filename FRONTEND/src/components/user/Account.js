import { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils/CartContextProvider";
import { useNavigate } from "react-router-dom";
import getAutoLogin from "../utils/getAutoLogin";
import OrderHistory from "./OrderHistory";

const Account = (props) => {
    const { setUser } = useContext(CartContext);
    const [accountData, setAccountData] = useState();
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    const getAccountData = async () => {
        setAccountData(await getAutoLogin(user, token));
    };

    console.log(accountData);
    useEffect(() => {
        window.scrollTo(0, 0);
        getAccountData();
    }, []);
    const logoutHandler = () => {
        localStorage.clear();
        setUser("Login");
        navigate("/foodie");
    };
    if (accountData) {
        return (
            <div className="account">
                <div>{accountData.user}</div>
                <div>
                    account created on:{" "}
                    {new Date(accountData.created).toDateString()}
                </div>
                <OrderHistory orderHistory={accountData.orderHistory} />
                <button onClick={logoutHandler}>logout</button>
            </div>
        );
    }
    return <div className="account"></div>;
};

export default Account;
