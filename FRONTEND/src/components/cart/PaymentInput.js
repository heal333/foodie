import { useRef, useState } from "react";
const PaymentInput = (props) => {
    const [cardCheck, setCardCheck] = useState(true);
    const [upiCheck, setUpiCheck] = useState(false);
    const [codCheck, setCodCheck] = useState(false);

    const cardRef = useRef();
    const cvvRef = useRef();
    const upiRef = useRef();

    const paymentSubmitHandler = () => {
        if (cardCheck) {
            if (cardRef.current.value.length !== 12) {
                //set card error
            }
            if (cvvRef.current.value.length !== 3) {
                //do otherr thing
            }
            return;
        } else if (upiCheck) {
            if (!upiRef.current.value.includes("@")) {
                //do
                return;
            }
        } else if (codCheck) {
            props.setOrderConfirmInput(true);
            props.setValidPayment(true);
        }
    };
    return (
        <div className="paymentInput">
            <div>
                <input
                    type="checkbox"
                    checked={cardCheck}
                    onChange={() => {
                        setCardCheck((prev) => !prev);
                        setUpiCheck(false);
                        setCodCheck(false);
                    }}
                ></input>
                <input
                    style={{ width: "60%" }}
                    placeholder="enter card number"
                    disabled={!cardCheck}
                    type="number"
                    ref={cardRef}
                ></input>
                <input
                    style={{ width: "5rem" }}
                    placeholder="cvv"
                    disabled={!cardCheck}
                    type="number"
                    ref={cvvRef}
                ></input>
            </div>
            <div>
                <input
                    type="checkbox"
                    checked={upiCheck}
                    onChange={() => {
                        setUpiCheck((prev) => !prev);
                        setCardCheck(false);
                        setCodCheck(false);
                        props.setValidPayment(false);
                    }}
                ></input>
                <input
                    placeholder="enter your upi"
                    disabled={!upiCheck}
                    type="email"
                    ref={upiRef}
                ></input>
            </div>
            <div>
                <input
                    type="checkbox"
                    checked={codCheck}
                    onChange={() => {
                        setCodCheck((prev) => !prev);
                        setCardCheck(false);
                        setUpiCheck(false);
                        props.setValidPayment(false);
                    }}
                ></input>
                <label
                    className={!codCheck ? "disabled" : ""}
                    style={{ marginLeft: "1rem", fontSize: ".9rem" }}
                >
                    Cash On Delivery
                </label>
            </div>
            <button onClick={paymentSubmitHandler}>submit</button>
        </div>
    );
};

export default PaymentInput;
