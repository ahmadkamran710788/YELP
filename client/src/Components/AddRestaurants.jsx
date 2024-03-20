import React, { useContext, useState } from "react";
import RestaurantFinder from "../Apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContexts";

const AddRestaurants = () => {
  const { addRestaurant } = useContext(RestaurantsContext);
  const [name, Setname] = useState("");
  const [location, Setlocation] = useState("");
  const [price_range, Setprice_range] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name: name,
        location: location,
        price_range: price_range,
      });
      console.log(response);
      addRestaurant(response.data.data);
    } catch (error) {}
  };

  return (
    <div className="container   mb-4">
      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                Setname(e.target.value);
              }}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={location}
              onChange={(e) => {
                Setlocation(e.target.value);
              }}
              className="form-control"
              placeholder="Location"
            />
          </div>
          <div className="col">
            <select
              value={price_range}
              onChange={(e) => {
                Setprice_range(e.target.value);
              }}
              className="custom-select my-1 mr-sm-2"
              style={{ width: "100%", height: "100%" }}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddRestaurants;
