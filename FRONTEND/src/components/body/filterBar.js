import OffsetDiv from "../utils/offsetDiv";
import Search from "./search";

let placeholder = [];
for (let i = 0; i < 20; i++) {
    placeholder.push({ _id: i });
}

const FilterBar = (props) => {
    const {
        setData,
        getRestaurantList,
        setActiveSort,
        setActiveVeg,
        setActivePage,
        activeSort,
        activeVeg,
        activePage,
        setTotalPage,
    } = props;

    const highestRatedHandler = () => {
        setData(placeholder);
        setActiveSort(1);
        getRestaurantList(1, activeVeg, activePage);
    };
    const mostRatedHandler = () => {
        setData(placeholder);
        setActiveSort(2);
        getRestaurantList(2, activeVeg, activePage);
    };
    const deliveryTimeHandler = () => {
        setData(placeholder);
        setActiveSort(3);
        getRestaurantList(3, activeVeg, activePage);
    };
    const vegHandler = () => {
        setData(placeholder);
        if (activePage > 12) {
            setActivePage(12);
            getRestaurantList(activeSort, 1, 12);
        } else {
            getRestaurantList(activeSort, 1, activePage);
        }
        setActiveVeg(1);

        setTotalPage(12);
    };
    const nonVegHandler = () => {
        setData(placeholder);
        if (activePage > 14) {
            setActivePage(14);
            getRestaurantList(activeSort, 2, 14);
        } else {
            getRestaurantList(activeSort, 2, activePage);
        }
        setActiveVeg(2);

        setTotalPage(14);
    };
    const clearFilterHandler = () => {
        setData(placeholder);
        setActiveSort(0);
        setActiveVeg(0);
        getRestaurantList(0, 0, activePage);
        setTotalPage(25);
    };
    return (
        <div className="filterBar">
            <Search />
            <OffsetDiv width="2rem" />
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
    );
};

export default FilterBar;
