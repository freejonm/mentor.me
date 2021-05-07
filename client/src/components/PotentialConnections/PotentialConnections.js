import React from "react";
// import "./List.css";
import "./index.scss"

export const PotentialConnections = ({ children }) => {
  return (
    <div className="list-overflow-container">
        <h3>Potential Connections</h3>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};