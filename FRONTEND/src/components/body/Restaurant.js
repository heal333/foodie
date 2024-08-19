import { off } from "process";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";
const Restaurant = () => {
    const [restaurantData, setRestaurantData] = useState({});
    const { resId } = useParams();

    window.scrollTo(0, 0);

    const getRestaurantDetails = async () => {
        // let API = `http://127.0.0.1:3000/menu?id=${resId}`;
        let API = `https://foodie-orcx.onrender.com/menu?id=${resId}`;
        let result = await fetch(API);
        let response = await result.json();

        setRestaurantData(response[0]);
    };

    useEffect(() => {
        getRestaurantDetails();
    }, []);
    return (
        <>
            <div className="restaurant">
                <img
                    className="restaurantImage"
                    src={`${restaurantData.Image}?auto=compress&cs=tinysrgb&w=1000`}
                ></img>
                <div className="restaurantInfo">
                    <div className="name">
                        {restaurantData["Restaurant Name"]}
                    </div>
                    <div>{restaurantData["Area"]}</div>
                    <div>Cuisine: {restaurantData.Cuisine}</div>
                    <div>{restaurantData.Location} </div>
                    <div>{restaurantData["Delivery Time"]} mins</div>
                    <div>{restaurantData["Delivery Time"] * 0.3} km</div>
                    <div>{restaurantData["Number of Offers"]}</div>
                    {/* <div>{restaurantData["Offer Name"]}</div> */}
                    <div>{restaurantData["Offer Name"]}</div>
                </div>
            </div>
            <Menu />
        </>
    );
};

export default Restaurant;
