import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;

  position: relative;
  height: 100px;
  width: 100px;
  background-image: url("https://jaarvisaccelerator.com/wp-content/uploads/2016/01/mentorship.png");
  border-radius: 50%;
  background-color:white;
`;

const LandingCircles = ({ content }) => {
  return (
    <Container
      initial={{ opacity: 0, x: -100 }}
      animate={{
        scale: [1, 1.4, 1.4, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%'],
        opacity: 1,
        x: 0
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        // loop: Infinity,
        repeatDelay: 1
      }}
    ></Container>
  );
};

export default LandingCircles;
