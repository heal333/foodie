import FoodCard from "./FoodCard.js";
import { useState, useEffect } from "react";

const Body = () => {
    const [activeState, setActiveState] = useState({
        highestRated: false,
        mostRated: false,
        deliveryTime: false,
        veg: false,
        nonVeg: false,
    });

    const getRes = async (api) => {
        try {
            // let response = await fetch("https://foodie-orcx.onrender.com");
            let response = await fetch(api);
            setData(await response.json());
        } catch (err) {
            console.log(err);
        }
    };
    let placeholder = [];
    for (let i = 0; i < 24; i++) {
        placeholder.push({});
    }

    const [data, setData] = useState(placeholder);
    useEffect(() => {
        getRes("http://127.0.0.1:3000/restaurants");
    }, []);

    const highestRatedHandler = () => {
        getRes("http://127.0.0.1:3000/restaurants/highestrated");
    };
    const deliveryTimeHandler = () => {
        getRes("http://127.0.0.1:3000/restaurants/deliverytime");
    };
    const vegHandler = () => {
        getRes("http://127.0.0.1:3000/restaurants/veg");
    };
    const nonVegHandler = () => {
        getRes("http://127.0.0.1:3000/restaurants/nonveg");
    };
    return (
        <div className="body">
            <div className="filterBar">
                <div>sort by:</div>
                <button onClick={highestRatedHandler}>highest rated</button>
                <button>most rated</button>
                <button onClick={deliveryTimeHandler}>delivery time</button>
                <button onClick={vegHandler}>veg</button>
                <button onClick={nonVegHandler}>non-veg</button>
            </div>
            <div className="foodContainer">
                {data.map((obj) => {
                    return (
                        <FoodCard
                            fadeAni={"fadeUpAnimation"}
                            key={obj._id}
                            imageSrc={obj.Image}
                            name={obj["Restaurant Name"]}
                            items={obj.Cuisine}
                            rating={obj.Rating}
                            totalRatings={obj["Number of Ratings"]}
                            totalRating={obj}
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
