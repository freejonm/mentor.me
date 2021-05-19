import React from 'react';
import WelcomeDiv from '../components/WelcomeDiv';
import LandingIcons from '../components/LandingIcons';
import LandingSteps from '../components/LandingSteps'


const Landing = () => {
  return (
    <div>
      <WelcomeDiv />
      <LandingIcons />
      <LandingSteps />
    </div>
  );
};

export default Landing;
