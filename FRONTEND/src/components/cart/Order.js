import { useState } from "react";
import AddressInput from "./AddressInput";
import PaymentInput from "./PaymentInput";
import ConfirmOrderInput from "./ConfirmOrderInput";

const Order = () => {
    const [addressInput, setAddressInput] = useState(true);
    const [paymentInput, setPaymentInput] = useState(false);
    const [orderConfirmInput, setOrderConfimInput] = useState(false);
    return (
        <div className="order ">
            <div onClick={() => setAddressInput(!addressInput)}>address</div>
            {addressInput && <AddressInput />}
            <div onClick={() => setPaymentInput(!paymentInput)}>payment</div>
            {paymentInput && <PaymentInput />}
            <div onClick={() => setOrderConfimInput(!orderConfirmInput)}>
                order/redirect to loginn page
            </div>
            {orderConfirmInput && <ConfirmOrderInput />}
        </div>
    );
};

export default Order;
