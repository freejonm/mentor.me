import React, { useState, useEffect, useRef } from 'react';
import Modal from "styled-react-modal";
import EditProfileForm from '../EditProfileForm';
import styled from 'styled-components';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import API from '../../utils/API'

const ViewRequestButton = styled.button`
  background-color: #01444c;
  color: white;
  border-radius: 3px;
  font-family: 'Righteous', sans-serif;
  border: none;
  height: 36px;
  padding: 0px 20px;
  margin: 10px;
  box-shadow: 0 3px 5px 2px rgba(219, 120, 77, 0.3);
  font-size: 16px;
  &:hover {
    background-color: #637f7d;
    color: #012a2f;
  }
`;

const UserProfileTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'Righteous', sans-serif;
  font-size: 32px;
  background-color: #db784d;
  border-radius: 5px;
  margin-bottom: 10px;
  

`;

const Body = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
font-family: 'Ubuntu';
width: 100%;
font-size: 16px;
ul{
    list-style-type: none;
    background: transparent;
    h5 {
        font-weight: 'bold';
        font-size: 32px;
        font-family: 'Righteous', sans-serif;
        color: white;
    }
    li {
        margin-bottom: 5px;
        flex-direction: row;
        color:white;
    }
}
`;

const StyledModal = Modal.styled`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 50%;
background-color: #01444c;
border: 3px solid #000;
border-radius: 5px;
`;


const ModalHead = styled.h3`
  background-color: #637f7d;
  color: white;
  font-family: 'Righteous', sans-serif;
  margin-bottom: 0px;
  border-radius: 5px;
  padding: 20px;
`;


function ViewRequestModal({
user, request}) {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  function toggleModal(e) {
    if (!isOpen) {
      setIsOpen(true);
      API.getUserByID(request.userId).then(res => setUserInfo(res.data.users));
    } else {
      setIsOpen(false);
      setUserInfo({});
    }
  }

  const acceptRequest = (e) => {
    API.approveMentorRequest(userInfo._id, user).then(res => {
      console.log(res.data);
    })
  }

  const denyRequest = (e) => {

  }

  return (
    <div>
        <ViewRequestButton onClick={toggleModal}>View Request</ViewRequestButton>
      
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <ModalHead>{userInfo.firstName} {userInfo.lastName} ({userInfo.pronouns})</ModalHead>
            <br></br>
            <img src="https://randomuser.me/api/portraits/women/75.jpg" />
            {/* <EditAvatar>Change Picture</EditAvatar> */}
          
            <Body>
                <ul>
                    <br></br>
                    <li>Location:{userInfo.location}</li>
                    <br></br>
                    <li>Current Position:{userInfo.currentPosition} </li>
                    <br></br>
                    <li>Education:{userInfo.education}</li>        
                </ul>
            </Body>
            
          <ViewRequestButton onClick={acceptRequest}>Accept</ViewRequestButton>
          <ViewRequestButton onClick={toggleModal}>Deny</ViewRequestButton>

      
      </StyledModal>
    </div>
  );
}

export default ViewRequestModal;
