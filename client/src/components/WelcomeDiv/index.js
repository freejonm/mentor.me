import React from 'react';
import './index.scss';
import LandingImage from '../../assets/mentor-landing-image.jpg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import "./styles/_variables.scss";

// const Section = styled.section``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 75vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color:white;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 2rem;
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

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background-color: orange;
  color: #fff;
`;

const WelcomeDiv = () => {
  const fadeIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Container>
      <ColumnLeft>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          mentor me
        </motion.h1>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          Where salads are eaten with help.
        </motion.p>
        <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{
          scale: .85,
          backgroundColor: '#637f7d',
          border: 'none',
          color: 'white'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        >Get Started</Button>
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
