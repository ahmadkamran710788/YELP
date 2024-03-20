import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../Apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContexts";
import { useNavigate } from "react-router-dom";
const UpdateRestaurant = (props) => {
  const { id } = useParams();
  const {} = useContext(RestaurantsContext);
  const [name, SetName] = useState("");
  const [location, SetLocation] = useState("");
  const [priceRange, SetPriceRange] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      console.log(response.data.data);
      SetName(response.data.data.name);
      SetLocation(response.data.data.location);
      SetPriceRange(response.data.data.price_range);
    };
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await RestaurantFinder.put(`/${id}`, {
        name: name,
        location: location,
        price_range: priceRange,
      });
      navigation(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label
            htmlFor="name"
            style={{ marginRight: "10px", fontWeight: "bold" }}
          >
            Name
          </label>
          <input
            value={name}
            onChange={(e) => SetName(e.target.value)}
            id="name"
            className="form-control"
            type="text"
            style={{ marginBottom: "20px" }}
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="location"
            style={{ marginRight: "10px", fontWeight: "bold" }}
          >
            Location
          </label>
          <input
            value={location}
            onChange={(e) => SetLocation(e.target.value)}
            id="location"
            className="form-control"
            type="text"
            style={{ marginBottom: "20px" }}
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="price_range"
            style={{ marginRight: "10px", fontWeight: "bold" }}
          >
            Price Range
          </label>
          <input
            value={priceRange}
            onChange={(e) => SetPriceRange(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
            style={{ marginBottom: "20px" }}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
