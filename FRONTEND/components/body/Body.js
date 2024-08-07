import FoodCard from "./FoodCard";
import { useState, useEffect } from "react";

const Body = () => {
    const getRes = async () => {
        try {
            let response = await fetch("https://foodie-orcx.onrender.com");
            setData(await response.json());
        } catch (err) {
            console.log(err);
        }
    };
    const [data, setData] = useState([]);
    useEffect(() => {
        getRes();
    }, []);

    return (
        <div className="body">
            <div className="search">search</div>
            <div className="foodContainer">
                {data.map((obj) => {
                    return (
                        <FoodCard
                            key={obj._id}
                            imageSrc={obj.Image}
                            name={obj["Restaurant Name"]}
                            items={obj.Cuisine}
                            rating={obj.Rating}
                            deliveryTime={obj["Delivery Time"]}
                            isVeg={obj["Pure Veg"]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
