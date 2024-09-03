const AddressInput = () => {
    return (
        <div className="addressInput">
            <input placeholder="enter your name"></input>
            <input placeholder="phone number" type="number"></input>
            <input placeholder="address line 1"></input>
            <input placeholder="address line 2"></input>
            <input placeholder="pincode"></input>
            <button className="submitButton">Submit</button>
        </div>
    );
};

export default AddressInput;
