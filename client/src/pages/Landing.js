import React from 'react';
import WelcomeDiv from '../components/WelcomeDiv';
// import LandingCircles from '../components/LandingCircles';
import LandingIcons from '../components/LandingIcons';
import LandingSteps from '../components/LandingSteps'
import styled from 'styled-components';
import StickyFooter from '../components/StickyFooter';

const Landing = () => {
  return (
    <div>
      <WelcomeDiv />
      <LandingIcons />
      {/* <LandingCircles /> */}

      <LandingSteps />
      {/* <StickyFooter /> */}
    </div>
  );
};

export default Landing;
