import React from "react";
import MentorRequestBtn from '../MentorRequestBtn'
import styled from 'styled-components'

const PotentialMentor = styled.li`
align-content: left;
font-size: 22px;

  img{
    height:100px;
    width:100px;
  }
`;

export const PotentialConnectionsItem = props => (
  <PotentialMentor>
    {props.children} <MentorRequestBtn mentor={props.mentorId}/>
  </PotentialMentor>
);