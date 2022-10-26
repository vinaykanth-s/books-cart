import React from "react";
import Discounted from "../Discounted";
import Explore from "../Explore";
import Featured from "../Featured";
import Highlights from "../Highlights";
import LandingPage from "../LandingPage";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </div>
  );
};

export default Home;
