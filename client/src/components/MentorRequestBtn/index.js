import React from 'react';
import styled from 'styled-components';
import API from '../../utils/API'

const RequestButton = styled.button`
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
  i {
    margin-right: 10px;
  }
`;

const MentorRequestBtn = ({ mentor }) => {

  return (
    <div>
      <RequestButton onClick={() => { API.sendMentorRequest(mentor).then(res => { console.log(res.data) }) }}>
        <i class="fas fa-user-plus"></i>
        Request Mentor
      </RequestButton>
    </div>
  );
};

export default MentorRequestBtn;
