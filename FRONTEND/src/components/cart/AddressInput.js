import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addAddress } from "../utils/redux/userSlice";

const AddressInput = (props) => {
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [address1Error, setAddress1Error] = useState(false);
    const [address2Error, setAddress2Error] = useState(false);
    const [pincodeError, setPincodeError] = useState(false);
    const nameRef = useRef();
    const phoneRef = useRef();
    const address1Ref = useRef();
    const address2Ref = useRef();
    const pincodeRef = useRef();

    const dispatch = useDispatch();

    const addressSubmitHandler = () => {
        let err = 0;
        if (nameRef.current.value.trim().length < 3) {
            setNameError(true);
            err += 1;
        }
        if (phoneRef.current.value.length !== 10) {
            setPhoneError(true);
            err += 1;
        }

        if (address1Ref.current.value.trim().length == 0) {
            setAddress1Error(true);
            err += 1;
        }
        if (address2Ref.current.value.trim().length == 0) {
            setAddress2Error(true);
            err += 1;
        }
        if (pincodeRef.current.value.length !== 6) {
            setPincodeError(true);
            err += 1;
        } else if (err == 0) {
            props.setPaymentInput(true);
            props.setValidAddress(true);
            dispatch(
                addAddress({
                    name: nameRef.current.value,
                    phone: phoneRef.current.value,
                    address1: address1Ref.current.value,
                    address2: address2Ref.current.value,
                    pincode: pincodeRef.current.value,
                })
            );
        }
    };
    return (
        <div
            className={`addressInput orderModal ${
                !props.display ? "hidden" : ""
            }`}
        >
            <input
                className={nameError ? "error" : ""}
                placeholder="enter your name"
                ref={nameRef}
                onChange={() => {
                    setNameError(false);
                    props.setValidAddress(false);
                }}
            ></input>
            <input
                className={phoneError ? "error" : ""}
                placeholder="phone number"
                type="number"
                onChange={() => {
                    setPhoneError(false);
                    props.setValidAddress(false);
                }}
                ref={phoneRef}
            ></input>
            <input
                className={address1Error ? "error" : ""}
                placeholder="address line 1"
                ref={address1Ref}
                onChange={() => {
                    setAddress1Error(false);
                    props.setValidAddress(false);
                }}
            ></input>
            <input
                className={address2Error ? "error" : ""}
                placeholder="address line 2"
                ref={address2Ref}
                onChange={() => {
                    setAddress2Error(false);
                    props.setValidAddress(false);
                }}
            ></input>
            <input
                className={pincodeError ? "error" : ""}
                placeholder="pincode"
                type="number"
                ref={pincodeRef}
                onChange={() => {
                    setPincodeError(false);
                    props.setValidAddress(false);
                }}
            ></input>
            <button className="submitButton" onClick={addressSubmitHandler}>
                Submit
            </button>
        </div>
    );
};

export default AddressInput;
