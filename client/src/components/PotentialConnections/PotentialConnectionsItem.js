import React from "react";
import MentorRequestBtn from '../MentorRequestBtn'

export const PotentialConnectionsItem = props => (
  <li className="list-group-item">
    {props.children} <MentorRequestBtn/>
  </li>
);