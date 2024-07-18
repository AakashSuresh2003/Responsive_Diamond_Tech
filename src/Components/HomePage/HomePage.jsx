import React from "react";
import NavBar from "../NavBar/NavBar";
import { HomeImage } from "../HomeImage/HomeImage";
import { Categories } from "../Categories/Categories";
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="container-fluid p-0">
      <div className="zindex-1">
        <NavBar />
      </div>
      <div className="home-image-container">
        <HomeImage />
      </div>
      <div className="categories-container">
        <Categories />
      </div>
    </div>
  );
};
