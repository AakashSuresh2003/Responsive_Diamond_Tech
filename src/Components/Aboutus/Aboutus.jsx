import React from 'react';
import './Aboutus.css';

export const Aboutus = () => {
    return (
        <div className="aboutus_container">
          <span className="about_title">About Us</span>
          <div className="aboutus_img_container">
            <img className="aboutus_img" src="https://via.placeholder.com/150" alt="About Us" />
          </div>
          <span className="aboutus_text">
            Satisfying the requirements of our customers and commitment to high-quality products are the principles which form the cornerstone of dummy company.
            This policy has remained unchanged throughout the history of our organization. We have established a reputation for being the leading machine tools
            dealer in area, city, state. We offer a comprehensive range of machine tools. This range includes a wide variety of sophistication including computer
            numerical controls, automatic in-process gauging and other material handling automation, depending on the customer need and application. With world class
            manufacturing facilities and a team of experienced professionals, we offer high quality products at the most economical prices.
          </span>
        </div>
      );
}
