import React from "react";

export const AboutCard = ({ person }) => {
  return (
    <div className="about-card">
      <div className="about-title">
        <h2 className="about-name">{person.name}</h2>
      </div>
      <div className="about-content">
        <img src={person.image} alt={person.alt} className="about-img"/>
        <p className="about-text about-description">{person.description}</p>
      </div>
    </div>
  );
};
