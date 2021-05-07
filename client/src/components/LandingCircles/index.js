import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  position: relative;
  height: 200px;
  width: 200px;
  background: transparent;
  border-radius: 50%;
  background-color: white;
  white-space: normal;
  overflow-wrap: normal;
`;

const InnerText = styled.h3`
  text-align: center;
  vertical-align: middle;
  color: black;
  margin-top: 60px;
`;

const LandingCircles = () => {
  return (
    <>
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
      >
        <InnerText>Step 1</InnerText>
      </Container>
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
      >
        <InnerText>Step 2</InnerText>
      </Container>
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
      >
        <InnerText>Step 3</InnerText>
      </Container>
    </>
  );
};

export default LandingCircles;
