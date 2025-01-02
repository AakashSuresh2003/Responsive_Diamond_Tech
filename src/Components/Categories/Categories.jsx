import React from "react";
import './Categories.css';

export const Categories = () => {
  return (
    <div className="container"> 
      <div className="text-center categories-header">
        <h1>We Deal In</h1>
      </div>
      <div className="categories-content">
        <div className="category-item">
          <div className="category-card">
            <img
              className="category-image"
              src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
              alt="Wood Processing"
            />
            <h2 className="category-title">Wood Processing machines</h2>
          </div>
        </div>
        <div className="category-item">
          <div className="category-card">
            <img
              className="category-image"
              src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
              alt="Stone Processing"
            />
            <h2 className="category-title">Stone Processing Machines</h2>
          </div>
        </div>
        <div className="category-item">
          <div className="category-card">
            <img
              className="category-image"
              src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
              alt="Laser Machines"
            />
            <h2 className="category-title">Laser Machines</h2>
          </div>
        </div>
      </div>
    </div>
  );
};