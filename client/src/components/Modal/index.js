import React, { useState, useEffect, useRef } from 'react';

import Modal from 'styled-react-modal';
import EditProfileForm from '../EditProfileForm';
import styled from 'styled-components';

const StyledModal = Modal.styled`
    display: grid;
    grid-template-columns: fr;  
    width: 60%;
    height: auto;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: #637f7d;
  
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
  background-color: #01444c;
    color: white;  
    font-family: 'Righteous', sans-serif;
    margin-bottom: 0px;
    border: 2px solid #db784d;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 2px black;


  `;


function EditModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggleModal}>Edit Profile</button>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
          <ModalHead>
              Edit Profile
          </ModalHead>
        <EditProfileForm />
        <img src="https://randomuser.me/api/portraits/women/75.jpg" />
        <EditAvatar>Change Picture</EditAvatar>
        <button onClick={toggleModal}>Close me</button>
      </StyledModal>
    </div>
  );
}

export default EditModal;
