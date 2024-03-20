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

        console.log(response.data);

        setSelectedRestaurants(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderstar = (restaurants) => {
    if (!restaurants.count) {
      return (
        <>
          <span className="text-warning font-weight-light display-1 text-center ">
            0 reviews
          </span>
        </>
      );
    }
    return (
      <>
        <StarRating rating={restaurants.avg_rating} />
        <span className="text-warning font-weight-light display-1 text-center">
          ({restaurants.count})
        </span>
      </>
    );
  };

  return (
    <div>
      {selectedRestaurants && (
        <>
          <h1 className="font-weight-light display-1 text-center">
            {selectedRestaurants.data.name}
          </h1>

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
