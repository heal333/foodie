import { useParams } from "react-router-dom";
import Menu from "./Menu";
import useRestaurantData from "../utils/useRestaurantData";
const Restaurant = () => {
    const { resId } = useParams();

    window.scrollTo(0, 0);

    const restaurantData = useRestaurantData(resId);

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
                <div className="restaurantInfo">
                    <div className="name">
                        {restaurantData["Restaurant Name"]}
                    </div>
                    <div>{restaurantData["Area"]}</div>
                    <div>Cuisine: {restaurantData.Cuisine}</div>
                    <div>{restaurantData.Location} </div>
                    <div>{restaurantData["Delivery Time"]} mins</div>
                    <div>
                        {(restaurantData["Delivery Time"] * 0.3).toFixed(2)} km
                    </div>
                    <div>{restaurantData["Number of Offers"]}</div>
                    <div>{restaurantData["Offer Name"]}</div>
                </div>
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
