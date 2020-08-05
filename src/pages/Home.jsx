import React from "react";

import Navbar from "../components/Navbar";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="toppage">
        <img
          className="topImage"
          src="../../images/top-image.png"
          alt="トップ画像"
        />
      </div>
    </div>
  );
};

export default Home;
