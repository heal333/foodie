import useGetTotalPrice from "../utils/customHooks/useGetTotalPrice";
import OrderHistoryItem from "./OrderHistoryItem";

const OrderHistory = ({ orderHistory }) => {
    orderHistory.reverse();
    return (
        <div>
            order history:
            {orderHistory.map((obj) => {
                const date = new Date(obj.date);
                const totalPrice = useGetTotalPrice(obj.ordered);
                return (
                    <>
                        <div key={date} className="orderHistory">
                            <div>
                                {obj.address.name}, {obj.address.address1},{" "}
                                {obj.address.address2}
                            </div>
                            <div>{date.toLocaleString()}</div>
                            {Object.values(obj.ordered).map((obj) => {
                                return (
                                    <div key={obj["Restaurant Name"]}>
                                        <div className="cartItemsRestaurant">
                                            {obj["Restaurant Name"]}
                                        </div>

                                        {Object.values(obj.menu).map((obj) => {
                                            return (
                                                <OrderHistoryItem item={obj} />
                                            );
                                        })}
                                    </div>
                                );
                            })}
                            <div className="orderHistoryTotalPrice">
                                total price: ₹{totalPrice}
                            </div>
                        </div>
                        <hr></hr>
                    </>
                );
            })}
        </div>
    );
};

export default OrderHistory;
