import { useContext, useEffect, navigate } from "react";
import { CartContext } from "../utils/CartContextProvider";
import { Link, redirect, useNavigate } from "react-router-dom";

import { useEffect, useContext, useRef, useState } from "react";
import { CartContext } from "../utils/CartContextProvider";
import { API } from "../utils/const";

const Login = () => {
    const { setCurrentPage, setUser } = useContext(CartContext);
    const inputPassRef = useRef();
    const inputUserRef = useRef();

    const navigate = useNavigate();
    const [userEror, setUserError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [buttonText, setButtonText] = useState("Login!");
    const [invalidUser, setInvalidUser] = useState(false);
    useEffect(() => {
        setCurrentPage("/login");
    });

    const postLogin = async () => {
        try {
            const result = await fetch(`${API}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user: inputUserRef.current.value,
                    password: inputPassRef.current.value,
                }),
            });
            console.log(result.status);
            if (result.status === 201) {
                const response = await result.json();
                setUser(response.user);
                localStorage.setItem("token", response.token);
                localStorage.setItem("user", response.user);
                navigate("/foodie");
            } else {
                const response = await result.json();
                setInvalidUser(true);
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
        setButtonText("Login");
    };
    const registerHandler = (e) => {
        e.preventDefault();
        setButtonText("submiting....");
        let err = 0;

        if (
            inputUserRef.current.value.trim().length < 3 ||
            inputUserRef.current.value.trim().length > 16
        ) {
            setUserError(true);
            inputUserRef.current.value = "";
            err++;
        }
        if (inputPassRef.current.value.trim().length < 6) {
            setPassError(true);
            inputPassRef.current.value = "";
            err++;
        }

        if (err === 0) {
            postLogin();
        }
    };

    return (
        <form className="loginPage" onSubmit={registerHandler}>
            <label>Login</label>
            <input
                className={userEror ? "error" : ""}
                onClick={() => {
                    setUserError(false);
                    setInvalidUser(false);
                }}
                placeholder={
                    userEror
                        ? "*name must be between 3 to 16 chars long"
                        : "user name or email"
                }
                ref={inputUserRef}
            ></input>

            <input
                placeholder={
                    passError ? "*password must be atleast 6 chars" : "password"
                }
                className={passError ? "error" : ""}
                onClick={() => {
                    setPassError(false);
                    setInvalidUser(false);
                }}
                type="password"
                ref={inputPassRef}
            ></input>

            <span className="invalidError">
                {invalidUser && "invalid email or/and password"}
            </span>

            <button>{buttonText}</button>
            <div>
                dont have an account? go to{" "}
                <Link to={"/foodie/signup"}>sign up</Link> page.
            </div>
        </form>
    );
};

export default Login;

// const Login = () => {
//     const { setCurrentPage } = useContext(CartContext);
//     useEffect(() => {
//         setCurrentPage("/login");
//     });
//     return (
//         <div className="loginPage">
//             <label>Login</label>
//             <input placeholder="user name"></input>
//             <input type="password" placeholder="password"></input>
//             <button>login</button>
//             <div>
//                 dont have an account? go to{" "}
//                 <Link to={"/foodie/signup"}>sign up</Link> page.
//             </div>
//         </div>
//     );
// };

// export default Login;
