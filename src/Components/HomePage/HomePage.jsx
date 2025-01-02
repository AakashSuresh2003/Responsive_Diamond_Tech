import React from "react";
import NavBar from "../NavBar/NavBar";
import { HomeImage } from "../HomeImage/HomeImage";
import { Categories } from "../Categories/Categories";
import './HomePage.css';
import { Aboutus } from "../Aboutus/Aboutus";
import { ContactUs } from "../ContactUs/ContactUs";
import {Products} from "../Products/Products"
import { Footer } from "../Footer/Footer";

export const HomePage = () => (
  <div className="container-flex p-0">
    <HomeImage />
    <Categories />
    <Products />
    <section id="aboutus"><Aboutus /></section>
    <section id="contactus"><ContactUs /></section>
    <Footer />
  </div>
);
