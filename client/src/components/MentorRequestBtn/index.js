import React from 'react';
import styled from 'styled-components';

const RequestButton = styled.button`
  background-color: #db784d;
  border-radius: 3px;
  font-family: 'Righteous', sans-serif;
  border: none;
  color: white;
  height: 36px;
  padding: 0px 20px;
  margin: 10pxl;
  box-shadow: 0 3px 5px 2px rgba(219, 120, 77, 0.3);
`;

const MentorRequestBtn = () => {
  return (
    <div>
      <RequestButton>
        <i class="fas fa-user-plus"></i>
        Request Mentor
      </RequestButton>
    </div>
  );
};

export default MentorRequestBtn;
