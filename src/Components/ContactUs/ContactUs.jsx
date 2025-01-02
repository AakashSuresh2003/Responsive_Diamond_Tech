import React, { useState } from "react";
import "./ContactUs.css";
import Button from "@mui/material/Button";
import FloatingFormModal from "../FloatingForm/FloatingForm";

export const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
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
              <span className="contact_value">+91 7299211777, 9340011444</span>
            </li>
            <li>
              <span className="contact_label">Email:</span>
              <span className="contact_value">diamond_technologies@outlook.com</span>
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
  );
};
