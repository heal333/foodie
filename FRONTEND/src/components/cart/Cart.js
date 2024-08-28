import { useContext } from "react";
import { CartContext } from "../utils/CartContextProvider";

const CartRestaurantItems = ({ menu }) => {
    console.log(menu);
    return (
        <div>
            {Object.keys(menu).map((item) => {
                return (
                    <div>
                        <div>{menu[item].name}</div>
                        <div>{menu[item].amount}</div>
                        <div>{menu[item].price}</div>
                    </div>
                );
            })}
        </div>
    );
};

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    let lst = [];
    console.log(cartItems);
    // Object.values(cartItems).map((res) => {
    //     Object.values(res).map((item) => {
    //         console.log(item);
    //         lst.push([item.name]);
    //     });
    // });
    // console.log(lst);
    return (
        <div>
            {Object.keys(cartItems).map((res) => {
                return (
                    <div>
                        {cartItems[res]["Restaurant Name"]}
                        <CartRestaurantItems menu={cartItems[res].menu} />
                        <br></br>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
