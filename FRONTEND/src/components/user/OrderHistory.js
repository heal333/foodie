const OrderHistory = ({ orderHistory }) => {
    orderHistory.reverse();
    return (
        <div>
            order history
            <hr></hr>
            {orderHistory.map((obj, i) => {
                const date = new Date(obj.date);
                return (
                    <div key={i}>
                        <div>{date.toLocaleString()}</div>
                        <div>
                            {obj.address.name}, {obj.address.address1},{" "}
                            {obj.address.address2}
                        </div>
                        {Object.values(obj.ordered).map((obj) => {
                            return (
                                <div>
                                    {obj["Restaurant Name"]}
                                    {Object.values(obj.menu).map((obj) => {
                                        return (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-evenly",
                                                }}
                                            >
                                                <div>{obj.name}</div>
                                                <div>{obj.price}</div>
                                                <div>{obj.amount}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                        <hr></hr>
                    </div>
                );
            })}
        </div>
    );
};

export default OrderHistory;
