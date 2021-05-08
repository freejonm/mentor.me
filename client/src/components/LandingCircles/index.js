import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;

const Circles = styled(motion.div)`
  position: relative;
  height: 350px;
  width: 350px;
  background: transparent;
  border-radius: 50%;
  background-color: #637f7d;
  white-space: normal;
  overflow-wrap: normal;
  -webkit-box-shadow: 3px 3px 5px 5px black; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 3px 3px 5px 5px black; /* Firefox 3.5 - 3.6 */
  box-shadow: 3px 3px 5px 5px black;
`;

const InnerText = styled(motion.h2)`
  text-align: center;
  vertical-align: middle;
  color: black;
  margin-top: 60px;
  color: #eda320;
`;

const LandingCircles = () => {
  return (
    <Wrapper>
      <Circles
        initial={{ opacity: 0, x: -100 }}
        animate={{
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
        <InnerText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10 }}
        >
          Step 1: 
          
        </InnerText>{' '}
        <InnerText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10 }}
        >
          Find mentors 
          
        </InnerText>{' '}
      </Circles>
      <Circles
        initial={{ opacity: 0, x: -100 }}
        animate={{
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
        <InnerText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10 }}
        >
          Step 2:
        </InnerText>
        <InnerText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10 }}
        >
          Eat Salad
        </InnerText>
      </Circles>
      <Circles
        initial={{ opacity: 0, x: -100 }}
        animate={{
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
        <InnerText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10 }}
        >
          Step 3:
        </InnerText>
        <InnerText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10 }}
        >
          Profit
        </InnerText>
      </Circles>
    </Wrapper>
  );
};

export default LandingCircles;
