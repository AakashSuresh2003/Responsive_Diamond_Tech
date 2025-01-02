import React from "react";
import "./AboutsUSDetailed.css";

const AboutsUSDetailed = () => {
  const sections = [
    {
      image:
        "https://media.istockphoto.com/id/1383796215/photo/silhouette-of-man-holding-binoculars-on-mountain-peak-against-bright-sunlight-sky-background.jpg?s=612x612&w=0&k=20&c=Y1bdRKzRcs6DVSPjqAn3fVQIdkrA-s1-uWHvnFviCOQ=",
      title: "Vision",
      content: `To be the leading provider of comprehensive machinery solutions, creating lasting value for our customers through innovation and expertise. To become the most trusted provider of high-quality, affordable machinery solutions, making advanced technology accessible to businesses of all sizes.  `,
    },
    {
      image:
        "https://media.istockphoto.com/id/1383796215/photo/silhouette-of-man-holding-binoculars-on-mountain-peak-against-bright-sunlight-sky-background.jpg?s=612x612&w=0&k=20&c=Y1bdRKzRcs6DVSPjqAn3fVQIdkrA-s1-uWHvnFviCOQ=",
      title: "Mission",
      content: `Our mission is to offer the best machinery at competitive prices, ensuring our customers have access to the latest technology. We aim to build strong, long-lasting relationships with our customers by providing quality products to meet all their requirements, both today and in the future. We strive to offer the best in quality while keeping costs affordable, empowering our customers to thrive in their industries.`,
    }
  ];

  return (
    <div className="layout-container">
      {sections.map((section, index) => (
        <div key={index} className="layout-section">
          <img
            src={section.image}
            alt={section.title}
            className="layout-image"
          />
          <div className="layout-text">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutsUSDetailed;
