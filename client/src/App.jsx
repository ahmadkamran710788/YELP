import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Update from "./routes/Updatepage";
import ResturantDetail from "./routes/RestaurantDetailPage";
import { RestaurantsContextProvider } from "./context/RestaurantsContexts";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/restaurants/:id/update" Component={Update} />
            <Route exact path="/restaurants/:id" Component={ResturantDetail} />
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};
export default App;
