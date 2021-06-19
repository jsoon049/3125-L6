import React from "react";
import { AboutCard } from "./AboutCard.js";
import "./About.css";
import homer from '../images/homer.jpeg'
import kanye from '../images/kanye.jpeg'
import chris from '../images/chris.jpeg'

export const About = () => {
  var team = [
    {
        name: "Kanye West",
        image: kanye,
        description:
          "Kanye is our most experienced therapist. He's been in the game for over 20 years and has continued to evolve his craft to keep up with the times. During his free time you can find Kanye producing beats and talking about himself in 3rd person. "
    },
    {
      name: "Homer Simpson",
      image: homer,
      description:
        "Homer is one of our most popular therapists. He's been practicing chiropractic treament for over 10 years. His previous job in Springgfield really instilled in him a solid foundation in chiropractic treatments. During his free time Homer likes to sleep & eat donuts. ",
    },
    { 
      name: "Chris Griffin",
      image: chris,
      description:
        "Although Chris is our youngest therapist, he is well versed at taking accurate measurements for custom knee braces and custom orthotics. While he sometimes may seem a bit off, rest assured that Chris is just thinking about which of the 14,000,605 possibilities is most optimal to treat his patient.",
    },
  ];

  return (
    <div className="about" id="about">
      <h1><span>Meet the Team</span></h1>
      <div className="about-wrapper">
        {team.map((item, i) => (
          <ul key={i} className="about-ul">
            <AboutCard person={item} />
          </ul>
        ))}
      </div>
    </div>
  );
};
