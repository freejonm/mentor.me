import React, { useState, useEffect, useRef } from 'react';
import Modal from "styled-react-modal";
import EditProfileForm from '../EditProfileForm';
import styled from 'styled-components';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        // background: 'linear-gradient(45deg, #db784d 30%, #eda320 90%)',
        background: '#db784d',
        borderRadius: 3,
        font: 'Righteous',
        border: 0,
        color: 'white',
        height: 36,
        padding: '0 20px',
        margin: '10px',
        boxShadow: '0 3px 5px 2px rgba((219,120,77, .3)'
        // width: 100
      }
    }
  }
});

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
  email,
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
      <ThemeProvider theme={theme}>
        <Button onClick={toggleModal}>View Request</Button>
      </ThemeProvider>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <ModalHead>View Request</ModalHead>


        <ThemeProvider theme={theme}>
          <Button onClick={toggleModal}>Finish</Button>

        </ThemeProvider>
      </StyledModal>
    </div>
  );
}

export default ViewRequestModal;
