import React, { useState, useEffect, useRef } from 'react';
import Modal from "styled-react-modal";
import EditProfileForm from '../EditProfileForm';
import styled from 'styled-components';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
justify-content: flex-start;
font-family: 'Ubuntu';
width: 100%;
font-size: 16px;
ul{
    list-style-type: none;
    background: transparent;
    h5 {
        font-weight: 'bold';
        font-size: 22px;
        font-family: 'Righteous', sans-serif;
    }
    li {
        margin-bottom: 5px;
        flex-direction: row;
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


function ViewRequestModal({avatar,
  userName,
  fullName,
  pronouns,
  currentPosition,
  yearsExp,
  education,
  location}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <div>
        <ViewRequestButton onClick={toggleModal}>View Request</ViewRequestButton>
      
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <ModalHead>{(fullName, pronouns)}</ModalHead>
            
            <img src="https://randomuser.me/api/portraits/women/75.jpg" />
            {/* <EditAvatar>Change Picture</EditAvatar> */}
          
            <Body>
                <ul>
                    <li>Name:{fullName}</li>
                    <br></br>
                    <li>Pronouns:{pronouns}</li>
                    <br></br>
                    <li>Location:{location}</li>
                    <br></br>
                    <li>Current Position:{currentPosition} </li>
                    <br></br>
                    <li>Years Experience:{yearsExp}</li>
                    <br></br>
                    <li>Education:{education}</li>        
              </ul>
              </Body>
           
       

    
          <ViewRequestButton onClick={toggleModal}>Accept</ViewRequestButton>
          <ViewRequestButton onClick={toggleModal}>Deny</ViewRequestButton>

      
      </StyledModal>
    </div>
  );
}

export default ViewRequestModal;
