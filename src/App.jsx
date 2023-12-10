import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Features from "./components/Features";
import Review from "./components/Review";

const App = () => {
  return (
    <div>
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="shop">
        <Shop />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="review">
        <Review/>
      </div>
    </div>
  );
};

export default App;
