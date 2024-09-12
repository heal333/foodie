import { useParams } from "react-router-dom";
import Menu from "./Menu";
import useRestaurantData from "../utils/useRestaurantData";
import { useContext, useEffect } from "react";
import { CartContext } from "../utils/CartContextProvider";
import RestaurantPageDetails from "./RestaurantPageDetails";
const Restaurant = () => {
    const { resId } = useParams();
    const { setCurrentPage } = useContext(CartContext);

    const restaurantData = useRestaurantData(resId);
    useEffect(() => {
        setCurrentPage("/restaurant");
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="restaurant">
                <img
                    className="restaurantImage"
                    src={
                        restaurantData &&
                        `${restaurantData.Image}?auto=compress&cs=tinysrgb&w=1000`
                    }
                ></img>
                <RestaurantPageDetails restaurantData={restaurantData} />
            </div>
            {restaurantData._id && (
                <Menu
                    id={restaurantData._id}
                    name={restaurantData["Restaurant Name"]}
                />
            )}
        </>
    );
};

export default Restaurant;
