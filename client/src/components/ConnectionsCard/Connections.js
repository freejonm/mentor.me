import React from "react";
import "./List.css";


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