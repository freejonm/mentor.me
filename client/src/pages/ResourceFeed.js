import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import API from '../utils/API';

const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 100px;
  width: 50%;
  margin: auto;
  align-items: center;
  height: auto;
  width: 60%;
  color: white;
`;

const PostCard = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: transparent;
  opacity: 1;
  h4 {
    text-align: center;
  }
`;

const WritePost = styled.textarea`
  width: 100%;
  border: 3px solid #cccccc;
  padding: 5px;
  font-family: 'Righteous', sans-serif;
  background-color: #012a2f;
  color: white;
  outline: none;
  resize: none;
  font-size: 24px;
  border-radius: 5px;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 22px;
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

const UserPostContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  background: transparent;
  opacity: 1;
  border: 2px solid #637f7d;
  border-radius: 5px;
  margin-top: 10px;
  height: 20vh;
`;

// const UserPost

const ResourceFeed = () => {
  return (
    <div>
      <FeedContainer>
        <h1>Feed</h1>
        <h4>
          This is a place to post, share, comment, and create all things coding.
          Please follow the rules and guidelines or face the consequences...
        </h4>
        <PostCard>
          <h2> What would you like to share with your fellow coders? </h2>
          <WritePost placeholder="Remember, be nice!" cols="30" rows="5">
            {' '}
          </WritePost>
          <Button
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
            Create Post
          </Button>
        </PostCard>
        <UserPostContainer></UserPostContainer>
      </FeedContainer>
    </div>
  );
};

export default ResourceFeed;
