import React from "react";

export const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-title">
        <h2 className="service-name">{service.name}</h2>
      </div>
      <div className="service-content">
        <p className="service-text service-description">{service.description}</p>
      </div>
      <p className="service-text service-price">{"Price: $" + service.price}</p>
    </div>
  );
};
