import { Link } from "react-router-dom";
import FoodCard from "./FoodCard.js";
import { useState, useEffect, useContext } from "react";

import { API } from "../utils/const.js";
import FilterBar from "./filterBar.js";
import PageNavigation from "./pageNavigation.js";
import useGetTotalPages from "../utils/customHooks/useGetTotalPages.js";
import { CartContext } from "../utils/CartContextProvider.js";

let placeholder = [];
for (let i = 0; i < 20; i++) {
    placeholder.push({ _id: i });
}
const Body = () => {
    const [activeSort, setActiveSort] = useState(0); //this can have 4 possible values, 0:no sorting, 1:sort by highest rated, 2:sort by most rated, 3:sorty by delivery time
    const [activeVeg, setActiveVeg] = useState(0); // this has 3 possible values, 0: both veg and non veg, 1:veg only, 2: nonveg only
    const [activePage, setActivePage] = useState(1);
    const [data, setData] = useState(placeholder);
    const [totalPage, setTotalPage] = useState(0);

    const { setCurrentPage } = useContext(CartContext);

    const getRestaurantList = async (activeSort, activeVeg, activePage) => {
        try {
            let response = await fetch(
                `${API}/restaurants?activeSort=${activeSort}&veg=${activeVeg}&page=${activePage}`
            );
            setData(await response.json());
        } catch (err) {
            console.log(err);
        }
    };
    const getTotalPages = async (veg) => {
        const response = await fetch(`${API}/totalpage?veg=${veg}`);
        const result = await response.json();
        setTotalPage(result);
    };

    useEffect(() => {
        getRestaurantList(activeSort, activeVeg, activePage);
        getTotalPages(0);
        setCurrentPage("");
        return () => console.log("unmounted");
    }, []);

    const pageChangeHandler = (page) => {
        setData(placeholder);
        setActivePage(page);
        getRestaurantList(activeSort, activeVeg, page);
    };

    return (
        <div className="body">
            <FilterBar
                setData={setData}
                getRestaurantList={getRestaurantList}
                setActiveSort={setActiveSort}
                setActiveVeg={setActiveVeg}
                setActivePage={setActivePage}
                activeSort={activeSort}
                activeVeg={activeVeg}
                activePage={activePage}
                totalPage={totalPage}
                getTotalPages={getTotalPages}
            />
            <div className="foodContainer">
                {data.map((obj) => {
                    return (
                        <Link
                            key={obj._id}
                            to={`/foodie/restaurant/${obj._id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <FoodCard
                                fadeAni={"fadeUpAnimation"}
                                imageSrc={obj.Image}
                                name={obj["Restaurant Name"]}
                                items={obj.Cuisine}
                                rating={obj.Rating}
                                totalRatings={obj["Number of Ratings"]}
                                totalRating={obj}
                                deliveryTime={obj["Delivery Time"]}
                                isVeg={obj["Pure Veg"]}
                            />
                        </Link>
                    );
                })}
            </div>
            <PageNavigation
                pageChangeHandler={pageChangeHandler}
                setActivePage={setActivePage}
                activePage={activePage}
                totalPage={totalPage}
            />
        </div>
    );
};

export default Body;
