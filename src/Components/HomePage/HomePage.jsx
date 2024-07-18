import React from "react";
import NavBar from "../NavBar/NavBar";
import { HomeImage } from "../HomeImage/HomeImage";
import { Categories } from "../Categories/Categories";
import './HomePage.css';
import { Aboutus } from "../Aboutus/Aboutus";
import { ContactUs } from "../ContactUs/ContactUs";
import {Products} from "../Products/Products"
import { Footer } from "../Footer/Footer";

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
      <div>
        <Products/>
      </div>
      <div id="aboutus">
        <Aboutus/>
      </div>
      <div id="contactus">
        <ContactUs/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};
