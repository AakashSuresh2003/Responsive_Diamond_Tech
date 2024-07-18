import React from "react";
import Slider from "react-slick";
import "./Products.css";
import productData from "../../assets/productData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", color: "black", right: "1%", ...style }}
      onClick={onClick}
    >
      <ChevronRightIcon style={{ fontSize: "2rem" }} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", color: "black", left: "1%", ...style }}
      onClick={onClick}
    >
      <ChevronLeftIcon style={{ fontSize: "2rem" }} />
    </div>
  );
};

export const Products = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="Products">
      <h1 className="head_title">Products</h1>
      <Slider {...settings} className="main_products">
        {productData.map((product, index) => (
          <div className="product_items" key={index}>
            <img src={product.src} alt="product" />
            <span className="main_products_title">{product.description}</span>
          </div>
        ))}
      </Slider>
        <div className="Productsbutton">
        <Button variant="outlined" size="large">
          View More
        </Button>
        </div>
    </div>
  );
};
