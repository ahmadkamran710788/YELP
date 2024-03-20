import React, { useContext, useEffect } from "react";
import RestaurantFinder from "../Apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContexts";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  const navigation = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        // console.log(response.data.data);
        setRestaurants(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // Include an empty dependency array to ensure useEffect runs only once

  const handleEdit = async (e, id) => {
    e.stopPropagation();
    navigation(`/restaurants/${id}/update`);
  };
  const gettodetail = async (id) => {
    navigation(`/restaurants/${id}`);
  };

  const renderstar = (restaurants) => {
    if (!restaurants.count) {
      return (
        <>
          <span className="text-warning ">0 reviews</span>
        </>
      );
    }
    return (
      <>
        <StarRating rating={restaurants.avg_rating} />
        <span className="text-warning ml-1">({restaurants.count})</span>
      </>
    );
  };
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      console.log(response);
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
    } catch (error) {}
  };
  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead className="table-primary">
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((item) => (
              <tr
                onClick={() => {
                  gettodetail(item.id);
                }}
                key={item.id}
              >
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{"$".repeat(item.price_range)}</td>
                <td>{renderstar(item)}</td>
                <td>
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="btn btn-warning"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
