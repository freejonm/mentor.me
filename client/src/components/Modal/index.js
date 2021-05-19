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
        background: '#db784d',
        borderRadius: 3,
        font: 'Righteous',
        border: 0,
        color: 'white',
        height: 36,
        padding: '0 20px',
        margin: '10px',
        boxShadow: '0 3px 5px 2px rgba((219,120,77, .3)'
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

const EditAvatar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 16px;
  border: 2px solid #db784d;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  background-color: #637f7d;
  color: white;
  margin-top: 5px;
  &:hover {
    background-color: #db784d;
    text-decoration: none;
    color: white;
  }
`;

const ModalHead = styled.h3`
  background-color: #637f7d;
  color: white;
  font-family: 'Righteous', sans-serif;
  margin-bottom: 0px;
  border-radius: 5px;
  padding: 20px;
`;

const ModalPicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  img {
    height: 130px;
    width: 110px;
    border-radius: 5%;
    box-shadow: 1px 1px 2px 2px black;
  }
`;



function EditModal({user, handleInputChange, handleSave, updatedUser}) {
  const [isOpen, setIsOpen] = useState(false);
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);

  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log('picture', e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgData(reader.result)
      });
      reader.readAsDataURL(e.target.files[0]);
    }

  }

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={toggleModal}>Edit Profile</Button>
      </ThemeProvider>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <ModalHead>Edit Profile</ModalHead>
        <ModalPicContainer>
          <img src={imgData} />
          <ThemeProvider theme={theme}>
          <form action="/profile" method="post" enctype="multipart/form-data">
              <input type="file" name="avatar" onChange={onChangePicture}/>
              <input type="submit" value="Submit"></input>
            </form>
          </ThemeProvider>
        </ModalPicContainer>
        <EditProfileForm user={user} handleInputChange={handleInputChange}  updatedUser={updatedUser}/>
        <ThemeProvider theme={theme}>
          <Button onClick={toggleModal}>Finish</Button>

        </ThemeProvider>
      </StyledModal>
    </div>
  );
}

export default EditModal;
