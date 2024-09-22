import { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils/CartContextProvider";
import { useNavigate } from "react-router-dom";
import getAutoLogin from "../utils/getAutoLogin";

const Account = (props) => {
    const { setUser, user } = useContext(CartContext);
    const [accountData, setAccountData] = useState({});
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const getAccountData = async () => {
        setAccountData(await getAutoLogin(user, token));
    };
    console.log(accountData.orderHistory);

    useEffect(() => {
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
                {accountData.orderHistory.map((obj, i) => {
                    return (
                        <div key={i}>
                            <div>{obj.address.name}</div>
                            <div>{obj.address.address2}</div>
                            <div>{obj.date}</div>
                        </div>
                    );
                })}
                <button onClick={logoutHandler}>logout</button>
            </div>
        );
    }
    return <div></div>;
};

export default Account;
