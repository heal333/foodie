import { useEffect, useContext, useRef, useState } from "react";
import { CartContext } from "../utils/CartContextProvider";
import { API } from "../utils/const";
import OffsetDiv from "../utils/offsetDiv";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const { setCurrentPage, setUser } = useContext(CartContext);
    const inputMailRef = useRef();
    const inputPassRef = useRef();
    const inputUserRef = useRef();
    const inputConfirmPassRef = useRef();
    const inputTermsRef = useRef();
    const navigate = useNavigate();

    const [userEror, setUserError] = useState(false);
    const [mailError, setMailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [confirmPassError, setConfirmPassError] = useState(false);
    const [termsError, setTermsError] = useState(false);
    const [buttonText, setButtonText] = useState("Register");
    const [invalidUser, setInvalidUser] = useState(false);
    useEffect(() => {
        setCurrentPage("/sign up");
    });

    const postSignup = async () => {
        try {
            const result = await fetch(`${API}/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user: inputUserRef.current.value,
                    email: inputMailRef.current.value,
                    password: inputPassRef.current.value,
                }),
            });
            console.log(result.status);
            if (result.status === 201) {
                const response = await result.json();
                setUser(response.user.user);
                localStorage.setItem("token", response.token);
                localStorage.setItem("user", response.user.email);
                navigate("/foodie");
            } else {
                const response = await result.json();
                setInvalidUser(true);
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
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
        if (!inputMailRef.current.value.includes("@")) {
            setMailError(true);
            inputMailRef.current.value = "";
            err++;
        }
        if (inputPassRef.current.value.trim().length < 6) {
            setPassError(true);
            inputPassRef.current.value = "";
            err++;
        }
        if (inputConfirmPassRef.current.value !== inputPassRef.current.value) {
            setConfirmPassError(true);
            inputConfirmPassRef.current.value = "";
            err++;
        }
        if (inputTermsRef.current.checked === false) {
            setTermsError(true);
            err++;
        }
        setTimeout(() => {
            setButtonText("Register");
        }, 500);

        if (err === 0) {
            postSignup();
        }
    };

    return (
        <form className="loginPage" onSubmit={registerHandler}>
            <label>Sign up</label>
            <input
                className={userEror ? "error" : ""}
                onClick={() => {
                    setUserError(false);
                    setInvalidUser(false);
                }}
                placeholder={
                    userEror
                        ? "*name must be between 3 to 16 chars long"
                        : "user name"
                }
                ref={inputUserRef}
            ></input>

            <input
                placeholder={mailError ? "*enter a valid email" : "email"}
                ref={inputMailRef}
                className={mailError ? "error" : ""}
                onClick={() => {
                    setMailError(false);
                    setInvalidUser(false);
                }}
                type="email"
            ></input>
            {/* or
            <input placeholder="phone number" type="number"></input> */}
            <input
                placeholder={
                    passError ? "*password must be atleast 6 chars" : "password"
                }
                className={passError ? "error" : ""}
                onClick={() => setPassError(false)}
                type="password"
                ref={inputPassRef}
            ></input>
            <input
                placeholder={
                    confirmPassError
                        ? "*password dosent match"
                        : "confirm password"
                }
                className={confirmPassError ? "error" : ""}
                onClick={() => setConfirmPassError(false)}
                type="password"
                ref={inputConfirmPassRef}
            ></input>
            <span>
                <input
                    type="checkbox"
                    className={termsError ? "error" : ""}
                    onClick={() => setTermsError(false)}
                    ref={inputTermsRef}
                ></input>{" "}
                i accept the terms and conditions
            </span>
            <span className="invalidError">
                {invalidUser && "user name or email already exists"}
            </span>
            <button>{buttonText}</button>
        </form>
    );
};

export default SignupPage;
