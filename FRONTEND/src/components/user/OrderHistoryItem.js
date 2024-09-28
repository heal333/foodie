const OrderHistoryItem = ({ item }) => {
    return (
        <div className="orderHistoryItem" key="item.name">
            <div>{item.name}</div>
            <div>₹{item.price}</div>
            <div>{item.amount}</div>
        </div>
    );
};

export default OrderHistoryItem;
