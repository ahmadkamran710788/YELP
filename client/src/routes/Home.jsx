import React from "react";
import Header from "../Components/Header";
import AddRestaurants from "../Components/AddRestaurants";
import RestaurantList from "../Components/ResauranttList";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <AddRestaurants />
      <RestaurantList />
    </div>
  );
};
export default Home;
