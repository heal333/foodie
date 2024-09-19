import { useState } from "react";
import AddressInput from "./AddressInput";
import PaymentInput from "./PaymentInput";
import ConfirmOrderInput from "./ConfirmOrderInput";
import arrow from "../../plugs/arrow.png";

const Order = () => {
    const [addressInput, setAddressInput] = useState(true);
    const [paymentInput, setPaymentInput] = useState(false);
    const [orderConfirmInput, setOrderConfirmInput] = useState(false);

    const [validAddress, setValidAddress] = useState(false);
    const [validPayment, setValidPayment] = useState(false);
    return (
        <div className="order ">
            <div
                onClick={() => setAddressInput(!addressInput)}
                className="addressBanner"
            >
                <span>address</span>
                <span
                    className={addressInput ? "rotate" : ""}
                    style={{ fontWeight: "bold" }}
                >
                    <img style={{ width: "1.5rem" }} src={arrow}></img>
                </span>
            </div>
            <AddressInput
                display={addressInput}
                setPaymentInput={setPaymentInput}
                setAddressInput={setAddressInput}
                setValidAddress={setValidAddress}
            />
            <div
                onClick={() => setPaymentInput(!paymentInput)}
                className="addressBanner"
            >
                <span>payment</span>
                <span
                    className={paymentInput ? "rotate" : ""}
                    style={{ fontWeight: "bold" }}
                >
                    <img style={{ width: "1.5rem" }} src={arrow}></img>
                </span>
            </div>
            {paymentInput && (
                <PaymentInput
                    setOrderConfirmInput={setOrderConfirmInput}
                    setValidPayment={setValidPayment}
                />
            )}
            <div
                onClick={() => setOrderConfirmInput(!orderConfirmInput)}
                className="addressBanner"
            >
                <span>order/redirect to login page</span>
                <span
                    className={orderConfirmInput ? "rotate" : ""}
                    style={{ fontWeight: "bold" }}
                >
                    <img style={{ width: "1.5rem" }} src={arrow}></img>
                </span>
            </div>
            {orderConfirmInput && (
                <ConfirmOrderInput
                    validAddress={validAddress}
                    validPayment={validPayment}
                />
            )}
        </div>
    );
};

export default Order;
