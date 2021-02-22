import React from "react";

import MainHeader from "../Homepage/MainHeader";
import Trending from "../Homepage/Trending";
import "../../Css/Layout/Homepage.css";

const Homepage = () => {
  return (
    <div className="Homepage">
      <MainHeader />
      <Trending />
    </div>
  );
};

export default Homepage;
