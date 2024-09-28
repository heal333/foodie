const useGetTotalPrice = (cartItems) => {
    let totalPrice = 0;
    // total price
    Object.values(cartItems).map((obj) => {
        Object.values(obj.menu).map((obj) => {
            totalPrice += obj.amount * obj.price;
        });
    });
    return totalPrice;
};

export default useGetTotalPrice;
