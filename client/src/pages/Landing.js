import React from 'react';
import WelcomeDiv from '../components/WelcomeDiv';
import LandingCircles from '../components/LandingCircles';
import LandingIcons from '../components/LandingIcons';
import LandingSteps from '../components/LandingSteps'
import styled from 'styled-components';

const Landing = () => {
  return (
    <div>
      <WelcomeDiv />
      {/* <LandingCircles /> */}
      <LandingIcons />
      <LandingSteps />
    </div>
  );
};

export default Landing;
