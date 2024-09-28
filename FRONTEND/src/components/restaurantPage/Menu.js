import { useEffect, useState, useContext } from "react";
import { CartContext } from "../utils/CartContextProvider";
import { API } from "../utils/const";

const Menu = (props) => {
    const [menu, setMenu] = useState([]);
    const getRestaurantMenu = async (id) => {
        const response = await fetch(`${API}/menu?id=${id}`);
        const result = await response.json();
        setMenu(result.Menu);
    };
    useEffect(() => {
        getRestaurantMenu(props.id);
    }, []);
    //for testing useContext;
    // const data = useContext(UserContext);
    // console.log(data);
    // setTimeout(() => {
    //     data.changeData("changed");
    // }, 5000);
    const { cartItems, setCartItems } = useContext(CartContext);
    const addItemHandler = (obj, i) => {
        let copy = { ...cartItems };

        if (copy[props.id]) {
            if (copy[props.id]["menu"].hasOwnProperty(i)) {
                copy[props.id]["menu"][i].amount += 1;
            } else {
                copy[props.id]["menu"][i] = {
                    name: obj.name,
                    price: obj.price,
                    amount: 1,
                };
            }
        } else {
            copy[props.id] = { menu: {} };
            copy[props.id]["menu"][i] = {
                name: obj.name,
                price: obj.price,
                amount: 1,
            };
            copy[props.id]["Restaurant Name"] = props.name;
        }

        setCartItems(copy);
    };
    return (
        <div className="menu">
            <div className="test"></div>
            <div
                style={{
                    textAlign: "center",
                    fontWeight: 600,
                    fontSize: "1.4rem",
                }}
            >
                menu
            </div>
            {menu.map((obj, i) => {
                return (
                    <div className="foodItem" key={i}>
                        <div className="foodItemDetails">
                            <div className="name">{obj.name}</div>
                            <div className="description">
                                {obj.ingredients} | {obj.diet}
                                {obj.flavor_profile !== "-1"
                                    ? `| ${obj.flavor_profile}`
                                    : ""}
                            </div>
                        </div>
                        <div className="priceAndAdd">
                            <div>₹{obj.price}</div>
                            <button onClick={() => addItemHandler(obj, i + 1)}>
                                add +
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
