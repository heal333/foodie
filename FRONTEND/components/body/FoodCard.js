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
        <div className="foodCard">
            <img className="storeImg" src={props.imageSrc} loading="lazy"></img>
            <div className="storeName">{props.name}</div>
            <div className="foodItems">{props.items}</div>
            <div className="storeRating" style={{ color: ratingColor }}>
                {props.rating} stars
            </div>
            <div>{props.deliveryTime} mins</div>
            <div>
                {props.isVeg === "Yes" ? (
                    <span className="veg">veg</span>
                ) : (
                    <span className="nonVeg">non-veg</span>
                )}
            </div>
        </div>
    );
};

export default FoodCard;
