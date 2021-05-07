import React from "react";
import "./List.css";
import styled from "styled-components";

const ConHeader = styled.h3`
font-size: 

`;


export const Connections = ({ children }) => {
  return (
    <div className="list-overflow-container">
        <ConHeader>Connections</ConHeader>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};