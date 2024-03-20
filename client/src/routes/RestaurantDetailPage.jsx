import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../Apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContexts";
import StarRating from "../Components/StarRating";
import Review from "../Components/Review";
import AddReview from "../Components/AddReview";
const ResturantDetail = () => {
  const { id } = useParams();
  const { selectedRestaurants, setSelectedRestaurants } =
    useContext(RestaurantsContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);

        // console.log(response.data.data);
        //console.log(response.data.review);

        setSelectedRestaurants(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderstar = (restaurants) => {
    console.log(restaurants);
    return (
      <div style={{ textAlign: "center" }}>
        <StarRating
          rating={restaurants.avg_rating}
          style={{ fontSize: "small", display: "inline-block" }}
        />
        <span
          className="text-warning font-weight-light display-1"
          style={{ fontSize: "small", display: "inline-block" }}
        >
          ({restaurants.count})
        </span>
      </div>
    );
  };

  return (
    <div>
      {selectedRestaurants && (
        <>
          <h1 className="font-weight-light display-1 text-center">
            {selectedRestaurants.data.name}
          </h1>
          {renderstar(selectedRestaurants.data)}

          <div className="mt-3">
            <Review reviews={selectedRestaurants.review} />
          </div>
          <AddReview />
        </>
      )}{" "}
    </div>
  );
};
export default ResturantDetail;
