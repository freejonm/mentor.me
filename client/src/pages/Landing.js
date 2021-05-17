import React from 'react';
import WelcomeDiv from '../components/WelcomeDiv';
import LandingCircles from '../components/LandingCircles';
import LandingPaper from '../components/LandingIcons';
import LandingSteps from '../components/LandingSteps'
import styled from 'styled-components';

const Landing = () => {
  return (
    <div>
      <WelcomeDiv />
      {/* <LandingCircles /> */}
      <LandingPaper />
      <LandingSteps />
    </div>
  );
};

export default Landing;
