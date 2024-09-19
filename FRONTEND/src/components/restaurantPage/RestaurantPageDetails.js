const RestaurantPageDetails = ({ restaurantData }) => {
    let offer = restaurantData["Offer Name"].split(",");
    return (
        <div className="restaurantInfo">
            <div className="name">{restaurantData["Restaurant Name"]}</div>
            <div className="resCuisine">{restaurantData.Cuisine}</div>
            <div className="location">
                {restaurantData["Area"]} | {restaurantData.Location}
            </div>

            <div className="distance">
                {(restaurantData["Delivery Time"] * 0.3).toFixed(2)} km away
                from you
            </div>
            <div className="deliveryIn">
                Delivery in: {restaurantData["Delivery Time"]} mins
            </div>
            <div className="totalOffers">
                {restaurantData["Number of Offers"]} offers!!!
            </div>
            <div>
                {restaurantData["Offer Name"].split(",").map((ele) => {
                    let allOfferSplit = ele.split("\n");
                    let offerCode = allOfferSplit[allOfferSplit.length - 1]
                        .replace("ABOVE", " above")
                        .replace("USE", "use");
                    let offerDetails;
                    let offerName;
                    if (allOfferSplit.length > 2) {
                        offerDetails = allOfferSplit[1];
                        offerName = allOfferSplit[0];
                    } else {
                        offerDetails = allOfferSplit[0];
                    }
                    return (
                        <div className="allOffers">
                            {offerName && <div>{offerName}!!</div>}
                            <div>{offerDetails}</div>
                            <div>{offerCode}</div>
                            <br></br>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RestaurantPageDetails;
