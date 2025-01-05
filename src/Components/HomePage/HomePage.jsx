import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import laser from "../../assets/laser.jpg";
import Slider from "react-slick";
import productData from "../../assets/productData.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "@mui/material/Button";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import FloatingFormModal from "../FloatingForm/FloatingForm";

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

export const HomePage = () => {
  const navigate = useNavigate();

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/api/v1/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleCategoryClick = (categoryId, categoryName) => {
    localStorage.setItem("selectedCategory", categoryName);
    navigate(`/categories/${categoryId}/subcategories/`);
  };

  return (
    <div className="container-flex p-0">
      <div className="imageCom">
        <img src={laser} alt="HomeImage" width="100%" height="100%" />
      </div>
      <div className="categories-container">
        <div className="text-center categories-header">
          <h1>We Deal In</h1>
        </div>
        <div className="categories-content">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <div
                className="category-card"
                onClick={() =>
                  handleCategoryClick(category._id, category.categoryName)
                }
              >
                <img
                  className="category-image"
                  src={`http://localhost:4001${category.categoryImage}`}
                  alt={category.categoryName}
                />
                <h2 className="category-title">{category.categoryName}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
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

      <div className="aboutus_container">
        <span className="about_title">About Us</span>
        <div className="aboutus_img_container">
          <img
            className="aboutus_img"
            src="https://via.placeholder.com/150"
            alt="About Us"
            loading="lazy"
          />
        </div>
        <span className="aboutus_text">
          A subsidiary of VTP Groups, we've been a trusted name in the trading
          industry since 1969. Over the years, we have acquired vast expertise
          in the field of wood-related works. Building on this strong
          foundation, we've expanded our expertise into the field of machinery.
          Today, we are proud to be recognized for our commitment to quality and
          affordable pricing in the field of machineries ensuring that our
          customers receive excellent value for their investment. At Diamond
          Technologies, we understand that purchasing machinery is a significant
          investment for any business. That’s why we focus on quality and
          affordable pricing—so our customers can get the most out of their
          investments. Our machinery is built to last, designed for optimal
          performance, and priced to suit your budget. We’re proud to be a
          partner who helps you achieve your goals efficiently and reliably.
        </span>
      </div>

      <div className="contactus_container">
        <span className="title">Contact Us</span>
        <div className="content_wrapper">
          <div className="map_container">
            <iframe
              title="Diamond Technology Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31107.03127067896!2d80.256567!3d13.145819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52652bf1173e49%3A0x9220dfed4b121b75!2sDiamond%20Technology!5e0!3m2!1sen!2sin!4v1688898003846!5m2!1sen!2sin"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact_details">
            <ul className="contact_info">
              <li>
                <span className="contact_label">Our Office Address:</span>
                <span className="contact_value">
                  VTP Towers, No.206, G.N.T.Road, Erukkancheri, Chennai- 600118.
                </span>
              </li>
              <li>
                <span className="contact_label">Phone:</span>
                <span className="contact_value">
                  +91 7299211777, 9340011444
                </span>
              </li>
              <li>
                <span className="contact_label">Email:</span>
                <span className="contact_value">
                  diamond_technologies@outlook.com
                </span>
              </li>
              <li>
                <span className="contact_label">Our timing:</span>
                <span className="contact_value">
                  Mon - Sat : 10:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
            <div className="btn-contactUs">
              <Button variant="outlined" size="large" onClick={handleOpenModal}>
                Enquire
              </Button>
            </div>
          </div>
        </div>
        <FloatingFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};
