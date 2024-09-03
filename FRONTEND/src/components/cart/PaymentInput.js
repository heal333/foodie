const PaymentInput = () => {
    return (
        <div className="paymentInput">
            <input placeholder="enter card number"></input>
            <input placeholder="cvv"></input>
            or
            <input placeholder="enter your upi"></input>
            or
            <input type="checkbox"></input>
            <label>Cash On Delivery</label>
        </div>
    );
};

export default PaymentInput;
