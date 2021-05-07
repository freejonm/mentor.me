import React from "react";
import "./List.css";
import "./index.scss"
// import styled from "styled-components";


// const ConHeader = styled.h3`
// font-size: 30px,
// background-color: #012a2f,

// `;


export const Connections = ({ children }) => {
  return (
    <div className="list-overflow-container">
        <h3>Connections</h3>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};