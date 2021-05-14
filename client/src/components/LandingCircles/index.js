import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import imageone from './images/mentor1.jpg'
import imagetwo from './images/mentor2.jpg'
import imagethree from './images/mentor3.jpg'

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
  background-image: url(${props => props.url});
  background-size: 350px 350px;
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
        url={imageone}
      >
        
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
        url={imagetwo}
      >
        
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
        url={imagethree}
      >
        
      </Circles>
    </Wrapper>
  );
};

export default LandingCircles;
