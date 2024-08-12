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
        // getRes("http://127.0.0.1:3000/restaurants");
        getRes("https://foodie-orcx.onrender.com/restaurants");
    }, []);

    const highestRatedHandler = () => {
        // getRes("http://127.0.0.1:3000/restaurants/highestrated");
        getRes("https://foodie-orcx.onrender.com/restaurants/highestrated");
    };
    const mostRatedHandler = () => {
        getRes("http://127.0.0.1:3000/restaurants/mostrated");
        // getRes("https://foodie-orcx.onrender.com/restaurants/mostrated");
    };
    const deliveryTimeHandler = () => {
        // getRes("http://127.0.0.1:3000/restaurants/deliverytime");
        getRes("https://foodie-orcx.onrender.com/restaurants/deliverytime");
    };
    const vegHandler = () => {
        // getRes("http://127.0.0.1:3000/restaurants/veg");
        getRes("https://foodie-orcx.onrender.com/restaurants/veg");
    };
    const nonVegHandler = () => {
        // getRes("http://127.0.0.1:3000/restaurants/nonveg");
        getRes("https://foodie-orcx.onrender.com/restaurants/nonveg");
    };
    return (
        <div className="body">
            <div className="filterBar">
                <div>sort by:</div>
                <button onClick={highestRatedHandler}>highest rated</button>
                <button onClick={mostRatedHandler}>most rated</button>
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
