import FoodCard from "./FoodCard.js";
import { useState, useEffect } from "react";

let placeholder = [];
for (let i = 0; i < 20; i++) {
    placeholder.push({});
}
const Body = () => {
    const [activeSort, setActiveSort] = useState(0); //this can have 4 possible values, 0:no sorting, 1:sort by highest rated, 2:sort by most rated, 3:sorty by delivery time
    const [activeVeg, setActiveVeg] = useState(0); // this has 3 possible values, 0: both veg and non veg, 1:veg only, 2: nonveg only
    const [activePage, setActivePage] = useState(1);
    const [data, setData] = useState(placeholder);
    const [totalPage, setTotalPage] = useState(0);

    const getRes = async (activeSort, activeVeg, activePage) => {
        try {
            // let API = `http://127.0.0.1:3000/restaurants?activeSort=${activeSort}&veg=${activeVeg}&page=${activePage}`;
            let API = `https://foodie-orcx.onrender.com/restaurants?activeSort=${activeSort}&veg=${activeVeg}&page=${activePage}`;

            let response = await fetch(API);
            setData(await response.json());
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getRes(activeSort, activeVeg, activePage);
        setTotalPage(25);
    }, []);

    const highestRatedHandler = () => {
        setActiveSort(1);
        getRes(1, activeVeg, activePage);
    };
    const mostRatedHandler = () => {
        setActiveSort(2);
        getRes(2, activeVeg, activePage);
    };
    const deliveryTimeHandler = () => {
        setActiveSort(3);
        getRes(3, activeVeg, activePage);
    };
    const vegHandler = () => {
        if (activePage > 12) {
            setActivePage(12);
            getRes(activeSort, 1, 12);
        } else {
            getRes(activeSort, 1, activePage);
        }
        setActiveVeg(1);

        setTotalPage(12);
    };
    const nonVegHandler = () => {
        if (activePage > 14) {
            setActivePage(14);
            getRes(activeSort, 2, 14);
        } else {
            getRes(activeSort, 2, activePage);
        }
        setActiveVeg(2);

        setTotalPage(14);
    };
    const clearFilterHandler = () => {
        setActiveSort(0);
        setActiveVeg(0);
        getRes(0, 0, activePage);
        setTotalPage(25);
    };
    const pageChangeHandler = (page) => {
        setActivePage(page);
        getRes(activeSort, activeVeg, page);
    };
    let pages = [];
    let endPage = activePage + 2 > totalPage ? totalPage : activePage + 2;
    for (
        let i = activePage - 2 < 1 ? 1 : activePage - 2;
        i < endPage + 1;
        i++
    ) {
        pages.push(
            <div
                className="pageNum"
                style={activePage === i ? { backgroundColor: "white" } : {}}
                onClick={() => pageChangeHandler(i)}
            >
                {i}
            </div>
        );
    }
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
            <div className="pageNavigation">
                <div className="pageNum" onClick={() => pageChangeHandler(1)}>
                    {"<<"}
                </div>
                <div
                    className="pageNum"
                    onClick={() =>
                        activePage > 1
                            ? pageChangeHandler(activePage - 1)
                            : setActivePage(1)
                    }
                >
                    {"<"}
                </div>
                {pages}
                <div
                    className="pageNum"
                    onClick={() =>
                        activePage < totalPage
                            ? pageChangeHandler(activePage + 1)
                            : setActivePage(activePage)
                    }
                >
                    {">"}
                </div>
                <div
                    className="pageNum"
                    onClick={() => pageChangeHandler(totalPage)}
                >
                    {">>"}
                </div>
            </div>
            ;
        </div>
    );
};

export default Body;
