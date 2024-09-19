import { useContext, useEffect } from "react";
import { CartContext } from "../utils/CartContextProvider";
import { useNavigate } from "react-router-dom";

const Account = (props) => {
    const { setUser } = useContext(CartContext);
    const navigate = useNavigate();
    const data = {
        _id: "66ea46d8cba514b5d61bca39",
        user: "test0",
        email: "test0@test.com",
        password:
            "$2a$12$kr2uO.12wYgoz29/Y9pzwO7Y5Nhhy8wAqy611AuyqBDRixGwVHuzG",
        created: 1726629592442,
        cart: [],
        history: [],
        __v: 0,
    };
    // useEffect(()=>{
    //     setUser(data)
    // })
    const logoutHandler = () => {
        localStorage.clear();
        setUser("Login");
        navigate("/foodie");
    };
    return (
        <div className="account">
            <div>{data.user}</div>
            <div>
                account created on: {new Date(data.created).toDateString()}
            </div>
            <button onClick={logoutHandler}>logout</button>
        </div>
    );
};

export default Account;
