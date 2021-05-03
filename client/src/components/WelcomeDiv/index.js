import React from 'react';
import './index.scss';
import LandingImage from '../../assets/mentor-landing-image.jpg';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// const Section = styled.section``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 6rem;
  }
  p {
    margin: 2rem 0;
    font-size: 3rem;
    line-height: 1.1;
  }
`;

const ColumnRight = styled.div``;

const Button = styled(motion.button)``;

const WelcomeDiv = () => {
  return (
    <Container>
      <ColumnLeft>
        <h1>mentor me</h1>
        <p>Where salads are eaten with help.</p>
      </ColumnLeft>
    </Container>
    // <div className="land">
    //   <div className="welcomeContainer">
    //     <h1 className="landingLogo">
    //       Where mentors and mentees connect and eat salads.
    //     </h1>
    //     <div className="secondLandingContainer">
    //       <h3 className="descrip">
    //         We foster mentoring relationships among career-changers entering the
    //         tech industry via coding bootcamps.
    //       </h3>
    //       <button className="landGetStart">
    //         <a className="getStartedLink" href="/register">
    //           Get Started Here
    //         </a>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default WelcomeDiv;
