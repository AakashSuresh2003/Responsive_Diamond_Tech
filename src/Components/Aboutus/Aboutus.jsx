import React from "react";
import "./Aboutus.css";

export const Aboutus = () => {
  return (
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
        industry since 1969. Over the years, we have acquired vast expertise in
        the field of wood-related works. Building on this strong foundation,
        we've expanded our expertise into the field of machinery. Today, we are
        proud to be recognized for our commitment to quality and affordable
        pricing in the field of machineries ensuring that our customers receive
        excellent value for their investment. At Diamond Technologies, we
        understand that purchasing machinery is a significant investment for any
        business. That’s why we focus on quality and affordable pricing—so our
        customers can get the most out of their investments. Our machinery is
        built to last, designed for optimal performance, and priced to suit your
        budget. We’re proud to be a partner who helps you achieve your goals
        efficiently and reliably.
      </span>
    </div>
  );
};
