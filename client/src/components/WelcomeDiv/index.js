import React from 'react';
import './index.scss';
import LandingImage from "../../assets/mentor-landing-image.jpg"
const WelcomeDiv = () => {
  return (
    <div className="land">
      <div className="welcomeContainer">
        <h1 className="landingLogo">
          Where mentors and mentees connect and eat salads.
        </h1>
        <h3 className="descrip">
          Mentor.me is an app that fosters mentoring relationships among
          career-changers entering the tech industry via coding bootcamps.
          Establishing these relationships can be crucial for success, but is
          sometimes a difficult task for various reasons. Our app will make both
          meeting potential mentors and maintaining connections a less painful
          process.
        </h3>
        <img src={LandingImage} alt="mentors collaborating"/>
      </div>
    </div>
  );
};

export default WelcomeDiv;
