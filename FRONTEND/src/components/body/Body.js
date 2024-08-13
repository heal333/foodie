import FoodCard from "./FoodCard.js";
import { useState, useEffect } from "react";

const PageNavigation = () => {
    return <div className="pageNavigation">1 2 3 4 5 6</div>;
};

const Body = () => {
    const [activeSort, setActiveSort] = useState(0); //this can have 4 possible values, 0:no sorting, 1:sort by highest rated, 2:sort by most rated, 3:sorty by delivery time
    const [activeVeg, setActiveVeg] = useState(0); // this has 3 possible values, 0: both veg and non veg, 1:veg only, 2: nonveg only

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
        // getRes(
        //     `http://127.0.0.1:3000/restaurants/highestrated?veg=${activeVeg}`
        // );
        getRes(
            `https://foodie-orcx.onrender.com/restaurants/highestrated?veg=${activeVeg}`
        );
        setActiveSort(1);
    };
    const mostRatedHandler = () => {
        // getRes(`http://127.0.0.1:3000/restaurants/mostrated?veg=${activeVeg}`);
        getRes(
            `https://foodie-orcx.onrender.com/restaurants/mostrated?veg=${activeVeg}`
        );
        setActiveSort(2);
    };
    const deliveryTimeHandler = () => {
        // getRes(
        //     `http://127.0.0.1:3000/restaurants/deliverytime?veg=${activeVeg}`
        // );
        getRes(
            `https://foodie-orcx.onrender.com/restaurants/deliverytime?veg=${activeVeg}`
        );
        setActiveSort(3);
    };
    const vegHandler = () => {
        // getRes(
        //     `http://127.0.0.1:3000/restaurants/veg?activeSort=${activeSort}`
        // );
        getRes(
            `https://foodie-orcx.onrender.com/restaurants/veg?aciveSort=${activeSort}`
        );
        setActiveVeg(1);
    };
    const nonVegHandler = () => {
        // getRes(
        //     `http://127.0.0.1:3000/restaurants/nonveg?activeSort=${activeSort}`
        // );
        getRes(
            `https://foodie-orcx.onrender.com/restaurants/nonveg?activeSort=${activeSort}`
        );
        setActiveVeg(2);
    };
    const clearFilterHandler = () => {
        getRes("https://foodie-orcx.onrender.com/restaurants");
        setActiveSort(0);
        setActiveVeg(0);
    };
    return (
        <div className="body">
            <div className="filterBar">
                <div>sort by:</div>
                <button
                    onClick={highestRatedHandler}
                    style={
                        activeSort === 1
                            ? {
                                  backgroundColor: "rgb(0, 212, 0)",
                                  color: "white",
                              }
                            : {}
                    }
                >
                    highest rated
                </button>
                <button
                    onClick={mostRatedHandler}
                    style={
                        activeSort === 2
                            ? {
                                  backgroundColor: "rgb(0, 212, 0)",
                                  color: "white",
                              }
                            : {}
                    }
                >
                    most rated
                </button>
                <button
                    onClick={deliveryTimeHandler}
                    style={
                        activeSort === 3
                            ? {
                                  backgroundColor: "rgb(0, 212, 0)",
                                  color: "white",
                              }
                            : {}
                    }
                >
                    delivery time
                </button>
                <div style={{ color: "gray" }}>|</div>

                <button
                    onClick={vegHandler}
                    style={
                        activeVeg === 1
                            ? {
                                  backgroundColor: "rgb(0, 212, 0)",
                                  color: "white",
                              }
                            : {}
                    }
                >
                    veg
                </button>
                <button
                    onClick={nonVegHandler}
                    style={
                        activeVeg === 2
                            ? {
                                  backgroundColor: "rgb(0, 212, 0)",
                                  color: "white",
                              }
                            : {}
                    }
                >
                    non-veg
                </button>
                <div style={{ color: "gray" }}>|</div>

                <button onClick={clearFilterHandler}>clear filter</button>
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
            <PageNavigation />
        </div>
    );
};

export default Body;
