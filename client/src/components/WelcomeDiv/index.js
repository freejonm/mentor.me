import React from 'react';
import './index.scss';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import APIImg from '../../assets/icons/icons8-api-100.png';
import CodeImg from '../../assets/icons/icons8-code-100.png';
import CLIImg from '../../assets/icons/icons8-command-line-100.png';
import MergeImg from '../../assets/icons/icons8-merge-git-100.png';
import RespImg from '../../assets/icons/icons8-responsive-100.png';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 75vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 6rem;
    font-family: 'Righteous', sans-serif;
  }
  p {
    margin: 2rem 0;
    font-size: 3rem;
    line-height: 1.1;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 175px;
    right: 100px;
  }
  ${Image}:nth-child(2) {
    bottom: 100px;
    left: 100px;
  }
  ${Image}:nth-child(3) {
    top: 175px;
    left: 50px;
  }
  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 145px;
  }
  ${Image}:nth-child(5) {
    top: 200px;
    right: 300px;
  }
`;

const Button = styled(motion.button)`
  padding: 2rem 3rem;
  font-size: 26px;
  border: 2px solid #637f7d;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  background-color: #eda320;
  color: white;
  &:hover {
    background-color: #db784d;
    text-decoration: none;
    color: white;
  }
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
          The tinder of mentorships.
        </motion.p>
        <Button
          as="a"
          href="/register"
          whileHover={{
            scale: 1.05,
            color: '#637f7d',
            textDecoration: 'none'
          }}
          whileTap={{
            scale: 0.85,
            backgroundColor: '#637f7d',
            border: 'none',
            color: 'white'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
        >
          Get Started
        </Button>
      </ColumnLeft>
      <ColumnRight>
        <Image
          src={APIImg}
          alt="api image"
          whileTap={{ scale: 0.9 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        />
        <Image
          src={CodeImg}
          alt="Code image"
          whileTap={{ scale: 0.9 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
        <Image
          src={CLIImg}
          alt="cli image"
          whileTap={{ scale: 0.9 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        />
        <Image
          src={MergeImg}
          alt="api image"
          whileTap={{ scale: 0.9 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
        <Image
          src={RespImg}
          alt="api image"
          whileTap={{ scale: 0.9 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        />
      </ColumnRight>
    </Container>
  );
};

export default WelcomeDiv;
