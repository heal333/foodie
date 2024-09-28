const useGetTotalAmount = (cartItems) => {
    let totalAmount = 0;
    // total price
    Object.values(cartItems).map((obj) => {
        Object.values(obj.menu).map((obj) => {
            totalAmount += obj.amount;
        });
    });
    return totalAmount;
};

export default useGetTotalAmount;
