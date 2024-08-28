import { useEffect, useState } from "react";
import { API } from "./const";

const useRestaurantData = (resId) => {
    const [resInfo, setResInfo] = useState({
        "Restaurant Name": "loading...",
        Image: "...",
        Area: "...",
        Cuisine: "...",
        Location: "...",
        "Delivery Time": "...",
        "Number of Offers": "...",
        "Offer Name": "...",
    });
    const fetchData = async () => {
        const data = await fetch(`${API}/resdetails?id=${resId}`);
        const json = await data.json();
        setResInfo(json[0]);
    };

    useEffect(() => {
        resId !== "0" && fetchData();
    }, []);
    return resInfo;
};

export default useRestaurantData;
