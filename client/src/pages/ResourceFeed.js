import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import API from "../utils/API";

const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 100px;
  width: 50%;
  margin: auto;
  align-items: center;
  height: auto;
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
  font-family: "Righteous", sans-serif;
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
  height: auto;
`;

const UserPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: left;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #637f7d;
  height: 24px;
  width: 100%;
  background-color: #637f7d;
  h2 {
    font-size: 21px;
    font-style: italic margin-right 10px;
  }
`;

const UserPostBody = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: left;
  border-top: none;
  width: 100%;
  font-size: 20px;
  padding: 20px;
`;

const UserPostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: left;
  border-top: 2px solid #637f7d;
  background-color: #637f7d;
  width: 100%;
  a {
    font-size: 20px;
    color: white;
    margin-right: 5px;
    :hover {
      text-decoration: none;
      cursor: pointer;
      color: #eda320;
    }
  }
  i {
    font-size: 20px;
    color: #eda320;
    margin-right: 5px;
  }
`;

const ResourceFeed = ({ userName, datePosted }) => {
  const [feed, setFeed] = useState("");
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    username: userName,
  });

  const renderFeed = () => {
    API.getAllPosts().then((posts) => {
      let feedData = posts.data.post;
      setPosts(feedData);
    });
  };

  useEffect(() => {
    renderFeed();
  }, []);

  const handleChange = (event) => {
      const { name, value } = event.target;
      setPost({ ...post, [name]: value });
    },
    handleCreatePost = (e) => {
      e.preventDefault();
      API.createPost(post).then(() => {
        renderFeed();
      });
    };

  return (
    <div>
      <FeedContainer>
        <h1>Feed</h1>
        <h5>
          This is a place to post, share, comment, and create all things coding.
          Please follow the rules and guidelines or face the consequences...
        </h5>
        <PostCard>
          <h2> What would you like to share with your fellow coders? </h2>
          <WritePost
            name="body"
            value={post.body}
            onChange={handleChange}
            placeholder="Remember, be nice!"
            cols="30"
            rows="5"
          ></WritePost>
          <Button
            onClick={handleCreatePost}
            whileHover={{
              scale: 1.05,
              color: "#637f7d",
              textDecoration: "none",
            }}
            whileTap={{
              scale: 0.85,
              backgroundColor: "#637f7d",
              border: "none",
              color: "white",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Create Post
          </Button>
        </PostCard>
        <UserPostContainer>
          <UserPostHeader>
            <h2>Posted By: jarweav on 01/21/21</h2>
          </UserPostHeader>
          <UserPostBody>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              eleifend urna dolor, blandit interdum elit vehicula quis. Morbi
              quis pharetra felis. Maecenas a consectetur tellus, vitae pharetra
              lacus. Duis eu est vel massa luctus rutrum. Vestibulum tristique
              dui vel arcu vestibulum interdum. Donec laoreet lectus id bibendum
              mattis.
            </span>
          </UserPostBody>
          <UserPostFooter>
            <a href="#">
              <i class="far fa-comments"></i>Comments
            </a>
          </UserPostFooter>
        </UserPostContainer>
        {posts.map((post) => {
          return (
            <UserPostContainer>
              <UserPostHeader>
                <h2>
                  Posted By: {post._id}
                  {post.date}
                </h2>
                
              </UserPostHeader>
              <UserPostBody>
                <span>{post.body}</span>
              </UserPostBody>
              <UserPostFooter>
                <a href="#">
                  <i class="far fa-comments"></i>Comments
                </a>
              </UserPostFooter>
            </UserPostContainer>
          );
        })}
      </FeedContainer>
    </div>
  );
};

export default ResourceFeed;
