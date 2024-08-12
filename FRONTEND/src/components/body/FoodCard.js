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
    return (
        <div className={`foodCard ${props.fadeAni}`}>
            {!props.imageSrc && <div className="loading">loading...</div>}
            {props.imageSrc && (
                <img
                    className="storeImg"
                    src={`${props.imageSrc}?auto=compress&cs=tinysrgb&w=600`}
                ></img>
            )}
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
                    <div>({props.totalRatings}+ ratings)</div>
                ) : (
                    <div>(Too few Ratings)</div>
                )}
            </div>

            {props.deliveryTime && (
                <div className="deliveryTime">{props.deliveryTime} mins</div>
            )}
            {props.isVeg && (
                <div className="vegIndicator">
                    {props.isVeg === "Yes" ? (
                        <span className="veg">veg</span>
                    ) : (
                        <span className="nonVeg">non-veg</span>
                    )}
                </div>
            )}
        </div>
    );
};

export default FoodCard;
