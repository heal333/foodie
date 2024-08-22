const FoodCard = (props) => {
    let ratingColor;
    if (parseFloat(props.rating) >= 4) {
        ratingColor = "green";
    } else if (parseFloat(props.rating) >= 3) {
        ratingColor = "yellowgreen";
    } else if (parseFloat(props.rating) >= 2) {
        ratingColor = "orange";
    } else {
        ratingColor = "red";
    }
    if (!props.imageSrc) {
        return (
            <div className={`foodCard ${props.fadeAni}`}>
                <div className="loading">loading...</div>
            </div>
        );
    }
    return (
        <div className={`foodCard ${props.fadeAni}`}>
            <img
                className="storeImg"
                src={`${props.imageSrc}?auto=compress&cs=tinysrgb&w=600`}
            ></img>
            <div className="storeName">{props.name}</div>
            <div className="foodItems">{props.items}</div>
            <div className="storeRating">
                {props.rating ? (
                    <div style={{ color: ratingColor }}>
                        {props.rating} stars
                    </div>
                ) : (
                    <div style={{ color: "red" }}>NEW</div>
                )}

                {props.totalRatings ? (
                    <div style={{ color: "rgb(200,200,200)" }}>
                        ({props.totalRatings}+ ratings)
                    </div>
                ) : (
                    <div style={{ color: "rgb(200,200,200)" }}>
                        (Too few Ratings)
                    </div>
                )}
            </div>
            <div className="deliveryTime">{props.deliveryTime} mins</div>
            <div className={props.isVeg === "Yes" ? "veg" : "nonVeg"}>
                {props.isVeg === "Yes" ? "veg" : "non-veg"}
            </div>
        </div>
    );
};

export default FoodCard;
