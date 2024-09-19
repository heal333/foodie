import { useRef, useState } from "react";

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

    const addressSubmitHandler = () => {
        if (nameRef.current.value.trim().length < 3) {
            setNameError(true);
        }
        if (phoneRef.current.value.length !== 10) {
            setPhoneError(true);
        }

        if (address1Ref.current.value.trim().length == 0) {
            setAddress1Error(true);
        }
        if (address2Ref.current.value.trim().length == 0) {
            setAddress2Error(true);
        }
        if (pincodeRef.current.value.length !== 6) {
            setPincodeError(true);
        } else if (
            !nameError &&
            !phoneError &&
            !address1Error &&
            !address2Error &&
            !pincodeError
        ) {
            console.log(nameRef.current.value.trim().length);
            props.setPaymentInput(true);
            props.setValidAddress(true);
        }
    };
    return (
        <div className={`addressInput ${!props.display ? "hidden" : ""}`}>
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
                }}
            ></input>
            <input
                className={address2Error ? "error" : ""}
                placeholder="address line 2"
                ref={address2Ref}
                onChange={() => {
                    setAddress2Error(false);
                }}
            ></input>
            <input
                className={pincodeError ? "error" : ""}
                placeholder="pincode"
                type="number"
                ref={pincodeRef}
                onChange={() => {
                    setPincodeError(false);
                }}
            ></input>
            <button className="submitButton" onClick={addressSubmitHandler}>
                Submit
            </button>
        </div>
    );
};

export default AddressInput;
