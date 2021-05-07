import React from "react";
import "./List.css";

export const ConnectionsItem = props => (
  <li className="list-group-item">
    {props.children}
  </li>
);